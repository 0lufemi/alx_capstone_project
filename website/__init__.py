# from website import create_app
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import sys
# from flask_login import LoginManager
# from os import path
# from sqlalchemy import create_engine
# from sqlalchemy.ext.declarative import declarative_base


# Base = declarative_base()

# engine = create_engine("mysql+mysqldb://root:root@localhost/blog_app")

# Base.metadata.create_all(engine)

db_user = sys.argv[1]
db_pass = sys.argv[2]
db_host = sys.argv[3]

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://{db_user}:{db_pass}@{db_host}/blog_app'

    from .pages import pages
    from .auth import auth

    app.register_blueprint(pages, url_prefix="/")
    app.register_blueprint(auth, url_prefix="/")

    return app
