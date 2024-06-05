from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    # Import and register blueprints/routes
    from .routes import main
    app.register_blueprint(main)

    app.debug = True

    return app
