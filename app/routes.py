from app import app
from flask import render_template

@app.route('/')
@app.route('/index')
def index():
  return render_template('home.html')

@app.route('/lifestyle')
def lifestyle():
  return render_template('lifestyle.html') 

@app.route('/contato')
def contato():
  return render_template('contato.html') 