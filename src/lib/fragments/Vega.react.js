import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {defaultProps, propTypes} from '../components/Vega.react';
import vegaEmbed from 'vega-embed'
import { isNil } from 'ramda';

export default class Vega extends Component {

    constructor(props) {
        super(props);
        // 创建一个 ref 来存储 react组件 的 DOM 元素
        this.el = React.createRef();
    }
    // ref属性获取挂载的组件dom元素
    // https://zh-hans.legacy.reactjs.org/docs/refs-and-the-dom.html

    render_vega() {
        const {setProps} = this.props;
        if (!this.props.spec){ return;}
        // console.log("render_vega");
        vegaEmbed(this.el.current,this.props.spec).then(function(result) {
            var view = result.view;
            view.addEventListener('click', function(event, item) {
                setProps({clickData: item.datum});
            });
            view.addEventListener('mouseover',function(event,item) {
                if (item !== null) {
                    setProps({hoverData: item.datum});
                }
            });
        }).catch(console.error);
    }

    // 只有id或者spec变化的时候才更新组件
    shouldComponentUpdate(nextProps) {
        return (
            this.props.id !== nextProps.id ||
            this.props.spec !== nextProps.spec
        )
    }

    // 组件挂载时调用的函数
    componentDidMount() {
        this.render_vega();
    }

    // 组件完成更新后被调用
    componentDidUpdate() {
        this.render_vega();
    }

    render() {
        const {id,width,height} = this.props;

        return (
            <div id={id} ref = {this.el} style={{width: width,height: height}}>
            </div>
        );
    }
}


Vega.defaultProps = defaultProps;
Vega.propTypes = propTypes;