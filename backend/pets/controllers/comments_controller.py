from datetime import datetime

from flask import jsonify, make_response, Response
from flask_sqlalchemy.pagination import Pagination
from models.comments_model import Comment

from database.db import db

def create_comment(post_id: int = None, username: str = None, comment_data = None) -> Response:
  if not comment_data:
    return make_response(jsonify({'message': 'No comment data provided'}), 400)
  
  comment = comment_data.get('comment')

  created_comment = Comment(
    username=username,
    comment=comment,
    post_id=post_id
  )

  db.session.add(created_comment)
  db.session.commit()

  comment = {
    'id': created_comment.id,
    'username': created_comment.username,
    'comment': created_comment.comment,
    'date': created_comment.date,
    'post_id': created_comment.post_id
  }
  return make_response(jsonify({'message': 'comment created successfully', 'comment': comment}), 201)

def delete_comment(id: int = None) -> Response:
  comment = Comment.query.get(id)

  if comment:
    db.session.delete(comment)
    db.session.commit()
    
    return make_response(jsonify({'message': 'comment deleted successfully'}), 200)
  else:
    return make_response(jsonify({'error': 'comment not found'}), 404)