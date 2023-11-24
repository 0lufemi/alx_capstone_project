from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import sys

db_user = sys.argv[1]
db_pass = sys.argv[2]
db_host = sys.argv[3]

app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql://{db_user}:{db_pass}@{db_host}/blog_app'
