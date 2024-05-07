import os 
from dotenv import load_dotenv
from os.path import join, dirname
from flask_sqlalchemy import SQLAlchemy

dotenv_path = join(dirname(__file__), '../.env')
load_dotenv(dotenv_path)
DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')
DB_USER = os.getenv('DB_USER')
DB_PASS = os.getenv('DB_PASS')
DB_NAME = os.getenv('DB_NAME')
class DatabaseApi():
  def __init__(self, app) -> None :
    app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://{DB_USER}:{DB_PASS}@{DB_HOST}:{DB_PORT}/{DB_NAME}'