console.log('\'Allo \'Allo!');

$(function() {
   var n = Math.floor((Math.random() * 9) + 1);
   $('body').css("background", 
                 "rgba(0, 0, 0, 0) url(/images/bg0"+ n +".gif) no-repeat fixed 50% 50% / cover padding-box border-box")
});
