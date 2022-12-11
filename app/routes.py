from app import app
from flask import render_template

@app.route('/')
@app.route('/index')
def index():
  return render_template('home.html')

@app.route('/sobre')
def lifestyle():
  return render_template('lifestyle.html')

@app.route('/formacao')
def academic():
  return render_template('academic.html')

@app.route('/experiencia')
def works():
  return render_template('works.html')

@app.route('/contato')
def contato():
  return render_template('contato.html')
