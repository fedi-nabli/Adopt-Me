from flask import Flask, jsonify, request
from database.api import DatabaseApi

app = Flask(__name__)
app.config['secret_key'] = '24202492'

db_api = DatabaseApi(app=app, delete_if_exists=True)
db = db_api.get_db()
db_api.create_models()

if __name__ == '__main__':
  app.run(debug=True)