from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

engine = create_engine("mysql+mysqldb://root:root@localhost/blog_app")

Base.metadata.create_all(engine)