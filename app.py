import logging
from flask import Flask, render_template

app = Flask(__name__)

class WebApp:
    @app.route("/")
    def index():
        return render_template('index.html')
    
    @staticmethod
    def start():
        # Logging Configuration
        logging.basicConfig(
            level=logging.INFO,
            format="%(asctime)s [%(levelname)s]: %(message)s",
            datefmt="%b-%d-%Y %I:%M %p",  # %I for 12-hour format and %p for AM/PM
        )

if __name__ == "__main__":
    WebApp.start()
    app.run()