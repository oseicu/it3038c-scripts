from flask import Flask, render_template, request

app = FLask(__name__)
app.config.fom_object(__name__)

@app.route("/")
def hello():
    #myname='CO'
    return render_template("index.html",value=name)
    #, name=myName)


@app.route('/welcome', methods=['POST'])
def welcome():
    return render_template("welcome.html", myName=request.form['myName'])