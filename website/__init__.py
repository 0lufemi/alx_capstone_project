# from website import create_app
from flask import Flask
# from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
# from os import path
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()

engine = create_engine("mysql+mysqldb://root:root@localhost/blog_app")

Base.metadata.create_all(engine)

def create_app():
    app = Flask(__name__)

    from .pages import pages
    from .auth import auth

    app.register_blueprint(pages, url_prefix="/")
    app.register_blueprint(auth, url_prefix="/")

    return app
