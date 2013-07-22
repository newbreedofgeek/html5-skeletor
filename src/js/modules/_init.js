var CBATOOLS = CBATOOLS || {};
CBATOOLS.DEBUG = false;

/* Standard Garber-Irish Implementation  */
CBATOOLS.exec = function (controller, action) {
    var ns = CBATOOLS_INIT,
        action = (action === undefined) ? 'init' : action;

    if (controller !== '' && ns[controller] && typeof ns[controller][action] === 'function') {
        ns[controller][action]();
    }
};

CBATOOLS.init = function () {
    var body = document.body,
        controller = body.getAttribute('data-controller'),
        action = body.getAttribute('data-action');

    CBATOOLS.exec('common');
    CBATOOLS.exec(controller);
    CBATOOLS.exec(controller, action);
};

/* Initialisation methods for the HTML Templates */
var CBATOOLS_INIT = {
    common: {
        init: function() {

        }
    },

    tools: {
        counter: function() {
            CBATOOLS.init();
        }
    }
};
