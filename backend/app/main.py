from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.models import ProductRequest, MonitorRequest, ProductResponse
from app.scraper import scrape_amazon_product
from app.email_service import send_price_alert

app = FastAPI(title="Amazon Price Tracker API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "active", "message": "Amazon Price Tracker API is running"}

@app.post("/api/check-price", response_model=ProductResponse)
async def check_price(request: ProductRequest):
    """Get product details from Amazon URL"""
    title, price, ratings, image_url = await scrape_amazon_product(request.url)

    if not title or not price:
        raise HTTPException(status_code=400, detail="Could not retreive product information. Please check the URL.")
    
    return ProductResponse(
        title=title,
        price=price,
        ratings=ratings,
        url=request.url,
        image_url=image_url,
    )

@app.post("/api/monitor-price")
async def monitor_price(request: MonitorRequest):
    """Set up price monitoring and send notification if price is below target"""
    title, price, ratings, image_url = await scrape_amazon_product(request.url)

    if not title or not price:
        raise HTTPException(status_code=400, detail="Could not retreive product information. Please check the URL.")
    
    if price < request.target_price:
        email_sent = send_price_alert(
            product_title=title,
            product_price=price,
            target_price=request.target_price,
            product_url=str(request.url),
            recipient_email=request.email
        )

        if not email_sent:
            raise HTTPException(status_code=500, detail="Failed to send email notification.")
        
        return {
            "message": f"Email sent! The product '{title}' is now below AED {request.target_price}.",
            "current_price": price,
            "below_target": True
        }
    
    return {
        "message": f"The product '{title}' is currently priced at AED {price}, which is still above your target price of AED {request.target_price}.",
        "current_price": price,
        "below_target": False
    }