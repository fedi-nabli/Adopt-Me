from datetime import datetime
from sqlalchemy import Column, String, Text, DateTime, Integer, Boolean
from app import db

class Comment(db.Model):
  id = Column(Integer, primary_key=True)
  post_id = Column(Integer, nullable=False)
  username = Column(String(40), nullable=True)
  comment = Column(Text, nullable=False)
  date = Column(DateTime, nullable=False, default=datetime.now)

  def __repr__(self) -> str:
    return f'Post({self.username}, {self.id}, ${self.post_id})'
