from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session

from app.services.analyzer import analyze_url
from app.db.session import get_db
from app.core.deps import get_current_user

router = APIRouter()

class URLRequest(BaseModel):
    url: str

@router.post("/analyze")
def analyze(data: URLRequest, user=Depends(get_current_user)):
    return analyze_url(data.url)

# test db
@router.get("/test-db")
def test_db(db: Session = Depends(get_db)):
    return {"msg": "db conectada :)"}