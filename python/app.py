from flask import Flask, Response
from flask_cors import CORS
import matplotlib
matplotlib.use('Agg')  # Use a non-interactive backend
import matplotlib.pyplot as plt
import io
from flask import jsonify, render_template

# Generate plot data
data = [1, 2, 3, 4, 5]

# Create a figure and plot the data
fig, ax = plt.subplots(figsize=(6, 4))
ax.plot(data)

# Define the table data
table_data = [
    ['Product', 'Price', 'Quantity'],
    ['Apple', 0.75, 10],
    ['Orange', 0.50, 15],
    ['Banana', 0.25, 20],
    ['Kiwi', 1.00, 8]
]


app = Flask(__name__)
CORS(app)

@app.route('/plot/svg', methods=['GET'])
def plot_svg():
    # Convert plot to PNG image
    pngImage = io.BytesIO()
    fig.savefig(pngImage, format='svg')
    pngImage.seek(0)

    # Return the PNG image
    return Response(pngImage.getvalue(), mimetype='image/svg')

@app.route('/plot', methods=['GET'])
def plot_png():
    # Convert plot to PNG image
    pngImage = io.BytesIO()
    fig.savefig(pngImage, format='png')
    pngImage.seek(0)

    # Return the PNG image
    return Response(pngImage.getvalue(), mimetype='image/png')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data', methods=['GET'])
def get_table():
    return jsonify(table_data)

if __name__ == '__main__':
    app.run(debug=True)
