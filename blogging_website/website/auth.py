from flask import Blueprint, render_template, redirect, url_for, request

auth = Blueprint("auth", __name__)

subscribers = []

@auth.route("/login", methods=['GET', 'POST'])
def login():
    # email = request.form.get("email")
    # password = request.form.get("password")
    return render_template("login.html")

@auth.route("/signup", methods=['GET', 'POST'])
def signup():
    # username = request.form.get("username")
    # email = request.form.get("email")
    # password1 = request.form.get("password1")
    # password2 = request.form.get("password2")

    return render_template("signup.html")

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
        err_msg = "All Fields Required..."
        return render_template("signup.html", err_msg = err_msg,
        username = username,
        email = email,
        password1 = password1,
        password2 = password2)

    # if password1 is not password2:
    #     pass_err = "Passwords not same"
    #     return render_template("signup.html",
    #     pass_err = pass_err)

    title = "Login Information"
    return render_template("form.html", subscribers = subscribers)
