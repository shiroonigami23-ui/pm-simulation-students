# InferenceAPI — FastAPI ML Inference

## Tech Stack
- Python 3.11 + FastAPI
- HuggingFace Transformers
- Pydantic v2
- Docker

## Setup
```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## API Docs
Visit `http://localhost:8000/docs` for interactive Swagger UI.

## Important
Before deploying for any commercial purpose, review the license of the pre-trained model specified in `app/services/model_service.py`. Model licenses vary — verify at the model's HuggingFace page.

## Project Structure
```
app/main.py           FastAPI application
app/routers/          Route handlers
app/services/         Model loading and inference
tests/                Unit tests
Dockerfile            Container config
```
