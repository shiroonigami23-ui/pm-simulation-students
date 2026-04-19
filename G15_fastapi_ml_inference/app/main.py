from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import inference, health

app = FastAPI(
    title="InferenceAPI",
    description="ML Sentiment Analysis API — commercial deployment",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router,    prefix="/health",    tags=["Health"])
app.include_router(inference.router, prefix="/inference", tags=["Inference"])

@app.get("/")
def root():
    return {"service": "InferenceAPI", "status": "running", "docs": "/docs"}
