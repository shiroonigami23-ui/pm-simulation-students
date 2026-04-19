from app import db

class Assignment(db.Model):
    __tablename__ = 'assignments'
    id          = db.Column(db.Integer, primary_key=True)
    title       = db.Column(db.String(200), nullable=False)
    subject     = db.Column(db.String(100))
    description = db.Column(db.Text)
    due_date    = db.Column(db.DateTime)
    submitted   = db.Column(db.Boolean, default=False)
    score       = db.Column(db.Float, nullable=True)
    student_id  = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at  = db.Column(db.DateTime, server_default=db.func.now())
