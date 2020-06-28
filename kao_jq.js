//花王JQデータ
console.log('Hellow World');


$(function(){
  var photo = $('#main_photo');
  //画像をフェードイン
  function open(){
    photo.fadeIn(2000,'easeInOutExpo',function(){ setTimeout(close,3000); });
  };

  //フェードアウト
  function close(){
    photo.fadeOut(1500,'easeInExpo',function(){
    setTimeout(open,1500);});
  };

  //くりかえし
  open();
});
