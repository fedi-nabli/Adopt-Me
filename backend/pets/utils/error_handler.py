from functools import wraps

from flask import jsonify, make_response

def error_handler(func):
  @wraps(func)
  def decorated_function(*args, **kwargs):
    try:
      return func(*args, **kwargs)
    except Exception as e:
      return make_response(jsonify({'message': f'An error occured: {e}'}), 500)
  
  return decorated_function