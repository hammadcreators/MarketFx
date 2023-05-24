from django.apps import AppConfig
import html
import pathlib
import os
import pandas as pd


from tensorflow.keras.models import load_model

    
class SentimentalApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'Sentimental_Api'
    MODEL_PATH = 'Model'
    predictor = load_model("Sentimental_Api/Sentimental_analysis_latest.h5")
    cols = ['Sentiment',"News"]
    df = pd.read_csv('Sentimental_Api/news.csv',names=cols, encoding="ISO-8859-1")
    