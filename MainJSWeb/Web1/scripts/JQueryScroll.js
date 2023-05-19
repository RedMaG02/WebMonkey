$("html, body").animate({
    scrollTop: $("div.content").offset().top
}, 10000);

var offset = $("div.content").offset();
console.log(offset);

var position = $("div.content").position();
console.log(position);