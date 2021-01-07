// var myCurrencyConverter = myCurrencyConverter || (function () {
//
//     let euroDollar = (function () {
//         let exchangeRate = 1.2;
//
//         return {
//             convert: function (euro) {
//                 return euro * exchangeRate;
//             }
//         }
//     })();
//
//     return {
//         convert: function (euro) {
//             return euroDollar.convert(euro);
//         },
//         print: function (euro) {
//             console.log(`${euro}€ => convert into dollar => ${myCurrencyConverter.convert(euro)}$`);
//         }
//     }
// })();


// or

var myCurrencyConverter = myCurrencyConverter || (function () {

    let euroDollar = (function () {
        let exchangeRate = 1.2;

        return {
            convert: function (euro) {
                return euro * exchangeRate;
            }
        }
    })();

    function printIntoDollar(euro) {
        console.log(`${euro}€ => convert into dollar => ${convertIntoDollar(euro)}$`);
    }

    function convertIntoDollar(euro) {
        return euroDollar.convert(euro);
    }

    return {
        convert: convertIntoDollar,
        print: printIntoDollar
    }

})();
