from flask import Flask, jsonify, request

from database.config import PostgresApi
from middleware.auth_middleware import require_token

app = Flask(__name__)
app.config['secret_key'] = '8a6030d9c5576b19e503878e5925bee4'

db_api = PostgresApi(app=app)
db = db_api.get_db()
db_api.create_models()

@app.route('/test')
@require_token
def test(user_id):
  return 'Test succeeded'

if __name__ == '__main__':
  app.run(debug=True)