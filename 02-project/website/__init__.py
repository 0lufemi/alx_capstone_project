from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from os import path

app = Flask(__name__)

def create_app():

    @app.route("/")
    def home():
        return "<h1>Hello World!</h2>"

    return app
