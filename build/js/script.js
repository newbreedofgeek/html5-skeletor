/*! html5-skeletor 2014-02-07 */
var LOCALNAMESPACE=LOCALNAMESPACE||{};LOCALNAMESPACE.DEBUG=!1,LOCALNAMESPACE.init=function(){"use strict";var body=document.body,controller=body.getAttribute("data-controller"),action=body.getAttribute("data-action");LOCALNAMESPACE.exec("common"),LOCALNAMESPACE.exec(controller),LOCALNAMESPACE.exec(controller,action)};var LOCALNAMESPACE_INIT={common:{init:function(){"use strict"}},home:{welcome:function(){"use strict";LOCALNAMESPACE.welcome.init(),LOCALNAMESPACE.anotherModule.log(),$("body").loadie(.5)}}};LOCALNAMESPACE.exec=function(controller,action){"use strict";var ns=LOCALNAMESPACE_INIT,actionOveride=void 0===action?"init":action;""!==controller&&ns[controller]&&"function"==typeof ns[controller][actionOveride]&&ns[controller][actionOveride]()},$(function(){"use strict";LOCALNAMESPACE.init()}),function(NAMESPACE){"use strict";NAMESPACE.anotherModule={log:function(){console.log("I'm another Module")}}}(LOCALNAMESPACE),function(NAMESPACE){"use strict";NAMESPACE.welcome={},NAMESPACE.welcome.init=function(){setTimeout(function(){$("body").loadie(.7),setTimeout(function(){$("body").loadie(1),$(".title-box").animate({opacity:1,top:-1430},1e3)},1e3)},1e3)}}(LOCALNAMESPACE);