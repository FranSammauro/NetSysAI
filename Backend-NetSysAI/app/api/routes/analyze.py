from fastapi import APIRouter
from app.services.analyzer import analyze_url

router = APIRouter()

@router.post("/analyze")
def analyze(data: dict):
    url = data.get("url")
    result = analyze_url(url)
    return result