from flask import Flask, render_template, request, redirect, url_for, session
from datetime import timedelta
import requests

app = Flask(__name__)                                     # <~~~~~~~~ Initialize app
app.config.update({'SECRET_KEY': 'secret_key'})           # <~~~~~~~~ Secret key for super secret secure data storage
app.permanent_session_lifetime = timedelta(minutes=10)    # <~~~~~~~~ Set session permanence to 10 minutes

@app.route("/logout", methods=["GET", "POST"])
def logout():
                                          # <~~~~~~~~ Clear active session
    return redirect(url_for("home"))                        # <~~~~~~~~ Redirect to home page
@app.route('/')
@app.route("/pandemicprogrammer")
def pandemicprogrammer():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True, port=5000)