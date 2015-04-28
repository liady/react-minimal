import App from '../../app';
import {} from 'bootstrap-webpack!../css/bootstrap.config.jsconf';
import {} from 'font-awesome-webpack';
import {} from '../css/checkboxes.css';
import {} from '../css/style.css';

var attachElement = document.getElementById('app');
var app = new App({initialState:{
    items : [
        {text : "Build First React App", done : true}, 
        {text : "Build One Yourself", done : false},
        {text : "Build A Better One", done : false, success:true}
    ]
}});

app.render(attachElement);
