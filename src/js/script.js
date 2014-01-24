yepnope({
    both: ["js/modules/_init.js", "js/modules/welcome.js", "js/modules/anotherModule.js"],
    complete: function() {
        LOCALNAMESPACE.init();
    }
});