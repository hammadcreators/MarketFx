from django.shortcuts import render
from .apps import SentimentalApiConfig 


# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
import json
import pandas as pd
from sklearn.model_selection import train_test_split

class call_model(APIView):

    def post(self,request):
        if request.method == 'POST':
            
            # sentence is the query we want to get the prediction for
            body_unicode = request.body.decode('utf-8')
            params = json.loads(body_unicode)
            
            df = SentimentalApiConfig.df
            df['News'], df['Sentiment'] = df['Sentiment'], df['News']
            df = df.rename(columns={'Sentiment': 'News', 'News': 'Sentiment'})
            # Convert the sentiment labels to categorical values
            df['Sentiment'] = pd.Categorical(df['Sentiment'])
            df['Sentiment'] = df.Sentiment.cat.codes
            df["Sentiment"] = df["Sentiment"]-1

            df=df.sample(frac=1,random_state=1,replace=True)
            # Split the dataset into training and testing sets
            X_train, X_test, y_train, y_test = train_test_split(df['News'], df['Sentiment'], test_size=0.2, random_state=42)
            tokenizer = Tokenizer(num_words=5000, oov_token='<OOV>')
            max_len = 1000
            tokenizer.fit_on_texts(X_train)
            test = np.array([params['Sentence']])
            token = tokenizer.texts_to_sequences(test)
            print(token)
            
            test = pad_sequences(token, padding='post', maxlen=max_len)
            response = SentimentalApiConfig.predictor.predict(test)
            print(response)
            maximum = max(response[0])
            print("MAx",maximum)
            index = np.where(response == maximum)[1]
            Sentiment = ""
            print(index)
            if(index == 0):
                Sentiment = "Negative"
            elif(index == 1):
                Sentiment = "Neutral"
            elif(index == 2):
                Sentiment = "Positive"
            
            # returning JSON response
            return HttpResponse(json.dumps(Sentiment), content_type='application/json') 