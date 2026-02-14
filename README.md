# Music Recommender

A lyric-based music recommendation system using semantic embedding learning. Search for songs and get personalized recommendations based on audio features, lyrics, and artist similarity.

## Demo Video
[Watch the demo](https://www.youtube.com/watch?v=j7ncdhlwny4)

## Project Structure

```
music-recommender/
├── backend/          # Flask API server
├── frontend/         # React web app
└── ml/               # ML notebook and model training
```

## Features
- Song recommendations based on input track
- Search for songs by keyword
- Multiple recommendation models: Audio features, TF-IDF, SBERT embeddings
- Spotify API integration for metadata

## Quick Start

### 1. ML / Model Training
```bash
cd ml
pip install -r requirements.txt
# Run MusicRecommender.ipynb in Jupyter
```
This generates `nn_model.pkl` and `embeddings.pkl` for the backend.

### 2. Backend
```bash
cd backend
pip install -r requirements.txt
python app.py
```
Runs on `http://127.0.0.1:5000`

**Endpoints:**
- `POST /recommend` - Get recommendations for a song title
- `POST /search_songs` - Search for song suggestions by keyword

### 3. Frontend
```bash
cd frontend
npm install
npm start
```
Runs on `http://localhost:3000`

**Configuration:** Set backend URL in `.env.local`:
```
REACT_APP_BACKEND_URL=http://127.0.0.1:5000
```

## ML Notebook Overview
The `MusicRecommender.ipynb` notebook covers:
- Data loading and cleaning
- Feature engineering (audio, lyrics, artist)
- Model training (Nearest Neighbors, TF-IDF, SBERT)
- Visualization (genre distribution, t-SNE plots)
- Evaluation (precision, recall, similarity analysis)

## Requirements
- Python 3.8+
- Node.js
- Dataset: `spotify_songs.csv`