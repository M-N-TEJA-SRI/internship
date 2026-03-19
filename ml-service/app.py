from fastapi import FastAPI, File, UploadFile
import numpy as np
from model import extract_features

app = FastAPI()

database = []

@app.post("/search")
async def search(file: UploadFile = File(...)):
    features = extract_features(file.file)
    similarities = []
    for item in database:
        sim = np.dot(features, item["features"].T)
        similarities.append(sim)
    return {"results": similarities}
