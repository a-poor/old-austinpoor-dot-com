
# import json
from flask import Flask, render_template, request

from project_data import project_data

application = Flask(__name__)

@application.route("/")
def index():
    # with open("project_data.json") as f:
    #     project_data = json.load(f)
    return render_template("index.html",projects=project_data)

@application.route("/contact")
def contact():
    return render_template("contact.html")

@application.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404
  
if __name__ == "__main__":
    application.run(host="0.0.0.0",port=8000,debug=True)
