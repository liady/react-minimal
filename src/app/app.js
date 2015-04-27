import React from "react/addons";
import AppRoot from "./components/AppRoot";

class App {
    constructor(options){
        this.initialState = options.initialState;
    }

    render(rootElement){
        var appElement = React.createElement(AppRoot, {initialState : this.initialState});
        if(rootElement){
            React.render(appElement, rootElement);
        } else {
            React.renderToString(appElement);
        }
    }
}

export default App;