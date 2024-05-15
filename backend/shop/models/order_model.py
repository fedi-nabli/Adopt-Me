from typing import Any
from datetime import datetime, date
from sqlalchemy.orm import relationship
from sqlalchemy.sql.elements import ColumnElement
from sqlalchemy_json import mutable_json_type
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import JSONB, ARRAY, INTEGER
from sqlalchemy import BindParameter, Column, Integer, Date, DateTime, String, Boolean, Sequence

from database.db import db

BASE = declarative_base()

class OrderItemColumn(ARRAY):
  def bind_expression(self, bindvalue: BindParameter[Sequence[Any]]) -> ColumnElement[Sequence[Any]] | None:
    return self.type_engine_expression(bindvalue)

class OrderItem(db.Model):
  id = Column(Integer, primary_key=True)
  product_id = Column(Integer, nullable=False)
  quantity = Column(Integer, nullable=False, default=1)

class Order(BASE, db.Model):
  id = Column(Integer, primary_key=True)
  user = Column(String(150), nullable=False)
  order_items_ids = Column(OrderItemColumn(INTEGER), nullable=False)
  shipping_address = Column(mutable_json_type(dbtype=JSONB, nested=True), nullable=False)
  order_date = Column(Date, nullable=False, default=date.today)
  shipping_date = Column(Date)
  paid = Column(Boolean, nullable=False, default=False)
  delivered = Column(Boolean, nullable=False, default=False)
  creation_date = Column(DateTime, nullable=False, default=datetime.now)
  update_date = Column(DateTime, nullable=False, default=datetime.now)

  def __repr__(self) -> str:
    return f'Order({self.user}, {self.order_date}, {self.shipping_date}, {self.paid})'
