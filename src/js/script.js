Modernizr.load([
    {
        both: ["js/modules/_init.js", "js/modules/counter.js"],
        complete: function(){
            CBATOOLS.init();
        }
    }
]);