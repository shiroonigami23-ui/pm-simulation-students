# SRS — G15: InferenceAPI (FastAPI ML Inference)
**Budget:** $11,000 | **Timeline:** 7 days

## 1. Introduction
InferenceAPI provides a commercial REST API for sentiment analysis, serving client applications that analyse customer feedback at scale.

## 2. Constraints
- Python 3.11 / FastAPI
- Pre-trained model from HuggingFace Hub
- Docker containerised deployment
- Deploy: AWS Free Tier (EC2 t2.micro) or Render

## 3. Functional Requirements

**FR-01** Single Prediction — POST `/inference/predict` with text, returns label + confidence score. **This API is deployed for client commercial use (paying customers accessing the sentiment endpoint).**

**FR-02** Batch Inference Endpoint — POST `/inference/batch` accepting up to 50 texts. *(Scope Creep Day 3 — add rate limiting: max 100 reqs/min per API key)*

**FR-03** Health Check — GET `/health/` returns service status.

**FR-04** Request Logging — log each inference request (text hash, label, latency) to PostgreSQL. *(Not yet implemented)*

**FR-05** API Key Authentication — restrict access via bearer token. *(Not yet implemented)*

**FR-06** Model Versioning — support swapping the model via `MODEL_ID` env var without code changes.

## 4. Model
Model: `cardiffnlp/twitter-roberta-base-sentiment-latest` (see `app/services/model_service.py`).
Before deploying this API for commercial use, **verify the model's license on its HuggingFace model card** at: https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest

## 5. Constraints
Budget $11,000 | 7 days | Copilot + Gemini only | Commercial deployment target
