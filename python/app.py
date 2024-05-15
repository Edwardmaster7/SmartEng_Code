from flask import Flask, Response
from flask_cors import CORS
import matplotlib
matplotlib.use('Agg')  # Use a non-interactive backend
import matplotlib.pyplot as plt
import io
from flask import render_template

app = Flask(__name__)
CORS(app)

@app.route('/plot')
def plot_png():
    # Generate plot data
    data = [1, 2, 3, 4, 5]

    # Create a figure and plot the data
    fig, ax = plt.subplots(figsize=(6, 4))
    ax.plot(data)

    # Convert plot to PNG image
    pngImage = io.BytesIO()
    fig.savefig(pngImage, format='png')
    pngImage.seek(0)

    # Return the PNG image
    return Response(pngImage.getvalue(), mimetype='image/png')

@app.route('/')
def index():
    return 'hi'

if __name__ == '__main__':
    app.run(debug=True)
