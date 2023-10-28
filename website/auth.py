from flask import Blueprint, render_template, redirect, url_for, request

auth = Blueprint("auth", __name__)

subscribers = []

@auth.route("/login", methods=['GET', 'POST'])
def login():
    email = request.form.get("email")
    password = request.form.get("password")
    return render_template("login.html")

@auth.route("/signup", methods=['GET', 'POST'])
def signup():
    username = request.form.get("username")
    email = request.form.get("email")
    password1 = request.form.get("password1")
    password2 = request.form.get("password2")

    return render_template("signup.html", username = username, email = email, password1 = password1, password2= password2)

@auth.route("/logout")
def logout():
    return redirect(url_for("pages.home"))

@auth.route("/form", methods = ['GET', 'POST'])
def form():
    username = request.form.get("username")
    email = request.form.get("email")
    password1 = request.form.get("password1")
    password2 = request.form.get("password2")

    subscribers.append(f"{username} || {email}")

    if not username or not email or not password1 or not password2:
        return render_template("signup.html", err_msg = err_msg)

    title = "Login Information"
    return render_template("form.html", subscribers = subscribers)
