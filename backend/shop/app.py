from flask import Flask, jsonify, request

from database.db import db
from database.config import PostgresApi
from utils.error_handler import error_handler
from middleware.auth_middleware import require_token, admin
from controllers.store_controller import get_products, get_product_by_id, create_product, delete_product, update_product

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

@app.route('/api/shop/<int:product_id>', methods=['GET'])
@error_handler
def get_product(product_id: int):
  if request.method == 'GET':
    return get_product_by_id(product_id=product_id)

@app.route('/api/shop/create', methods=['POST'])
@error_handler
@admin
def admin_store_items(user_id, user_name, user_is_admin):
  if request.method == 'POST':
    product_data = request.json
    return create_product(product_data=product_data)

@app.route('/api/shop/<int:product_id>', methods=['PUT', 'DELETE'])
@error_handler
@admin
def delete_store_item(user_id, user_name, user_is_admin, product_id: int):
  if request.method == 'PUT':
    new_product_data = request.json
    return update_product(product_id=product_id, new_product_data=new_product_data)

  if request.method == 'DELETE':
    return delete_product(product_id=product_id)

if __name__ == '__main__':
  app.run(debug=True)