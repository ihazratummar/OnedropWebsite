import json
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse, FileResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
import os
from dotenv import load_dotenv


app = FastAPI()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BASE_DIR, "static")

# Ensure static directory exists
if not os.path.exists(STATIC_DIR):
    os.makedirs(STATIC_DIR)

# Mount static files with explicit content types
app.mount(
    "/static",
    StaticFiles(directory=STATIC_DIR, check_dir=True, html=True),
    name="static",
)

templates = Jinja2Templates(directory=os.path.join(BASE_DIR, "templates"))

# Load environment variables from .env if present
load_dotenv()


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


@app.get("/contact", response_class=HTMLResponse)
async def contact_get(request: Request):
    # render contact form
    return templates.TemplateResponse(
        "contact.html",
        {"request": request, "page": "other", "success": None, "error": None},
    )


@app.post("/contact", response_class=HTMLResponse)
async def contact_post(request: Request):
    form = await request.form()
    name = form.get("name", "").strip()
    email = form.get("email", "").strip()
    subject = form.get("subject", "").strip()
    message = form.get("message", "").strip()

    # basic validation
    if not name or not email or not subject or not message:
        return templates.TemplateResponse(
            "contact.html",
            {
                "request": request,
                "page": "other",
                "error": "Please fill all fields.",
                "success": None,
            },
        )

    if "@" not in email or "." not in email:
        return templates.TemplateResponse(
            "contact.html",
            {
                "request": request,
                "page": "other",
                "error": "Please provide a valid email address.",
                "success": None,
            },
        )

    # compose email
    to_addr = os.getenv("CONTACT_EMAIL", "support@onedrops.online")
    from_addr = os.getenv("SMTP_FROM", email)
    body = f"From: {name} <{email}>\nTo: {to_addr}\nSubject: {subject}\n\n{message}\n"

    # try to send via SMTP if configured
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", "587")) if os.getenv("SMTP_PORT") else None
    smtp_user = os.getenv("SMTP_USER")
    smtp_pass = os.getenv("SMTP_PASS")
    sent = False
    send_error = None
    if smtp_host and smtp_port:
        try:
            import smtplib

            server = smtplib.SMTP(smtp_host, smtp_port, timeout=10)
            server.ehlo()
            try:
                server.starttls()
            except Exception:
                pass
            if smtp_user and smtp_pass:
                server.login(smtp_user, smtp_pass)
            server.sendmail(from_addr, [to_addr], body.encode("utf-8"))
            server.quit()
            sent = True
        except Exception as e:
            send_error = str(e)
            sent = False
    else:
        # no SMTP configured — log the message to server logs instead
        try:
            print("--- Contact form message (no SMTP configured) ---")
            print(body)
            print("--- end message ---")
        except Exception:
            pass
        sent = False

    if sent:
        return templates.TemplateResponse(
            "contact.html",
            {
                "request": request,
                "page": "other",
                "success": "Thanks — your message was sent. We'll reply to you soon.",
                "error": None,
            },
        )
    else:
        note = (
            "Your message was received but the site couldn't send email (not configured)."
            if not send_error
            else f"Message could not be delivered: {send_error}"
        )
        return templates.TemplateResponse(
            "contact.html",
            {"request": request, "page": "other", "success": None, "error": note},
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
