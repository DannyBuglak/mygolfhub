from app import create_app
from flask_cors import CORS

app = create_app(debug=True)

CORS(app, resources={r"/api/*": {"origins": "*"}})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000, use_reloader=True)