import plotly.graph_objs as go
from flask import Flask, jsonify, render_template

# Define the table data
table_data = [
    ['Product', 'Price', 'Quantity'],
    ['Apple', 0.75, 10],
    ['Orange', 0.50, 15],
    ['Banana', 0.25, 20],
    ['Kiwi', 1.00, 8]
]

# Create the table trace
table = go.Table(
    header=dict(values=table_data[0]),  # Set the header row
    cells=dict(values=[row[1:] for row in table_data[1:]])  # Set the cell values
)

# Create the figure and add the table trace
fig = go.Figure(data=[table])

# Customize the table appearance (optional)
fig.update_layout(
    title='Fruit Inventory',
    width=400,
    height=300
)

# Display the table
fig.show()
