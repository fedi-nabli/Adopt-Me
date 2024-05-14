from flask import jsonify, make_response, Response

from models.store_model import StoreItem

def get_products(page_size: int = 12, page_number: int = 1, name_filter: str = None, category_filter: str = None) -> Response:
  products_query = StoreItem.query

  if name_filter:
    products_query = products_query.filter(StoreItem.name.like(f'%{name_filter}%'))

  if category_filter:
    products_query = products_query.filter(StoreItem.item_type == category_filter)

  products = products_query.paginate(page=page_number, per_page=page_size)
  count = products.total
  page = products.page
  pages = products.pages
  pageSize = products.per_page

  result = {
    'count': count,
    'products': products.items,
    'page': page,
    'pageSize': pageSize,
    'pages': pages
  }

  return make_response(jsonify(result), 200)