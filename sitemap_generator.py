import os
from datetime import datetime

BASE_URL = "https://onedrops.online"
TEMPLATES_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "templates")
STATIC_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "static")

PAGES = [
    "index.html",
    "contact.html",
    "data_deletion.html",
    "disclaimer.html",
    "privacy_policy.html",
    "terms_of_service.html",
]


def generate_sitemap():
    """Generates a sitemap.xml file from the pages in the templates directory."""
    xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

    for page in PAGES:
        path = os.path.join(TEMPLATES_DIR, page)
        if os.path.exists(path):
            last_mod = datetime.fromtimestamp(os.path.getmtime(path)).strftime(
                "%Y-%m-%d"
            )
            url = f"{BASE_URL}/".replace("index.html", "")
            if page != "index.html":
                url = f"{BASE_URL}/{page.replace('.html', '')}"

            xml += "  <url>\n"
            xml += f"    <loc>{url}</loc>\n"
            xml += f"    <lastmod>{last_mod}</lastmod>\n"
            xml += "    <changefreq>monthly</changefreq>\n"
            xml += "    <priority>0.8</priority>\n"
            xml += "  </url>\n"

    xml += "</urlset>"

    with open(os.path.join(STATIC_DIR, "sitemap.xml"), "w") as f:
        f.write(xml)


if __name__ == "__main__":
    generate_sitemap()
