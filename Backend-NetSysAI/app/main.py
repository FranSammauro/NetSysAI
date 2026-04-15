from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import analyze, auth

app = FastAPI() 

# cors
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # dps se restringe
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# routers
app.include_router(analyze.router)
app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "NetSys AI API running"}