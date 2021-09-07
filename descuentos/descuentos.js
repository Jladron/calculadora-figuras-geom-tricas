function calculadora(price, discount){
    const percentagePriceWithDiscount = 100 - discount;
    const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;

    return priceWithDiscount;
}

function calcularPrecioConDescuento(){

    const inputPrice = document.getElementById("inputPrice");
    const price = Number(inputPrice.value);

    const inputDiscount = document.getElementById("inputDiscount");
    const discount = Number(inputDiscount.value);

    const priceWithDiscount = calculadora(price, discount);

    const result = document.getElementById("result");
    
    result.innerText = "Precio final con descuento: " + priceWithDiscount + "€";
}

function calcularPrecioConCupon(){
    const inputDiscount = document.getElementById("inputCoupon");
    const couponDiscount = Number(inputDiscount.value);

    const inputPrice = document.getElementById("inputPrice");
    const price = Number(inputPrice.value);

    const finalPrice = calculadora(price, couponDiscount);

    const result = document.getElementById("resultCoupon");

    result.innerText = "Precio final con el cupón del " + couponDiscount + "% aplicado: " + finalPrice + "€ ";
}

//codigos promocionales

const promotionalCodes = [
    "DescuentoDeplorable",
    "mierdiDescuento",
    "Descuentazo",
    "RuinaTotal",
];

function calcularPrecioConCodigoPromocional(){
    const inputPromotion = document.getElementById("promotionalCode");
    const promotionCode = inputPromotion.value;

    const inputPrice = document.getElementById("inputPrice");
    const price = Number(inputPrice.value);

    var discount;

    switch(promotionCode){
        case promotionalCodes[0]:
            discount = 1;
            console.log("el descuento es: " + promotionalCodes[0] );
            break;
        case promotionalCodes[1]:
            discount = 10;
            console.log("el descuento es: " + promotionalCodes[0]);
            break;
        case promotionalCodes[2]:
            discount = 30;
            console.log("el descuento es: " + promotionalCodes[0]);
            break;
        case promotionalCodes[3]:
            discount = 90;
            console.log("el descuento es: " + promotionalCodes[0]);
            break;
        default:
            discount = 0;
    }

    console.log(discount);
    const result = document.getElementById("resultPromotionCode");

    if(discount != 0){
        const finalPrice = calculadora(price, discount);
        result.innerText = "hola";
    }else{
        result.innerText = "El cupón insertado no es válido";
    }
    


}
