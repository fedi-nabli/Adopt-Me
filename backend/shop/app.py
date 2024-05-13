from flask import Flask, jsonify, request

from database.db import db
from database.config import PostgresApi
from middleware.auth_middleware import require_token
from controllers.store_controller import get_products

app = Flask(__name__)
app.config['secret_key'] = '8a6030d9c5576b19e503878e5925bee4'

db_api = PostgresApi(app=app)
db.init_app(app)
db_api.create_models(db)

@app.route('/test')
# @require_token
def test():
  return get_products()

if __name__ == '__main__':
  app.run(debug=True)