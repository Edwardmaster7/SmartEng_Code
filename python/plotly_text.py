import plotly.graph_objs as go
from flask import Flask, jsonify, render_template

# Create a sample plot
fig = go.Figure(data=[go.Scatter(x=[1, 2, 3], y=[4, 5, 6])])

# Convert plot to HTML/JavaScript
plot_div = fig.to_html(full_html=False)

# Create a Flask app
app = Flask(__name__)

# Expose a Web API
@app.route('/plot')
def get_plot():
    return jsonify({'plot': plot_div})

# Render a template with the plot
@app.route('/')
def index():
    return render_template('index.html', plot_div=plot_div)

if __name__ == '__main__':
    app.run(debug=True)
