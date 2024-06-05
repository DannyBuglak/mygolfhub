from flask import Flask
from flask_cors import CORS

from .utils.database.database import database

def create_app():
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    db = database()
    db.createTables(purge=True)

    # Import and register blueprints/routes
    from .routes import main
    app.register_blueprint(main)

    app.debug = True

    return app
