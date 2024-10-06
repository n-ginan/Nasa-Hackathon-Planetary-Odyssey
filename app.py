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

    @app.route("/proxima")
    def proxima():
        return render_template("proxima.html")

    @app.route("/planets")
    def planets():
        return render_template("planets.html")

    @app.route("/planets-1")
    def planets_1():
        return render_template("planets1.html")

    @app.route("/encountered-boss")
    def encountered_boss():
        boss_name = request.args.get("boss_name")
        return render_template("boss.html", boss_name="Default Boss Name" if not boss_name else boss_name)

    @app.route("/quiz")
    def quiz():
        return render_template("quiz.html", boss_code=request.args.get("boss_code"))

    @app.route("/defeated-boss", methods=["POST"])
    def defeated_boss():
        # HTML file not created yet
        return render_template("", boss_name=request.form.get("boss_name"))

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
