import os
import re
from os.path import join, dirname
from dotenv import load_dotenv

from flask import Flask
import mysql.connector as connector
from flask_sqlalchemy import SQLAlchemy

dotenv_path = join(dirname(__file__), '../.env')
load_dotenv(dotenv_path)

DB_HOST = os.environ.get('DB_HOST')
DB_PORT = os.environ.get('DB_PORT')
DB_USER = os.environ.get('DB_USER')
DB_PASS = os.environ.get('DB_PASS')
DB_NAME = os.environ.get('DB_NAME')

class DatabaseApi():
  def __init__(self, delete_if_exists: bool = False, app: Flask = None) -> None:
    connection = connector.connect(
      host=DB_HOST,
      port=DB_PORT,
      user=DB_USER,
      password=DB_PASS
    )

    print('Connection established successfully')
    cursor = connection.cursor()

    cursor.execute("SHOW DATABASES")
    found = False

    for db in cursor:
      pattern = "[(,')]"
      db_string = re.sub(pattern, "", str(db))
      if db_string == DB_NAME.lower():
        found = True

    if DB_NAME is None:
      if found == False and not delete_if_exists:
        create_db_query = f"CREATE DATABASE {DB_NAME}"
        cursor.execute(create_db_query)
      elif found:
        if delete_if_exists:
          drop_db_query = f"DROP DATABASE {DB_NAME}"
          cursor.execute(drop_db_query)
          create_db_query = f"CREATE DATABASE {DB_NAME}"
          cursor.execute(create_db_query)
    
    connection.close()

    app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://{DB_USER}:{DB_PASS}@${DB_HOST}/${DB_NAME}'
    app.config['SQLALCHEMY_TRACK_NOTIFICATION'] = False
    self.db = SQLAlchemy(app)

  def get_db(self) -> SQLAlchemy:
    return self.db