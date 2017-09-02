// ==UserScript==
// @name        emoticonsForComments
// @namespace   mediawiki-gadgets
// @description to add emoticons from TieBa quickly
// @author      cttxt
// @include     mediawiki sites with Duoshuo Comment
// @run-at      jQuery
// @version     0.1
// @license     MIT/Expat License
// ==/UserScript==

$('head').append('<style>.emos{width: 1.5em; pointer-events: none;}</style>');
$('head').append('<style>.emolist{overflow-x: auto; position: absolute; left: 20px; bottom: 20px; width: 180px; max-height: 75px; background: #fff; box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2); border-radius: 3px; transition: all 0.3s ease-out;}</style>');
$('head').append('<style>.flowthread-btn.plus{display: inline-block; width: auto; padding: 2px; font-family: inherit;}</style>');
$('head').append('<style>.flowthread-btn-emoticon{font-family: inherit;}</style>');
function addToTextArea(n) {
    var text= $(".comment-body textarea").val();
    text+='<img clss="emos" style="width: 1.5em; pointer-events: none;" src="https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK/tb/editor/images/client/image_emoticon' + n + '.png" />';
    $(".comment-body textarea").val(text);
}
function emoticons() {
    for (i=1; i<50; ++i) {
        $(".emolist").prepend('<button class="flowthread-btn plus" id="25" onclick="addToTextArea(' + i + ')"><img class="emos" src="https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK/tb/editor/images/client/image_emoticon' + i + '.png" /></button>');
    }
}
$(".comment-toolbar").append('<button class="flowthread-btn flowthread-btn-emoticon" title="表情">E</button>');
$(".flowthread-btn-emoticon").click(function(){
    $(this).toggleClass("on");
    if ($(this).hasClass("on")) {
        $(this).after('<div class="emolist"></div>');
        emoticons();
    } else {
        $(".emolist").hide(300);
    }
});
