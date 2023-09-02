import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Vega as RealComponent } from '../LazyLoader';

/**
 * 在src/lib/fragments/Vega.react.js文件修改
 */
export default class Vega extends Component {
    render() {
        return (
            <React.Suspense fallback={null}>
                <RealComponent {...this.props}/>
            </React.Suspense>
        );
    }
}

Vega.defaultProps = {
    clickData: null,
    hoverData: null,
    width: "100%",
    height: "400px"
};

Vega.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    spec: PropTypes.object,
    width: PropTypes.string,
    height: PropTypes.string,

    clickData: PropTypes.object,
    hoverData: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};


export const defaultProps = Vega.defaultProps;
export const propTypes = Vega.propTypes;