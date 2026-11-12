from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows your frontend to talk to your backend


@app.route("/translate", methods=["POST"])
def translate():
  data = request.json
  text = data.get("text", "")
  target_lang = data.get("language", "en")

  # TODO: Put your translation or ISL model logic here
  translated_result = f"Translated ({target_lang}): {text}"

  return jsonify({"result": translated_result})


if __name__ == "__main__":
  app.run(debug=True, port=5000)