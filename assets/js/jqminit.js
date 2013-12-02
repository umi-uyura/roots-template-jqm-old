/**
 * jQuery Mobile configuration
 */
$(document).on("mobileinit", function() {
  //
  // jQuery Settings
  // 

  $.support.cors = true;

  // Ajax communication setup
  $.ajaxSetup({
    timeout: 30000,
    cache: false
  });
  
  //
  // jQuery Mobile Settings
  // 
  
  // messages
  $.mobile.loadingMessage = "読込み中...";
  $.mobile.pageLoadErrorMessage = "ページの取得に失敗しました";
  
  // labels
  $.mobile.page.prototype.options.backBtnText = "戻る";
  $.mobile.dialog.prototype.options.closeBtnText = "閉じる";
  $.mobile.selectmenu.prototype.options.closeText= "閉じる";
});
