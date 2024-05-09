import os
from os.path import join, dirname
from dotenv import load_dotenv

from flask import Flask
import psycopg2 as pgsql
from flask_sqlalchemy import SQLAlchemy

dotenv_path = join(dirname(__file__), '../.env')
load_dotenv(dotenv_path)

DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')
DB_USER = os.getenv('DB_USER')
DB_PASS = os.getenv('DB_PASS')
DB_NAME = os.getenv('DB_NAME')

class PostgresApi():
  def __init__(self, app: Flask = None, delete_if_exists: bool = False) -> None:
    self.app = app

    try:
      connection = pgsql.connect(
        host=DB_HOST,
        port=DB_PORT,
        user=DB_USER,
        password=DB_PASS
      )

      connection.autocommit = True

      cursor = connection.cursor()

      sql_query = f"SELECT EXISTS(SELECT datname FROM pg_catalog.pg_database WHERE lower(datname) = lower('{DB_NAME}'))"
      cursor.execute(sql_query)
      check_truth = cursor.fetchall()[0]
      checked = check_truth[0]
      self.checked = str(checked)

      if self.checked == "True":
        # sql_query = f"\c {DB_NAME}"
        # cursor.execute(sql_query)
        pass
      elif self.checked == "False":
        sql_query = f"CREATE DATABASE {DB_NAME}"
        cursor.execute(sql_query)
        # sql_query = f"\c {DB_NAME}"
        # cursor.execute(sql_query)
    
    except(Exception , pgsql.Error) as error:
      print(f'Error while connecting to postgresql: {error}')
    finally:
      if connection:
        cursor.close()
        connection.close()

    app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    self.db = SQLAlchemy(app)

  def get_db(self) -> SQLAlchemy:
    return self.db
  
  def create_models(self) -> None:
    from models.store_model import StoreItem
    from models.order_model import Order

    with self.app.app_context():
      self.db.create_all()