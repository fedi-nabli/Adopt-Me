from flask import flask, jsonify, request
from database.api import DatabaseApi
app = Flask(__name__)
db = DatabaseApi(app=app)
print(db)
@app.route('/pets', methods=['GET'])