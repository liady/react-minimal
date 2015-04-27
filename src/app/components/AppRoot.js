import React from "react/addons";
import template from "./AppRoot.rt";

var AppRoot = React.createClass({
    mixins : [React.addons.PureRenderMixin],
    getInitialState : function(){
        return this.props.initialState;
    },
    render : template
});

export default AppRoot;