import os
from sanic import Sanic, response as res
from sanic.exceptions import NotFound
from sanic.websocket import ConnectionClosed
import json
import copy
from bot.functions import *


app = Sanic('chat')   

@app.get('/rest/messages')
async def messages(req):
  return res.json(await get_messages())

@app.post('/rest/predict')
async def get_prediction(req):
  pred = req.json

  prediction = predict(pred['sentence'])
  print(prediction)
  return res.json(prediction)


prediction = predict("hello")
print(prediction)

app.static('/', './frontend')

@app.exception(NotFound)
async def ignore_404s(request, exception):
    return await res.file('./frontend') 

if __name__ == '__main__':
    app.run(port=5000)
