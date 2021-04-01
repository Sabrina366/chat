import os
from sanic import Sanic, response as res
from sanic.exceptions import NotFound
from sanic.websocket import ConnectionClosed
import json
import copy

app = Sanic('chat')   

""" clients = set()

async def broadcast(message):
  for client in copy.copy(clients):
    try: 
      await client.send(message)
    except ConnectionClosed:
      clients.remove(client)

@app.websocket('/ws')
async def websockets(req, ws):
  clients.add(ws)

  while True:
    data = await ws.recv()
    data = json.loads(data)

    data['id'] = await post_message(data)

    print(data)

    data = json.dumps(data)

    await broadcast(data) 

app.static('/', './frontend')

@app.exception(NotFound)
async def ignore_404s(request, exception):
    return await res.file('./frontend') """

if __name__ == '__main__':
  #app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))
    app.run(port=5000)
