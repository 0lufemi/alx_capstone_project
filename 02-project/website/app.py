# from website import create_app
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from os import path

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/sign-up")
def signup():
    return render_template("signup.html")

@app.route("/logout")
def signout():
    return render_template("logout.html")

if __name__ == "__main__":
    # app = create_app()

    app.run(debug=True)
