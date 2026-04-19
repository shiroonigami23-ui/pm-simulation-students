from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health():
    r = client.get("/health/")
    assert r.status_code == 200

def test_predict_structure():
    r = client.post("/inference/predict", json={"text": "This is great!"})
    assert r.status_code == 200
    data = r.json()
    assert "label" in data
    assert "score" in data
