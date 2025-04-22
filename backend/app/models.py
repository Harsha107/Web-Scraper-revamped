from pydantic import BaseModel, EmailStr, HttpUrl, Field

class ProductRequest(BaseModel):
    url: HttpUrl

class MonitorRequest(BaseModel):
    url: HttpUrl
    target_price: float = Field(..., gt=0)
    email: EmailStr

class ProductResponse(BaseModel):
    title: str
    price: float
    ratings: str
    url: HttpUrl
    image_url: str | None = None