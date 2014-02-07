/* jshint ignore:start */
var LOCALNAMESPACE = LOCALNAMESPACE || {};
LOCALNAMESPACE.DEBUG = false;
/* jshint ignore:end */

LOCALNAMESPACE.init = function () {
    "use strict";

    var body = document.body,
        controller = body.getAttribute('data-controller'),
        action = body.getAttribute('data-action');

    LOCALNAMESPACE.exec('common');
    LOCALNAMESPACE.exec(controller);
    LOCALNAMESPACE.exec(controller, action);
};

/* Initialisation methods for the HTML Templates */
var LOCALNAMESPACE_INIT = {
    common: {
        init: function() {
            "use strict";
        }
    },
    home: {
        welcome: function() {
            "use strict";

            LOCALNAMESPACE.welcome.init();
            LOCALNAMESPACE.anotherModule.log();

            // Start the 'loadie' plugin now to show around 50% has completed (just an ex example)
            $('body').loadie(0.5);
        }
    }
};

/* Standard Garber-Irish Implementation  */
LOCALNAMESPACE.exec = function (controller, action) {
    "use strict";

    var ns = LOCALNAMESPACE_INIT,
        actionOveride = (action === undefined) ? 'init' : action;

    if (controller !== '' && ns[controller] && typeof ns[controller][actionOveride] === 'function') {
        ns[controller][actionOveride]();
    }
};