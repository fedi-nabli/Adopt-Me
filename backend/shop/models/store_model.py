from datetime import datetime
from sqlalchemy import Column, Integer, Float, String, Text, DateTime, CheckConstraint

from app import db

class StoreItem(db.Model):
  id = Column(Integer, primary_key=True)
  item_type = Column(String(8), nullable=False)
  name = Column(String(40), nullable=False)
  price = Column(Float, nullable=False)
  image = Column(Text, nullable=False)
  description = Column(Text, nullable=False)
  creation_date = Column(DateTime, nullable=False, default=datetime.now)
  update_date = Column(DateTime, nullable=False, default=datetime.now)

  __table_args__ = (
    CheckConstraint(item_type.in_(['Food', 'Object']), name='item_type_contraint'),
  )

  def __repr__(self) -> str:
    return f'StoreItem({self.name}, {self.price}, ${self.item_type})'
