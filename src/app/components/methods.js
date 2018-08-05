import {bus, setDom, bindEvent, removeClass, addClass, setText} from '../utils'
import model from '../model'
import { paymentWrap} from '../dom'
import {getPaymentMethods} from '../api'

const onPaymentClickHandler = (node)=>{
    bindEvent(node,'click',(e)=>{
        if(!e.currentTarget.classList.contains("active")){
            removeClass(document.querySelector(`.${event.currentTarget.classList.value}.active`),["active"])
            addClass(e.currentTarget,["active"]);
            model.selectedMethod = model.paymentMethods[event.currentTarget.getAttribute('data-index')];
        }
    })
};

const registerCountryChangeHandler = ()=>{
    bus.on("countryChange",()=>{
        (async ()=>{
                model.paymentMethods = await getPaymentMethods(model.country.code);
                updateDOMPaymentMethods();
        })()
    })
};


const updateDOMPaymentMethods = (skipClear)=>{
        if(!skipClear)
            setDom(paymentWrap());

        model.paymentMethods.map((payment,pIndex)=>{
            // console.log(payment)
            const paymentTypeNode = document.createElement("div");
            addClass(paymentTypeNode,['payment-type']);
            if(pIndex === 0){
                addClass(paymentTypeNode,['active']);
                model.selectedMethod = payment;
            }
            paymentTypeNode.setAttribute("data-index",pIndex);
            onPaymentClickHandler(paymentTypeNode);
            // paymentTypeNode.addEventListener("click",onPaymentClick)

            const imageNode = document.createElement("img");
            imageNode.setAttribute("src",payment.img_url);

            paymentTypeNode.appendChild(imageNode);

            const methodText = document.createElement("p");
            methodText.setAttribute("class","method-text")
            setText(methodText,payment.name)

            paymentTypeNode.appendChild(methodText);

            paymentWrap().appendChild(paymentTypeNode)
        })
};

export const  methodInit = ()=>{
    updateDOMPaymentMethods(true)
    registerCountryChangeHandler()
}