from flask import Flask, jsonify, request

from database.db import db
from database.config import PostgresApi
from utils.error_handler import error_handler
from middleware.auth_middleware import require_token
from controllers.store_controller import get_products

app = Flask(__name__)
app.config['secret_key'] = '8a6030d9c5576b19e503878e5925bee4'

db_api = PostgresApi(app=app)
db.init_app(app)
db_api.create_models(db)

@app.route('/api/shop', methods=['GET'])
@error_handler
def shop_api():
  page = request.args.get('pageNumber', default=1, type=int)
  page_size = request.args.get('pageSize', default=12, type=int)
  name_filter = request.args.get('name', default=None, type=str)
  ctaegory_filter = request.args.get('category', default=None, type=str)

  return get_products(page_number=page, page_size=page_size, name_filter=name_filter, category_filter=ctaegory_filter)

if __name__ == '__main__':
  app.run(debug=True)