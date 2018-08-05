import model from '../model'
import {amountPrice,amountType} from '../dom'
import {setText} from "../utils";

export const amountInit = ()=>{
    setText(amountPrice(), model.amount)
    setText(amountType(), model.currencyType)
    // amountPrice().innerText = model.amount
    // amountType().innerText = model.currencyType


};