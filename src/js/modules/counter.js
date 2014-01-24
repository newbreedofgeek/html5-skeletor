(function(NAMESPACE) {
    "use strict";

    NAMESPACE.welcome = {};

    NAMESPACE.welcome.init = function() {
        // delay animation so it looks nice
        setTimeout(function() {
            $('body').loadie(0.7); // exaple hook of 'loadie' plugin to show progress

            setTimeout(function() {
                $('body').loadie(1); // exaple hook of 'loadie' plugin to show progress
            }, 1000);

        }, 1000);
    };

}(LOCALNAMESPACE));
