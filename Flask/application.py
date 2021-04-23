from flask import Flask,jsonify

app = Flask(__name__)

@app.route("/uploadImage", methods=['POST'])
def upload_Image():
    print("Form has the requested", request.form)
    return jsonify({
        "Success" : "done"
    })