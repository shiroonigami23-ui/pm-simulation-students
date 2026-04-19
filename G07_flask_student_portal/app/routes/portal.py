from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_required, current_user
from app import db
from app.models.assignment import Assignment
from datetime import datetime

portal_bp = Blueprint('portal', __name__)

@portal_bp.route('/')
@login_required
def dashboard():
    assignments = current_user.assignments.order_by(Assignment.due_date).all()
    return render_template('portal/dashboard.html', assignments=assignments)

@portal_bp.route('/assignments/new', methods=['GET','POST'])
@login_required
def new_assignment():
    if request.method == 'POST':
        a = Assignment(
            title=request.form['title'],
            subject=request.form.get('subject',''),
            description=request.form.get('description',''),
            due_date=datetime.strptime(request.form['due_date'], '%Y-%m-%d') if request.form.get('due_date') else None,
            student_id=current_user.id
        )
        db.session.add(a); db.session.commit()
        flash('Assignment added.', 'success')
        return redirect(url_for('portal.dashboard'))
    return render_template('portal/new_assignment.html')

@portal_bp.route('/assignments/<int:aid>/submit', methods=['POST'])
@login_required
def submit_assignment(aid):
    a = Assignment.query.filter_by(id=aid, student_id=current_user.id).first_or_404()
    a.submitted = True; db.session.commit()
    flash('Assignment marked as submitted.', 'success')
    return redirect(url_for('portal.dashboard'))
