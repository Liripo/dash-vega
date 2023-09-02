# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Vega(Component):
    """A Vega component.
在src/lib/fragments/Vega.react.js文件修改

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.

- clickData (dict; optional)

- height (string; default "400px")

- hoverData (dict; optional)

- spec (dict; optional):
    A label that will be printed when this component is rendered.

- width (string; default "100%")"""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_vega'
    _type = 'Vega'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, spec=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, clickData=Component.UNDEFINED, hoverData=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'clickData', 'height', 'hoverData', 'spec', 'width']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'clickData', 'height', 'hoverData', 'spec', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Vega, self).__init__(**args)
