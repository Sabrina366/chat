import os
from sanic import Sanic, response as res
from sanic.exceptions import NotFound
from sanic.websocket import ConnectionClosed
import json
import copy

app = Sanic('chat')    


    
if __name__ == '__main__':
    app.run(port=5000)
