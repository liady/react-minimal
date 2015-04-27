import React from "react/addons";
import template from "./List.rt";

var List = React.createClass({
    mixins : [React.addons.PureRenderMixin],
    getItems : function(){
        return this.props.items;
    },
    componentWillMount : function(){
        this.props.items.forEach(function(item, i){
            if(!item.key){
                item.key=i;
            }
        });
    },
    handleToggle : function(text){
        this.props.items.forEach(function(item){
            if(item.text===text){
                item.done = !item.done;
            }
        });
        this.forceUpdate();
    },
    render : template
});

export default List;