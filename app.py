
import json
from flask import Flask, render_template, request


app = Flask(__name__)

with open("project_data.json") as f:
    project_data = json.load(f)

@app.route("/")
def index():
    return render_template("index.html",projects=project_data)

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404
  
if __name__ == "__main__":
    app.run(host="0.0.0.0",port=80,debug=True)
