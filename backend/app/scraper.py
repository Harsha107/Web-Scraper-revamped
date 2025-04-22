import requests
from bs4 import BeautifulSoup
from typing import Tuple, Optional

def scrape_amazon_product(url: str) -> Tuple[Optional[str], Optional[float], Optional[str]]:
    """Scrape product details from Amazon URL"""
    custom_headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.3",
        "Accept-Language": "gzip, deflate",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,/;q=0.8",
        "DNT": "1",
        "Connection": "close",
        "Upgrade-Insecure-Requests": "1",
    }

    try:
        page = requests.get(url, headers=custom_headers)
        soup = BeautifulSoup(page.content, "html.parser")

        title = soup.find(id='productTitle').get_text().strip()
        price = float(soup.find(class_='a-offscreen').get_text().replace("AED", "").replace(",", "").strip())
        ratings = soup.find(class_='a-icon-alt').get_text().strip()

        image_element = soup.find("img", id="landingImage")
        image_url = image_element.get('src') if image_element else None

        return title, price, ratings, image_url
    except Exception as e:
        print(f"Error scraping product: {e}")
        return None, None, None, None