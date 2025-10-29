# ================================
# Stage 1: Build Tailwind CSS
# ================================
FROM node:20-alpine AS frontend-builder

WORKDIR /app

# Copy package files first for caching
COPY package*.json ./
RUN npm install --production

# Copy Tailwind and PostCSS configs
COPY tailwind.config.js postcss.config.js ./

# Copy only static assets (CSS, JS, images)
COPY static ./static

# Build Tailwind (input.css -> style.css)
RUN npx tailwindcss -i ./static/input.css -o ./static/style.css --minify


# ================================
# Stage 2: Build FastAPI Backend
# ================================
FROM python:3.11-slim AS backend

WORKDIR /app

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PORT=8080

# Install OS-level deps (needed for uvicorn/gunicorn)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential curl && \
    rm -rf /var/lib/apt/lists/*

# Copy and install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt gunicorn uvicorn[standard]

# Copy app files
COPY main.py .
COPY templates ./templates
COPY *.md ./
COPY *.txt ./

# Copy optimized static files from Node build
COPY --from=frontend-builder /app/static ./static

# Expose port
EXPOSE 8080

# ================================
# Gunicorn + Uvicorn Worker Setup
# ================================
# 2 workers = 2 CPU cores (adjust based on server)
# --worker-class allows async (Uvicorn)
# --timeout=60 prevents idle kills on long requests
# ================================
CMD ["gunicorn", "main:app", "-k", "uvicorn.workers.UvicornWorker", "--workers", "2", "--bind", "0.0.0.0:8080", "--timeout", "60"]
