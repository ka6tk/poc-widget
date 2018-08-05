import {getDefaultCountry,getPaymentMethods,getCountry} from './api'
import {loader, pwContainer} from './dom'
import {hideElement, showElement, showError} from "./utils";
import model from './model'
import {amountInit} from './components/amount'
import {countryInit} from './components/country'
import {methodInit} from './components/methods'
import {formInit} from './components/form'
import {handleError} from './utils'

export const initialize = async function () {

    const _country = await getDefaultCountry();
    handleError(_country,"error","Error in Country API");
    model.country = _country;

    const _paymentMethods = await getPaymentMethods(model.country.code);
    handleError(_paymentMethods,"error","Error in payment API");
    model.paymentMethods = _paymentMethods;


    amountInit();
    countryInit();
    methodInit();
    formInit();
    hideElement(loader())
    showElement(pwContainer())

};


