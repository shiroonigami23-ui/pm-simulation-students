from app import db
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class User(UserMixin, db.Model):
    __tablename__ = 'users'
    id        = db.Column(db.Integer, primary_key=True)
    name      = db.Column(db.String(120), nullable=False)
    email     = db.Column(db.String(200), unique=True, nullable=False)
    roll_no   = db.Column(db.String(50), unique=True)
    branch    = db.Column(db.String(80))
    year      = db.Column(db.Integer)
    password_hash = db.Column(db.String(256), nullable=False)
    is_admin  = db.Column(db.Boolean, default=False)
    created_at= db.Column(db.DateTime, server_default=db.func.now())

    assignments = db.relationship('Assignment', backref='student', lazy='dynamic')

    def set_password(self, pw): self.password_hash = generate_password_hash(pw)
    def check_password(self, pw): return check_password_hash(self.password_hash, pw)
    def __repr__(self): return f'<User {self.email}>'
