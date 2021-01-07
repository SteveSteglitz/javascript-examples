var myConverter = myConverter || {
    euroDollar: {
        exchangeRate: 1.2,
        convert: function (euro) {
            return euro * this.exchangeRate;
        }
    }
}
