
module DashVega
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.1"

include("jl/vega_vega.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "dash_vega",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "async-Vega.js",
    external_url = "https://unpkg.com/dash_vega@0.0.1/dash_vega/async-Vega.js",
    dynamic = nothing,
    async = :true,
    type = :js
),
DashBase.Resource(
    relative_package_path = "async-Vega.js.map",
    external_url = "https://unpkg.com/dash_vega@0.0.1/dash_vega/async-Vega.js.map",
    dynamic = true,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_vega.min.js",
    external_url = nothing,
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "dash_vega.min.js.map",
    external_url = nothing,
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
