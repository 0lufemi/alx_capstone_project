# from website import create_app
from flask import Flask, render_template, redirect, url_for
# from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from os import path
from sqlalchemy import create_engine


def create_app():
    app = Flask(__name__)

    return app
