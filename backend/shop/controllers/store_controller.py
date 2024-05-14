from datetime import datetime

from flask import jsonify, make_response, Response
from flask_sqlalchemy.pagination import Pagination

from database.db import db
from models.store_model import StoreItem

def get_products(page_size: int = 12, page_number: int = 1, name_filter: str = None, category_filter: str = None) -> Response:
  products_query = StoreItem.query

  if name_filter:
    products_query = products_query.filter(StoreItem.name.like(f'%{name_filter}%'))

  if category_filter:
    products_query = products_query.filter(StoreItem.item_type == category_filter)

  db_products: Pagination = products_query.paginate(page=page_number, per_page=page_size)
  count = db_products.total
  page = db_products.page
  pages = db_products.pages
  pageSize = db_products.per_page

  stored_products: list[StoreItem] = db_products.items
  products = [{
    'id': product.id,
    'name': product.name,
    'category': product.item_type,
    'price': product.price,
    'image': product.image,
    'description': product.description,
    'created_at': product.creation_date,
    'updated_at': product.update_date
  } for product in stored_products]

  result = {
    'count': count,
    'products': products,
    'page': page,
    'pageSize': pageSize,
    'pages': pages
  }

  return make_response(jsonify(result), 200)

def get_product_by_id(product_id: int = None) -> Response:
  stored_product: StoreItem = StoreItem.query.get(product_id)

  if stored_product:
    product = {
      'id': stored_product.id,
      'name': stored_product.name,
      'category': stored_product.item_type,
      'price': stored_product.price,
      'image': stored_product.image,
      'description': stored_product.description,
      'created_at': stored_product.creation_date,
      'updated_at': stored_product.update_date
    }

    return make_response(jsonify(product), 200)
  else:
    return make_response(jsonify({'error': 'Product not found'}), 404)
  
def create_product(product_data = None) -> Response:
  if not product_data:
    return make_response(jsonify({'message': 'No product data provided'}), 400)
  
  item_type = product_data.get('item_type')
  name = product_data.get('name')
  price = float(product_data.get('price'))
  image = product_data.get('image')
  description = product_data.get('description')

  created_product = StoreItem(
    item_type=item_type,
    name=name,
    price=price,
    image=image,
    description=description
  )
  db.session.add(created_product)
  db.session.commit()

  product = {
    'id': created_product.id,
    'name': created_product.name,
    'category': created_product.item_type,
    'price': created_product.price,
    'image': created_product.image,
    'description': created_product.description,
    'created_at': created_product.creation_date,
    'updated_at': created_product.update_date
  }

  return make_response(jsonify({'message': 'product created successfully', 'product': product}), 201)

def delete_product(product_id: int = None) -> Response:
  product = StoreItem.query.get(product_id)

  if product:
    db.session.delete(product)
    db.session.commit()
    
    return make_response(jsonify({'message': 'Product deleted successfully'}), 200)
  else:
    return make_response(jsonify({'error': 'Product not found'}), 404)
  
def update_product(product_id: int = None, new_product_data = None):
  product: StoreItem = StoreItem.query.get(product_id)

  if product:
    name = new_product_data.get('name')
    item_type = new_product_data.get('item_type')
    price = new_product_data.get('price')
    image = new_product_data.get('image')
    description = new_product_data.get('description')

    if name:
      product.name = name
    if item_type:
      product.item_type = item_type
    if price:
      product.price = price
    if image:
      product.image
    if description:
      product.description = description

    product.update_date = datetime.now()

    db.session.commit()

    upadted_product = {
      'id': product.id,
      'name': product.name,
      'category': product.item_type,
      'price': product.price,
      'image': product.image,
      'description': product.description,
      'created_at': product.creation_date,
      'updated_at': product.update_date
    }

    return make_response(jsonify({'message': 'product updated successfully', 'product': upadted_product}), 200)

  else:
    return make_response(jsonify({'error': 'product not found'}), 404)