import model from '../model'
import {extraCountries} from '../constants'
import {countryCode,countryWrap,countrySelect} from '../dom'
import {bindEvent,bus,setText} from '../utils'

const  registerCountryChange = ()=>{
    bindEvent(countrySelect(),'change',(e)=>{

        let _country = JSON.parse(e.target.value);

        if(model.country.code !== _country.code){
            model.country = _country;
            updateCountryCode(_country)
            bus.emit("countryChange")

        }
    })
};

const updateCountryCode = (obj)=>{
    setText( countryCode(),`${obj.code}`)
}

export const countryInit = ()=>{
        countrySelect().removeAttribute("disabled");

        [{...model.country},...extraCountries].map((countryObj,cIndex)=>{
            const _option = document.createElement("option");
            _option.setAttribute("value",JSON.stringify(countryObj))
            setText(_option,countryObj.country)
            // _option.innerText = ;
            if(cIndex === 0){
                _option.setAttribute("selected","selected");
                updateCountryCode(countryObj)
                // countryCode().innerText = `${countryObj.code}`;
            }
            countryWrap().appendChild(_option)
        });

    registerCountryChange();

};