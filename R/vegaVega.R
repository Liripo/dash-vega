# AUTO GENERATED FILE - DO NOT EDIT

#' @export
vegaVega <- function(id=NULL, clickData=NULL, height=NULL, hoverData=NULL, spec=NULL, width=NULL) {
    
    props <- list(id=id, clickData=clickData, height=height, hoverData=hoverData, spec=spec, width=width)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Vega',
        namespace = 'dash_vega',
        propNames = c('id', 'clickData', 'height', 'hoverData', 'spec', 'width'),
        package = 'dashVega'
        )

    structure(component, class = c('dash_component', 'list'))
}
