// ==UserScript==
// @name        showHide
// @namespace   mediawiki-gadgets
// @description to show info hidden on sites
// @author      cttxt
// @include     all mediawiki sites
// @run-at      jQuery
// @version     0.1
// @license     MIT/Expat License
// ==/UserScript==

$("#mw-content-text div").each(function() {
    if ($(this).css("display") == "none") {
        $(this).css({"display": "inline-block", "background": "rgba(255, 255, 0, .3)"});
    } else if ($(this).css("visibility") == "hidden") {
        $(this).css({"visibility": "visible", "background": "rgba(255, 255, 0, .3)"});
    }
});
