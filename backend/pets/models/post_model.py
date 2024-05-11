from datetime import datetime
from sqlalchemy import Column, String, Text, DateTime, Integer, Boolean

from app import db

class Post(db.Model):
  id = Column(Integer, primary_key=True)
  name = Column(String(40), nullable=True)
  image = Column(Text, nullable=True)
  decription = Column(Text, nullable=False)
  date = Column(DateTime, nullable=False, default=datetime.now)
  comments = Column(Text, nullable=True)
  likes = Column(Integer, nullable=True)
  adopted = Column(Boolean, nullable=False, default=False)

  def __repr__(self) -> str:
    return f'Post({self.name}, {self.id}, ${self.adopted})'
