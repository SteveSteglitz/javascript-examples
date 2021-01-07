var moduleB = moduleB || (function (moduleA) {

    function printModuleB() {
        console.log('Hello Module B');
        moduleA.print();
    }

    return {
        print: printModuleB
    }

})(moduleA);
