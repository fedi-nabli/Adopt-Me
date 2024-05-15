import os
import jwt
from functools import wraps
from dotenv import load_dotenv
from os.path import join, dirname

from flask import request, jsonify, make_response

dotenv_path = join(dirname(__file__), '../.env')
load_dotenv(dotenv_path)

JWT_SECRET = os.getenv('JWT_ACCESS_SECRET')

def require_token(f):
  @wraps(f)
  def decorator(*args, **kwargs):
    token = None
    if 'Authorization' in request.headers and request.headers['Authorization'].startswith('Bearer'):
      token = request.headers['Authorization'].split(' ')[1]
    
    if not token:
      return make_response(jsonify({'message': 'Not authorized, no token!'}), 401)
    
    try:
      decoded = jwt.decode(token, JWT_SECRET, algorithms=['HS256'])
      user_id = decoded['id']
      user_name = decoded['name']

      if not user_id or not user_name:
        return make_response(jsonify({'message': 'Not authorized - token failed'}), 401)
      
    except:
      return make_response(jsonify({'message': 'Not authorized - token failed'}), 401)
    
    return f(user_id, user_name, *args, **kwargs)
  return decorator

def admin(func):
  @wraps(func)
  def decorator(*args, **kwargs):
    token = None
    if 'Authorization' in request.headers and request.headers['Authorization'].startswith('Bearer'):
      token = request.headers['Authorization'].split(' ')[1]

    if not token:
      return make_response(jsonify({'message': 'Not authorized, no token'}), 401)
    
    try:
      decoded = jwt.decode(token, JWT_SECRET, algorithms=['HS256'])
      user_id = decoded['id']
      user_name = decoded['name']
      user_is_admin = decoded['admin']

      if not user_id or not user_is_admin:
        return make_response(jsonify({'message': 'Token failed: not authorized as an admin'}), 401)

    except:
      return make_response(jsonify({'message': 'Not authorized - token failed'}), 401)
    
    return func(user_id, user_name, user_is_admin, *args, **kwargs)
  return decorator