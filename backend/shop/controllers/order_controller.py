from sqlalchemy.orm import selectinload
from flask import jsonify, make_response, Response
from flask_sqlalchemy.pagination import Pagination

from database.db import db
from models.store_model import StoreItem
from models.order_model import Order, OrderItem

def get_product_by_id(product_id: int = None) -> dict:
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
    return product
  else:
    return None

def get_order_item_by_id(item_id: int = None) -> dict:
  stored_item: OrderItem = Order.query.get(item_id)

  if stored_item:
    order_item = {
      'id': stored_item.id,
      'product': get_product_by_id(stored_item.product_id),
      'quantity': stored_item.quantity
    }
    return order_item
  else:
    return None

def get_my_orders(page_size: int = 12, page_number: int = 1, user_id: str = None) -> Response:
  orders_query = Order.query
  orders_query.filter(Order.user == user_id)

  db_orders: Pagination = orders_query.paginate(page=page_number, per_page=page_size)
  count = db_orders.total
  page = db_orders.page
  pages = db_orders.pages
  pageSize = db_orders.per_page

  stored_orders: list[Order] = db_orders.items
  
  my_orders = [{
    'id': order.id,
    'user': order.user,
    'order_items': [get_order_item_by_id(order_item) for order_item in order.order_items_ids],
    'shipping_address': order.shipping_address,
    'paid': order.paid,
    'delivered': order.delivered,
    'created_at': order.creation_date,
    'updated_at': order.update_date
  } for order in stored_orders]

  result = {
    'count': count,
    'orders': my_orders,
    'page': page,
    'pageSize': pageSize,
    'pages': pages
  }

  return make_response(jsonify(result), 200)