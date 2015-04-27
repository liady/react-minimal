import App from '../app';

var attachElement = document.getElementById('app');
var app = new App({initialState:{
    items : [
        {text : "Build a React App", done : true}, 
        {text : "Build Another one", done : false}
    ]
}});

app.render(attachElement);
