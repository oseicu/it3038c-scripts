from flask import Flask, render_template, request

app = FLaSk(__name__)
app.config.from.object(__name__)
app.run(debug=True, port=5000, host='0.0.0.0')

@app.route("/")
def hello():
    name='CO'
    return render_template("index.html",value=name)

@app.route('/welcome', methods=['POST'])
def welcome():
    return render_template("welcome.html", myName=request.form['myName'])

#Windows:
py-3-m venv venv
venv\Scripts\activate.bat

#unux
python3 -m venv venv
.venv/bin/activate
