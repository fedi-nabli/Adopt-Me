from flask import Flask, jsonify, request
from flask_cors import CORS

from database.db import db
from database.api import DatabaseApi
from utils.error_handler import error_handler
from middleware.auth_middleware import require_token
from controllers.post_controller import get_posts, get_post_by_id, create_post, delete_post, update_post
from controllers.comments_controller import create_comment, delete_comment

app = Flask(__name__)
CORS(app)
app.config['secret_key'] = '24202492'

db_api = DatabaseApi(app=app, delete_if_exists=True)
db.init_app(app)
db_api.create_models(db)

@app.route('/api/posts', methods=['GET'], strict_slashes=False)
@error_handler
def get_all_posts():
  if request.method == 'GET':
    return get_posts()

@app.route('/api/posts/<int:post_id>', methods=['GET'], strict_slashes=False)
@error_handler
def get_post(post_id: int):
  if request.method == 'GET':
    return get_post_by_id(post_id=post_id)
  
@app.route('/api/posts', methods=['POST'], strict_slashes=False)
@error_handler
@require_token
def create_new_post(user_id, user_name):
  if request.method == 'POST':
    post_data = request.json
    return create_post(post_data=post_data)

@app.route('/api/posts/<int:post_id>', methods=['DELETE', 'PUT'], strict_slashes=False)
@error_handler
@require_token
def delete_post_by_id(user_id, user_name, post_id: int):
  if request.method == 'DELETE':
    return delete_post(post_id=post_id)

  if request.method == 'PUT':
    new_post_data = request.json
    return update_post(post_id=post_id, new_post_data=new_post_data)

@app.route('/api/posts/<int:post_id>/comments', methods=['POST'], strict_slashes=False)
@error_handler
@require_token
def create_new_comment(user_id, user_name, post_id: int):
  if request.method == 'POST':
    comment_data = request.json
    return create_comment(post_id=post_id, comment_data=comment_data)

@app.route('/api/posts/comments/<int:comment_id>', methods=['DELETE'], strict_slashes=False)
@error_handler
@require_token
def delete_comment_by_id(user_id, user_name,comment_id: int):
  if request.method == 'DELETE':
    return delete_comment(id=comment_id)

if __name__ == '__main__':
  app.run(debug=True, port=5003)