import json
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse, FileResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

# Load assetlinks from file
try:
    with open("assetlinks.json", "r") as f:
        assetlinks_content = json.load(f)
except FileNotFoundError:
    assetlinks_content = []  # Fallback if file not found


@app.get("/.well-known/assetlinks.json")
async def get_assetlinks():
    return JSONResponse(content=assetlinks_content)


@app.get("/app-ads.txt")
async def get_app_ads():
    return FileResponse("app-ads.txt", media_type="text/plain")


@app.get("/", response_class=HTMLResponse)
async def root(request: Request):
    return templates.TemplateResponse(
        "index.html", {"request": request, "page": "home"}
    )


@app.get("/privacy-policy", response_class=HTMLResponse)
async def privacy_policy(request: Request):
    return templates.TemplateResponse(
        "privacy_policy.html", {"request": request, "page": "other"}
    )


@app.get("/terms-of-service", response_class=HTMLResponse)
async def terms_of_service(request: Request):
    return templates.TemplateResponse(
        "terms_of_service.html", {"request": request, "page": "other"}
    )


@app.get("/disclaimer", response_class=HTMLResponse)
async def disclaimer(request: Request):
    return templates.TemplateResponse(
        "disclaimer.html", {"request": request, "page": "other"}
    )


@app.get("/data-deletion", response_class=HTMLResponse)
async def data_deletion(request: Request):
    return templates.TemplateResponse(
        "data_deletion.html", {"request": request, "page": "other"}
    )
