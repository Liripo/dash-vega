# dash-vega

dash-vega is a Dash component library.

## clickData and hoverData

```py
import dash_vega
from dash import Dash, callback, html, Input, Output,dcc
import altair as alt
from vega_datasets import data
import json

source = data.cars()

styles = {
    'pre': {
        'border': 'thin lightgrey solid',
        'overflowX': 'scroll'
    }
}

app = Dash(__name__)

app.layout = html.Div([
    dcc.Dropdown(
        id = "input",
        options = [3,4,5,6],
        value = 4
    ),
    dash_vega.Vega(id='vega'),
    html.Div([
            dcc.Markdown("""
                **Click Data**

                Click on points in the graph.
            """),
            html.Pre(id='click-data', style=styles['pre']),
    ]),
    html.Div([
            dcc.Markdown("""
                **hover Data**

                Click on points in the graph.
            """),
            html.Pre(id='hover-data', style=styles['pre']),
    ]),
])


@callback(
    Output('vega', 'spec'), 
    Input('input', 'value')
)
def update_vega(value):
    df = source[source['Cylinders'] == value]
    chart = (
        alt.Chart(df).mark_circle().encode(
            x='Horsepower',
            y='Miles_per_Gallon',
            size='Acceleration',
            color='Origin',
            tooltip=['Name', 'Origin', 'Horsepower', 'Miles_per_Gallon']
        )
        .interactive()
        .properties(title="Altair / Vega-Lite",width="container",height=400)
        .to_dict()
    )
    return chart


@callback(
    Output("click-data","children"),
    Input("vega","clickData")
)
def click_data(clickData):
    return json.dumps(clickData, indent=2)

@callback(
    Output("hover-data","children"),
    Input("vega","hoverData")
)
def hover_data(hoverData):
    return json.dumps(hoverData, indent=2)

if __name__ == '__main__':
    app.run_server(debug=True)
```

![vega-click-hover](https://s11.gifyu.com/images/Sgalp.gif)