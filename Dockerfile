# ==============================
# 1️⃣ FRONTEND BUILD STAGE
# ==============================
FROM node:20-alpine AS frontend

WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm ci --quiet

# Copy ALL necessary files for Tailwind to scan
COPY tailwind.config.js postcss.config.js ./
COPY static/ ./static/
COPY templates/ ./templates/

# Debug: Show what files Tailwind can see
RUN echo "=== Files in templates directory ===" && \
    find templates -type f && \
    echo "=== Content of tailwind.config.js ===" && \
    cat tailwind.config.js && \
    echo "=== Building CSS ===" && \
    npx tailwindcss -i ./static/input.css -o ./static/style.css --minify -v && \
    echo "=== Generated CSS size ===" && \
    wc -c ./static/style.css && \
    echo "=== First 500 chars of CSS ===" && \
    head -c 500 ./static/style.css

# ==============================
# 2️⃣ BACKEND PRODUCTION STAGE
# ==============================
FROM python:3.11-slim AS backend

WORKDIR /app

# Install system deps
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential && \
    rm -rf /var/lib/apt/lists/*

# Copy Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt && \
    pip install --no-cache-dir gunicorn

# Copy app code
COPY *.py ./
COPY templates/ ./templates/
COPY --from=frontend /app/static ./static
COPY assetlinks.json app-ads.txt ./

# Security: create non-root user
RUN useradd -m appuser && chown -R appuser:appuser /app
USER appuser

# Environment
ENV PORT=8383
ENV ENVIRONMENT=production

# Expose port
EXPOSE 8383

# ==============================
# 3️⃣ STARTUP COMMAND
# ==============================
CMD ["gunicorn", "main:app", \
    "--workers", "4", \
    "--worker-class", "uvicorn.workers.UvicornWorker", \
    "--bind", "0.0.0.0:8383", \
    "--access-logfile", "-"]