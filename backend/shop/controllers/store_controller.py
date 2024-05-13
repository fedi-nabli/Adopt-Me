from flask import jsonify, request
from models.store_model import StoreItem

def get_products():
  products = StoreItem.query.all()
  count = len(products)

  print(products)
  print(count)

  return jsonify()