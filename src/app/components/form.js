import {btnPay,pwFieldset,cardFields,cardForm,pwContainer,success} from '../dom'
import {disable,enable,luhnCheck,bindEvent,debounce,setText,onlyCharacter,isValidCard,isValidExpiry,onlyNumber,hideElement,showElement} from "../utils";
import model from '../model'
let inputObjArr = [];

const setBlame = (inputObj,blameObj)=>{
    inputObj.valid = blameObj.valid;
    if(!blameObj.valid){
        setText(inputObj.errorTag,blameObj.blame);
    }else if(inputObj.errorTag.innerText){
        setText(inputObj.errorTag);
    }
}

const cardHolderHandler = (inputObj)=>{
    bindEvent(inputObj.node,"keyup",debounce((e)=>{
        setBlame(inputObj,onlyCharacter(e.target.value))
    },250))
};

const cardNumberHandler = (inputObj)=>{
    bindEvent(inputObj.node,"keyup",debounce((e)=>{

        setBlame(inputObj,isValidCard(e.target.value))
    },250))
};

const cardExpDateHandler = (inputObj)=>{
    bindEvent(inputObj.node,"keyup",debounce((e)=>{
        if(e.target.value.indexOf("/")===-1&&e.target.value.length>2){
            const _str = e.target.value.split("");
            _str.splice(2,0,"/")
            if(_str.length>5){
                _str.pop()
            }
            e.target.value  = _str.join("")
        }
        setBlame(inputObj,isValidExpiry(e.target.value))
    },250))
};


const cardCVVHandler = (inputObj)=>{
    bindEvent(inputObj.node,"keyup",debounce((e)=>{
        setBlame(inputObj,onlyNumber(e.target.value))
    },250))
};

const checkValidity = ()=>{
    return new Promise((resolve, reject)=>{
        let stat = inputObjArr.every((input)=>{
            return input.valid
        });

        if(stat){
            model.formField = inputObjArr.reduce((ack,inputObj)=>{
                ack[inputObj.node.name] = inputObj.node.value
                return ack;
            },{});
            resolve(stat)
        }else {
            inputObjArr.forEach((inputObj)=>{
                setBlame(inputObj,inputObj.validator(inputObj.node.value))
            });
            model.formField = {};
            reject(stat)
        }
    })
};


const registerInputHandler = ()=>{
    inputObjArr  = cardFields().reduce((ack,field)=>{
        ack.push({
            node:field,
            labelNode:field.previousElementSibling,
            _label:field.previousElementSibling.innerText,
            valid:false,
            errorTag:field.previousElementSibling.children[0],
            error:""
        });
        return ack;
    },[])

    for(const inputObj of inputObjArr){

            switch (inputObj.node.name) {
                case "holder":
                    inputObj.validator = onlyCharacter
                    cardHolderHandler(inputObj)
                    break;
                case "number":
                    inputObj.validator = isValidCard
                    cardNumberHandler(inputObj)
                    break;
                case "expiry":
                    inputObj.validator = isValidExpiry
                    cardExpDateHandler(inputObj)
                    break;
                case "cvv":
                    inputObj.validator = onlyNumber
                    cardCVVHandler(inputObj)
                    break;
            }

    }

};


const registerSubmitHandler = ()=>{
    bindEvent(cardForm(),"submit",(e)=>{
        e.preventDefault();
        checkValidity().then(stat=>{
            hideElement(pwContainer())
            setText( success(), "Payment successful!")
            showElement(success())
            // location.href="/stat/success.html"
            // console.log(model.formField)
        }).catch((e)=>{
            // location.href="/stat/error.html"
            // console.log("not valid")
        })
    })
}

export const formInit = ()=>{
    // disable(btnPay());
    enable(pwFieldset());
    registerInputHandler();
    registerSubmitHandler();
    btnPay().value = `Pay ${model.amount} ${model.currencyType}`
};