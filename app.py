from flask import Flask, render_template, request
import json
from config import Config
import pandas as pd
from flask_fontawesome import FontAwesome


app = Flask(__name__)
app.config.from_object(Config)
fa = FontAwesome(app)


@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == "POST":
        print(request.form, flush=True)
        jsdata = request.form['data']
    
    with open('data.json', 'r') as f:
        contents = json.load(f)


    return render_template('index.html', contents=contents, columns=["name", "age", "address", "phone", "email"])


@app.route('/set', methods=["POST"])
def set_rows():
    data = request.form.get("data")
    data = json.loads(data)
    
    for record in data:
        id = record.pop("id")
        
        df = pd.read_json('data.json')
        df.iloc[id, :] = record
        df.to_json('data.json', orient='records', indent=4)
        
        print(df.iloc[id, :])
    return {}
    

@app.route('/test', methods=["GET", "POST"])
def test():
    if request.method == "GET":
        print("get function")
    
    else:
        print(request.form)
        jsdata = request.form['data']
        print(jsdata)
        print(json.loads(jsdata))
    return {"test": "TEST"}