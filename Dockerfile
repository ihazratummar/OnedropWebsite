# ================================
# Stage 1: Build Tailwind CSS
# ================================
FROM node:20-alpine AS frontend-builder

WORKDIR /app

# Copy package files first for caching
COPY package*.json ./
RUN npm install 

# Copy Tailwind and PostCSS configs
COPY tailwind.config.js postcss.config.js ./

# Copy static assets (CSS, JS, images)
COPY static ./static

# Build Tailwind (input.css -> style.css)
RUN npx tailwindcss -i ./static/input.css -o ./static/style.css --minify


# ================================
# Stage 2: FastAPI Backend
# ================================
FROM python:3.11-slim AS backend

WORKDIR /app

# Environment variables
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PORT=8080

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential curl && \
    rm -rf /var/lib/apt/lists/*

# Copy requirements and install deps
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt gunicorn uvicorn[standard]

# Copy backend files
COPY main.py .
COPY templates ./templates
COPY *.md ./
COPY *.txt ./

# Copy optimized static files
COPY --from=frontend-builder /app/static ./static

EXPOSE 8080

# ================================
# Start command (Gunicorn + Uvicorn)
# ================================
CMD ["gunicorn", "main:app", "-k", "uvicorn.workers.UvicornWorker", "--workers", "2", "--bind", "0.0.0.0:8080", "--timeout", "60"]
