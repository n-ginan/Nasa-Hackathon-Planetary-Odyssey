import logging
from flask import Flask, render_template, request

app = Flask(__name__)


class WebApp:
    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/loading")
    def loading():
        return render_template("loading.html")

    @app.route("/intro")
    def intro():
        return render_template("intro.html")

    @app.route("/planet-1")
    def proxima():
        return render_template("planet1.html")

    @app.route("/planets-selection")
    def planets():
        return render_template("planetsSelection.html")

    @app.route("/planet-information")
    def planet_information():
        return render_template("planetInformation.html", boss_code=request.args.get("boss_code"))

    @app.route("/boss-transition")
    def boss_transition():
        return render_template("boss_transition.html", boss_code=request.args.get("boss_code"),
                               transition_type=request.args.get("transition_type"))

    @app.route("/quiz")
    def quiz():
        return render_template("quiz.html", boss_code=request.args.get("boss_code"))

    def start():
        # Logging Configuration
        logging.basicConfig(
            level=logging.INFO,
            format="%(asctime)s [%(levelname)s]: %(message)s",
            datefmt="%b-%d-%Y %I:%M %p",  # %I for 12-hour format and %p for AM/PM
        )
        logging.info("Web application has been started!")


if __name__ == "__main__":
    app.run()
