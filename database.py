from databases import Database

db = Database('sqlite:chat-data.db')

async def get(query, values = {}):
  rows = await db.fetch_all(query=query, values=values)
  dicts = []
  for row in rows:
    dicts.append(dict(row))
  return dicts

async def run(query, values):
  return await db.execute(query=query, values=values)

async def get_messages():
  return await get('SELECT * FROM messages')

async def post_message(message):
  return await run('INSERT INTO messages(sender, text, timestamp) VALUES (:sender, :text, :timestamp)', message)