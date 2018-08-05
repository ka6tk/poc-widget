import {PW_BASE} from './constants'
import model from './model'


export const getDefaultCountry = async ()=>{
    const response = await fetch(`${PW_BASE}/rest/country?key=${model.key}&uid=user101`, {mode: 'cors'});
    return await response.json();
};

export const getPaymentMethods = async (code)=>{
    const response = await fetch(`${PW_BASE}/payment-systems/?key=${model.key}&country_code=${code}`, {mode: 'cors'});
    return await response.json();
};

// export const getCountry = async ()=>{
//     const response = await fetch(`https://restcountries.eu/rest/v2/all`, {mode: 'cors'});
//     return await response.json();
// };