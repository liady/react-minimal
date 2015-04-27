import React from "react/addons";
import template from "./Item.rt";

class Item{

    shouldComponentUpdate() {
        return React.addons.PureRenderMixin.shouldComponentUpdate.apply(this,arguments);
    }

    render() {
        return template.apply(this, arguments);
    }
}

export default Item;