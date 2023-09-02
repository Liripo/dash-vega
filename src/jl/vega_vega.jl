# AUTO GENERATED FILE - DO NOT EDIT

export vega_vega

"""
    vega_vega(;kwargs...)

A Vega component.
在src/lib/fragments/Vega.react.js文件修改
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `clickData` (Dict; optional)
- `height` (String; optional)
- `hoverData` (Dict; optional)
- `spec` (Dict; optional): A label that will be printed when this component is rendered.
- `width` (String; optional)
"""
function vega_vega(; kwargs...)
        available_props = Symbol[:id, :clickData, :height, :hoverData, :spec, :width]
        wild_props = Symbol[]
        return Component("vega_vega", "Vega", "dash_vega", available_props, wild_props; kwargs...)
end

