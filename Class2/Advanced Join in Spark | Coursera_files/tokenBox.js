!function(e){var n=function(e,t,a){var n=function template(i){var n=[],o={},t,a=i||{};return function(a){n.push('<div class="rc-TokenBox well"><h5 class="headline-2-text">How to submit</h5><p>Copy the token below and run the submission script included in the assignment download.\nWhen prompted, use your email address <b>'+e.escape(null==(t=a)?"":t)+'</b>.\n</p><div class="token-generator bt3-text-center"><div data-state="getting generating"><p>Loading token...</p></div><div data-state="displaying"><h5 data-js="secret" class="headline-2-text"></h5><p><a data-js="generate-token" href="#">Generate new token</a></p></div><div data-state="error"><p>There was an error getting your token:&nbsp;<a data-js="get-token" href="#">Click here to try to get it again</a></p></div></div><p>Your submission token is unique to you and should not be shared with anyone.\nYou may submit as many times as you like.</p></div>')}.call(this,"userEmail"in a?a.userEmail:"undefined"!=typeof userEmail?userEmail:void 0),n.join("")};return n};"function"==typeof define&&define.amd?define(["js/vendor/jade"],function(e){var t,a;return n(e,t,a)}):e.jade.templates["bundles.programming.components.tokenBox.views.tokenBox"]=n(e.jade.helpers)}(window);