from website import create_app

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/signup")
def signup():
    return render_template("signup.html")

@app.route("/logout")
def logout():
    return redirect(url_for(".home"))

if __name__ == "__main__":
    app = create_app()

    app.run(debug=True)
