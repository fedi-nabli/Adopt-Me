from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from SQLAlchemy import Column, String, Text, DateTime, Integer, Float, CheckConstraint, Boolean

db: SQLAlchemy = None
def init_db(database: SQLAlchemy = None):
  global db 
  db = database

class Post(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  name = Column(String(40), nullable=True)
  image = Column(Text, nullable=True)
  decription = Column(Text, nullable=False)
  date = Column(DateTime, nullable=False, default=datetime.now)
  comments = Column(Text, nullable=True)
  likes = Column(Integer, nullable=True)
  adopted = Column(Boolean, nullable=False, default=False)


