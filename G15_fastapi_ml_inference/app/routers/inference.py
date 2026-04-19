from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel, Field
from typing import Optional
from app.services.model_service import predict, predict_batch
import time

router = APIRouter()

class InferenceRequest(BaseModel):
    text: str = Field(..., min_length=1, max_length=1000, description="Text to analyse")
    request_id: Optional[str] = None

class BatchInferenceRequest(BaseModel):
    texts: list[str] = Field(..., min_items=1, max_items=50)

class InferenceResponse(BaseModel):
    label: str
    score: float
    all_scores: dict
    model_id: str
    latency_ms: float

@router.post("/predict", response_model=InferenceResponse)
def single_predict(req: InferenceRequest):
    """Single text sentiment prediction"""
    try:
        start = time.time()
        result = predict(req.text)
        result["latency_ms"] = round((time.time() - start) * 1000, 2)
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/batch")
def batch_predict(req: BatchInferenceRequest):
    """
    Batch inference — up to 50 texts in a single request.
    Scope Creep (Day 3): add rate limiting (max 100 requests/min per API key).
    """
    try:
        start = time.time()
        results = predict_batch(req.texts)
        return {
            "results": results,
            "count":   len(results),
            "latency_ms": round((time.time() - start) * 1000, 2),
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
