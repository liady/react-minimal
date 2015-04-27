import _ from "lodash";
import React from "react/addons";
import template from "./List.rt";

var List = React.createClass({
    mixins : [React.addons.PureRenderMixin],
    getInitialState : function(){
        return {items : _.cloneDeep(this.props.items)};
    },
    handleToggle : function(index){
        var items = _.cloneDeep(this.state.items);
        items[index].done = !items[index].done;
        this.setState({items : items});
    },
    render : template
});

export default List;