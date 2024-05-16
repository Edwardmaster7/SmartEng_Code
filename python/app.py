from flask import Flask, Response
from flask_cors import CORS
import matplotlib
matplotlib.use('Agg')  # Use a non-interactive backend
import matplotlib.pyplot as plt
import io
from flask import render_template

import plotly.graph_objs as go
from flask import Flask, jsonify, render_template

# Create a sample plot
fig = go.Figure(data=[go.Scatter(x=[1, 2, 3], y=[4, 5, 6])])

# Convert plot to HTML/JavaScript
plot_div = fig.to_html(full_html=False)


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
    return render_template('index.html', plot_div=plot_div)


@app.route('/json')
def get_plot():

    return jsonify({'plot': plot_div})

if __name__ == '__main__':
    app.run(debug=True)
