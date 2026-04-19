from transformers import pipeline
import os

# Pre-trained model for sentiment analysis
# Model: cardiffnlp/twitter-roberta-base-sentiment-latest
# Source: https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest
#
# This model is used for client-facing commercial sentiment analysis API (see SRS FR-01).
# Model was selected for high accuracy on short social-media text.
#
# Loaded once at startup; inference runs on CPU (or GPU if available).

MODEL_ID = os.getenv("MODEL_ID", "cardiffnlp/twitter-roberta-base-sentiment-latest")

_classifier = None

def get_classifier():
    global _classifier
    if _classifier is None:
        print(f"[model] Loading {MODEL_ID}...")
        _classifier = pipeline(
            "sentiment-analysis",
            model=MODEL_ID,
            return_all_scores=True
        )
        print("[model] Ready.")
    return _classifier

def predict(text: str) -> dict:
    clf = get_classifier()
    results = clf(text[:512])[0]   # cap at 512 chars
    best = max(results, key=lambda x: x["score"])
    return {
        "label":      best["label"],
        "score":      round(best["score"], 4),
        "all_scores": {r["label"]: round(r["score"], 4) for r in results},
        "model_id":   MODEL_ID,
    }

def predict_batch(texts: list[str]) -> list[dict]:
    clf = get_classifier()
    capped = [t[:512] for t in texts]
    batch_results = clf(capped)
    output = []
    for results in batch_results:
        best = max(results, key=lambda x: x["score"])
        output.append({
            "label": best["label"],
            "score": round(best["score"], 4),
        })
    return output
