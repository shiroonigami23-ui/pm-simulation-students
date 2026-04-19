from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_migrate import Migrate
import os

db = SQLAlchemy()
login_manager = LoginManager()

def create_app():
    app = Flask(__name__, template_folder='templates', static_folder='static')
    app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-change-me')
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///portal.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)
    Migrate(app, db)
    login_manager.init_app(app)
    login_manager.login_view = 'auth.login'

    from .routes.auth import auth_bp
    from .routes.portal import portal_bp
    app.register_blueprint(auth_bp)
    app.register_blueprint(portal_bp)

    @login_manager.user_loader
    def load_user(uid):
        from .models.user import User
        return User.query.get(int(uid))

    return app
