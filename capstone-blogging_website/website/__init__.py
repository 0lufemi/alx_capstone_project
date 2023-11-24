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

# db_user = sys.argv[1]
# db_pass = sys.argv[2]
# db_host = sys.argv[3]

def create_app():
    app = Flask(__name__)
    # app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://{db_user}:{db_pass}@{db_host}/blog_app'
    app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://user:pass@host/blog_app'

    # Initialize Database
    db = SQLAlchemy(app)

    #create Database model
    class Users(db.Model):
        id = db.Column(db.Integer, primary_key=True)
        username = db.Column(db.String(200), nullable=False)
        email = db.Column(db.String(200), nullable=False)
        password = db.Column(db.String(200),  nullable=False)
        created_at = db.Column(db.DateTime, default=datetime.utcnow)

        def __repr__(self):
            return '<Name %r>' % self.id

    from .pages import pages
    from .auth import auth

    app.register_blueprint(pages, url_prefix="/")
    app.register_blueprint(auth, url_prefix="/")

    return app
