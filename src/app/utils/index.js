import {errorDom} from "../dom";

export const bindEvent = (element, eventName, eventHandler) => {
    if (element.addEventListener) {
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
};

export const hideElement = (dom)=>{
    if(dom.classList.contains("hidden"))
        return;

    dom.classList.add("hidden")
};

export const setDom = (dom,str="")=>{
    dom.innerHTML = str
};

export const setText = (dom,str="")=>{
    dom.innerText = str
}

export const addClass = (dom,classList)=>{
    dom.classList.add(classList)
};

export const removeClass = (dom,classList)=>{
    dom.classList.remove(classList)
};


export const disable = (dom)=>{
    dom.setAttribute("disabled",true)
};

export const enable = (dom)=>{
    dom.removeAttribute("disabled")
};

export const handleError = (obj,key,message="Ops!")=>{
    if(obj.hasOwnProperty(key)){
        showError(message)
        throw new Error(message)
        return null;
    }
};


export const showElement = (dom)=>{
    if(!dom.classList.contains("hidden"))
        return;

    dom.classList.remove("hidden")
};


export const bus = (()=>{
    const events = {};
    const on = (name,fn)=>{
        events[name] = events[name] || [];
        events[name].push(fn);
    };
    const off = (name,fn)=>{
        if (events[name]) {
            for (let i = 0; i < events[name].length; i++) {
                if (events[name][i] === fn) {
                    events[name].splice(i, 1);
                    break;
                }
            }
        }
    };

    const emit = (name,data)=>{
        if (events[name]) {
            events[name].forEach(function(fn) {
                fn(data);
            });
        }
    }

    return {
        on,
        off,
        emit
    }


})();


export const luhnCheck = ((arr)=> {
    return function (ccNum) {
        var
            len = ccNum.length,
            bit = 1,
            sum = 0,
            val;

        while (len) {
            val = parseInt(ccNum.charAt(--len), 10);
            sum += (bit ^= 1) ? arr[val] : val;
        }

        return sum && sum % 10 === 0;
    };
})([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);

export const debounce = (fn, ms = 0) => {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};

export const isEmpty = (str)=>{
    return !!str
};

export const onlyCharacter = (str)=>{
    if(!isEmpty(str)){
        return {valid:false,blame:"this field is required"}
    }else if(!(/^[a-zA-Z]+$/.test(str))) {
        return {valid:false,blame:"should not contain numbers and special chars"}
    }else {
        return {valid:true,blame:""}
    }
};

export const onlyNumber = (str)=>{
    if(!isEmpty(str)){
        return {valid:false,blame:"this field is required"}
    }else if(!(/^[0-9]+$/.test(str))) {
        return {valid:false,blame:"should be a number only"}
    }else {
        return {valid:true,blame:""}
    }
};


export const isValidCard = (str)=>{
    const isCardNumber = onlyNumber(str)
    if(!isCardNumber.valid){
        return isCardNumber
    }else if(!luhnCheck(str)){
        return {valid:false,blame:"card number is not valid"}
    }else{
        return {valid:true,blame:""}
    }
    // if(!isEmpty(str)){
    //     return {valid:false,blame:"this field is required"}
    // }else if(!(/^[a-zA-Z]+$/.test(str))) {
    //     return {valid:false,blame:"should not contain numbers and special chars"}
    // }else {
    //     return {valid:true,blame:""}
    // }
};


const checkMonth = (str)=>{
    const [mon,year] = str.split("/").map(Number)

    const _currYear = parseInt(new Date().getFullYear().toString().split("").splice(-2).join(""));
    const _currMonth = new Date().getMonth()+1;

    if(year<_currYear){
        return {valid:false,blame:"year should be more or equal to current year"}
    }else if(year===_currYear&&mon<_currMonth){
        return {valid:false,blame:"month should be more or equal to current month"}
    }else if(mon>12){
        return {valid:false,blame:"month should be less than or equal to 12"}
    } else{
        return {valid:true,blame:""}
    }
};


export const isValidExpiry = (str)=>{
    if(!isEmpty(str)){
        return {valid:false,blame:"this field is required"}
    }else if(!(/^[\d]{2}\/[\d]{2}$/.test(str))) {
        return {valid:false,blame:"should follow the format (MM/YY) MM - Month;YY - last 2 number of Year"}
    }else {
       return checkMonth(str)
    }
};


export const showError = (text)=>{
    showElement(errorDom())
    setDom( errorDom(),`<h4>${text}</h4>`)
}

//   /^[\d]{2}\/[\d]{2}$/