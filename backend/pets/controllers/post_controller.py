from datetime import datetime

from flask import jsonify, make_response, Response
from flask_sqlalchemy.pagination import Pagination

from database.db import db
from models.post_model import Post
from models.comments_model import Comment

def get_post_comments(post_id: int = None) -> list[dict]:
  db_comments: Comment = Comment.query.filter_by(post_id=post_id).all()

  if db_comments:
    comments = [{
      'id': comment.id,
      'post_id': comment.post_id,
      'username': comment.username,
      'comment': comment.comment,
      'date': comment.date
    } for comment in db_comments]

    return comments
  else:
    return None

def get_posts(page_size: int = 12, page_number: int = 1) -> Response:
  posts_query = Post.query

  db_posts: Pagination = posts_query.paginate(page=page_number, per_page=page_size)
  count = db_posts.total
  page = db_posts.page
  pages = db_posts.pages
  pageSize = db_posts.per_page

  stored_posts: list[Post] = db_posts.items
  posts = [{
    'id': post.id,
    'name': post.name,
    'image': post.image,
    'description': post.description,
    'date': post.date,
    'likes': post.likes,
    'adopted': post.adopted,
    'comments': get_post_comments(post.id)
  } for post in stored_posts]

  result = {
    'count': count,
    'posts': posts,
    'page': page,
    'pageSize': pageSize,
    'pages': pages
  }

  return make_response(jsonify(result), 200)

def get_post_by_id(post_id: int = None) -> Response:
  stored_post: Post = Post.query.get(post_id)

  if stored_post:
    post = {
      'id': stored_post.id,
      'name': stored_post.name,
      'image': stored_post.image,
      'description': stored_post.description,
      'date': stored_post.date,
      'comments': get_post_comments(stored_post.id),
      'likes': stored_post.likes,
      'adopted': stored_post.adopted
    }

    return make_response(jsonify(post), 200)
  else:
    return make_response(jsonify({'error': 'Post not found'}), 404)
  
def create_post(post_data = None) -> Response:
  if not post_data:
    return make_response(jsonify({'message': 'No post data provided'}), 400)
  
  name = post_data.get('name')
  image = post_data.get('image')
  description = post_data.get('description')

  created_post = Post(
    name=name,
    image=image,
    description=description,
    likes=0,
    adopted=False
  )

  db.session.add(created_post)
  db.session.commit()

  post = {
    'id': created_post.id,
    'name': created_post.name,
    'image': created_post.image,
    'description': created_post.description,
    'date': created_post.date,
    'comments': get_post_comments(created_post.id),
    'likes': created_post.likes,
    'adopted': created_post.adopted
  }
  return make_response(jsonify({'message': 'post created successfully', 'post': post}), 201)

def delete_post(post_id: int = None) -> Response:
  post = Post.query.get(post_id)

  if post:
    db.session.delete(post)
    db.session.commit()
    
    return make_response(jsonify({'message': 'Post deleted successfully'}), 200)
  else:
    return make_response(jsonify({'error': 'Post not found'}), 404)
  
def update_post(post_id: int = None, new_post_data = None):
  post: Post = Post.query.get(post_id)

  if post:
    name = new_post_data.get('name')
    image = new_post_data.get('image')
    description = new_post_data.get('description')

    if name:
      post.name = name
    if image:
      post.image = image
    if description:
      post.description = description

    post.update_date = datetime.now()

    db.session.commit()

    upadted_post = {
      'id': post.id,
      'name': post.name,
      'image': post.image,
      'description': post.description,
      'date': post.date,
      'comments': get_post_comments(post.id),
      'likes': post.likes,
      'adopted': post.adopted
    }

    return make_response(jsonify({'message': 'post updated successfully', 'post': upadted_post}), 200)

  else:
    return make_response(jsonify({'error': 'post not found'}), 404)

def add_like(post_id: int = None) -> Response:
  post: Post = Post.query.get(post_id)

  if post:
    post.likes += 1
    db.session.commit()

    return make_response(jsonify({'message': 'post liked successfully'}), 200)
  else:
    return make_response(jsonify({'error': 'post not found'}), 404)
  
def adopt_post(post_id: int = None) -> Response:
  post: Post = Post.query.get(post_id)

  if post:
    post.adopted = True
    db.session.commit()

    return make_response(jsonify({'message': 'post-pet adopted successfully'}), 200)
  else:
    return make_response(jsonify({'error': 'post not found'}), 404)
  