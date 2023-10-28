from flask import Blueprint, render_template

pages = Blueprint("pages", __name__)

@pages.route("/")
@pages.route("/home")
def home():
    return render_template("home.html")
