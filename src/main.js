import {hideElement, setDom,showError} from "./app/utils";

require("babel-runtime/regenerator")
require("./styles/reset.css")
require("./styles/main.css")
require("./app/index");


import {errorDom,pwContainer,paymentDomStr} from './app/dom'
import model from './app/model'
import {initialize} from './app/index'


window.onload = function () {

    window.addEventListener("message", (e)=>{
        // console.log(e)
       switch (e.data.type){
           case "init":
               if(e.data.config.hasOwnProperty("amount")&&e.data.config.hasOwnProperty("currency")&&e.data.config.hasOwnProperty("key")){
                   hideElement(errorDom());
                   setDom(pwContainer(),paymentDomStr)
                   // pwContainer().innerHTML = paymentDomStr;
                   model.amount = e.data.config.amount;
                   model.currencyType = e.data.config.currency
                   model.key = e.data.config.key
                   initialize();
               }else{
                   showError("Config is missing");
               }
               break;
       }
    }, false);
};


