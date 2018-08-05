class CheckoutModel {
    constructor(){
        this._country = null;
        this._key = null;
        this._paymentMethods = []
        this._selectedMethod = null
        this._amount = 5;
        this._currencyType = null;
        this._formField = {}
    }

    get country(){
        return this._country
    }

    set country(value){
        this._country = value
    }

    get paymentMethods(){
        return this._paymentMethods
    }

    set paymentMethods(value){
        this._paymentMethods = value
    }


    get selectedMethod(){
        return this._selectedMethod
    }

    set selectedMethod(value){
        this._selectedMethod = value
    }

    get amount(){
        return this._amount
    }

    set amount(value){
        this._amount = value
    }

    get currencyType(){
        return this._currencyType;
    }

    set currencyType(value){
        this._currencyType = value;
    }

    get key(){
        return this._key;
    }

    set key(value){
        this._key = value;
    }

    get formField(){
        return this._formField;
    }

    set formField(value){
        this._formField = value;
    }
}


export default new CheckoutModel()