var moduleA = moduleA || (function () {

    function printModuleA() {
        console.log('Hello Module A');
    }

    return {
        print: printModuleA
    }

})();
