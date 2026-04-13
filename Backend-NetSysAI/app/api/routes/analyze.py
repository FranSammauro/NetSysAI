from fastapi import APIRouter
from pydantic import BaseModel
from app.services.analyzer import analyze_url

router = APIRouter()

class URLRequest(BaseModel):
    url: str

@router.post("/analyze")
def analyze(data: URLRequest):
    return analyze_url(data.url)