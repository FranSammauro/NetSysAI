from fastapi import FastAPI
from app.api.routes import analyze

app = FastAPI()

app.include_router(analyze.router)

@app.get("/")
def root():
    return {"message": "NetSys AI API running"}