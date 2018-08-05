export const amountPrice = ()=>{
    return document.querySelector(".amount-price")
};

export const pwContainer = ()=>{
    return document.querySelector("#pw")
}

export const amountType = ()=>{
    return document.querySelector(".amount-type")
}

export const errorDom = ()=>{
    return document.querySelector("#pw-error")
};

export const countryCode = ()=>{
    return document.querySelector("#country-code")
};
export const countryWrap = ()=>{
    return document.querySelector("#country-list")
};
export const countrySelect = ()=>{
    return document.querySelector("#country-select")
};

export const paymentWrap = ()=>{
    return document.querySelector(".payment-methods")
};

export const btnPay = ()=>{
    return document.querySelector(".btn-pay")
};

export const pwFieldset = ()=>{
    return document.querySelector("#pw-fieldset")
};

export const cardFields = ()=>{
    return [...document.querySelectorAll("#card-form input")].filter(input=>input.type!=="submit")
};

export const cardForm = ()=>{
    return document.querySelector("#card-form")
};

export const success = ()=>{
    return document.querySelector("#success")
}


export const loader = ()=>{
    return document.querySelector("#loader")
}


export const paymentDomStr  = "<section class=\"clearfix\">\n" +
    "                <h4 class=\"header inline\">Amount to pay : <span class=\"amount-price\"></span> <span class=\"amount-type\"></span></h4>\n" +
    "            </section>\n" +
    "            <section class=\"clearfix\">\n" +
    "                <h4 class=\"header inline\">Country : <span id=\"country-code\"></span> </h4>\n" +
    "                <label class=\"autocmplete-warp\" for=\"country-select\">\n" +
    "                    Select country:\n" +
    "                    <select id=\"country-select\" disabled>\n" +
    "                        <optgroup label=\"Please select Country\" id=\"country-list\">\n" +
    "\n" +
    "                        </optgroup>\n" +
    "                    </select>\n" +
    "                </label>\n" +
    "            </section>\n" +
    "            <section class=\"clearfix\">\n" +
    "                <h4 class=\"header inline\">Payment Methods</h4>\n" +
    "                <div class=\"payment-methods\">\n" +
    "                    <!--Payment methods-->\n" +
    "                </div>\n" +
    "            </section>\n" +
    "            <section class=\"clearfix\">\n" +
    "                <h4 class=\"header inline\">Card Information</h4>\n" +
    "                <fieldset disabled id=\"pw-fieldset\">\n" +
    "                    <form id=\"card-form\" novalidate autocomplete='off'>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"card-holder\">\n" +
    "                                Cardholder Name <span class=\"error\"></span>\n" +
    "                            </label>\n" +
    "                            <input type=\"text\" name=\"holder\" id=\"card-holder\" maxlength=\"60\" placeholder=\"Your name here\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"card-number\">\n" +
    "                                Card Number <span class=\"error\"></span>\n" +
    "                            </label>\n" +
    "                            <input type=\"text\" name=\"number\" id=\"card-number\" placeholder=\"Your card number\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"exp-date\">\n" +
    "                                Card Expiry Date (mm/yy) <span class=\"error\"></span>\n" +
    "                            </label>\n" +
    "                            <input type=\"text\" id=\"exp-date\" name=\"expiry\" maxlength=\"5\" placeholder=\"mm/yy\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group\">\n" +
    "                            <label for=\"cvv\">\n" +
    "                                CVV <span class=\"error\"></span>\n" +
    "                            </label>\n" +
    "                            <input type=\"text\" id=\"cvv\" name=\"cvv\" maxlength=\"4\" placeholder=\"CVV\">\n" +
    "                        </div>\n" +
    "                        <div class=\"form-group clearfix\">\n" +
    "                            <input type=\"submit\"  value=\"Pay\" class=\"btn-pay\">\n" +
    "                        </div>\n" +
    "                    </form>\n" +
    "                </fieldset>\n" +
    "\n" +
    "            </section>"