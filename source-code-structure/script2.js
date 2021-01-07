// let exchangeRate = 0.91;
//
// let convert = function (pound) {
//     return pound * exchangeRate;
// }

// Problem: const or let can only be defined once

var exchangeRate = 0.91;

var convert = function (dollar) {
    return dollar / this.exchangeRate;
}

// Problem: Previous definitions of exchangeRate and convert are hereby overwritten
