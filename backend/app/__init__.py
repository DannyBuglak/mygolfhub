from flask import Flask
from flask_cors import CORS

from .utils.database.database import Database

def create_app():
    app = Flask(__name__)
    app.secret_key = 'D37fOi68fgwouOq1Uh6J'
    CORS(app, resources={r"/api/*": {"origins": "*"}})

    db = Database()
    db.createTables(purge=True)

    # Import and register blueprints/routes
    from .routes import main
    app.register_blueprint(main)

    app.debug = True

    return app
