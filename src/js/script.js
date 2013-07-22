Modernizr.load([
    {
        both: ["js/modules/_init.js", "js/modules/counter.js", "js/modules/anotherModule.js"],
        complete: function(){
            CBATOOLS.init();
        }
    }
]);