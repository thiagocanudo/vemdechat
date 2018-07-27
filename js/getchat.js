$(document).ready(function() {
  //$('head').append('<link rel="stylesheet" href="http://www.organizadasbrasil.com/apagar/getchat.min.css" type="text/css"/>');

  /* SERVICES */
  $("#fb").change(function() {
      if(this.checked) {
        $('#fb-url').slideDown();
        $('#getIcon-fm').show();
        $('#line-fb').removeClass('hide-line');
      }else{
        $('#fb-url').slideUp();
        $('#getIcon-fm').hide();
        $('#line-fb').addClass('hide-line');
      }
  });
  $("#wa").change(function() {
      if(this.checked) {
        $('#wa-url').slideDown();
        $('#getIcon-wa').show();
        $('#line-wa').removeClass('hide-line');
      }else{
        $('#wa-url').slideUp();
        $('#getIcon-wa').hide();
        $('#line-wa').addClass('hide-line');
      }
  });
  $("#skype").change(function() {
      if(this.checked) {
        $('#skype-url').slideDown();
        $('#getIcon-skype').show();
        $('#line-skype').removeClass('hide-line');        
      }else{
        $('#skype-url').slideUp();
        $('#getIcon-skype').hide();
        $('#line-skype').addClass('hide-line');
      }
  });
  var buttonSelects = $('.buttonSelects button');
  buttonSelects.click(function(){
      $(this).addClass('active').siblings().removeClass('active');
  });
   
  var btWhiteContainer = $('#white-container');
  var btGrayContainer = $('#gray-container');
  var btBlackContainer = $('#black-container');
  var btTransparentContainer = $('#transparent-container');
  
  btWhiteContainer.click(function(){
    $('#getChatBody').attr('class','white');
    $('#body-color').text('white');
  }); 
  btGrayContainer.click(function(){
    $('#getChatBody').attr('class','gray');
    $('#body-color').text('gray');
  }); 
  btBlackContainer.click(function(){
    $('#getChatBody').attr('class','black');
    $('#body-color').text('black');
  }); 
  btTransparentContainer.click(function(){
    $('#getChatBody').attr('class','transparent');
    $('#body-color').text('transparent');
  });  
  
  /* STYLES */ 
  var btDarkStyle = $('#dark-style');
  var btFlatStyle = $('#flat-style');
  var btModernStyle = $('#modern-style');
  var btRoundedStyle = $('#rounded-style');
  var btLiteStyle = $('#lite-style');
  
  var getIconSkype = $('#getIcon-skype');
  var getIconWa = $('#getIcon-wa');
  var getIconFm = $('#getIcon-fm');
    
  btRoundedStyle.click(function(){
    getIconSkype.attr('class','getIcon-skype-rounded');
    getIconWa.attr('class','getIcon-wa-rounded');
    getIconFm.attr('class','getIcon-fm-rounded');
    $('#getIcon-skype-class').text('getIcon-skype-rounded');
    $('#getIcon-fm-class').text('getIcon-fm-rounded');
    $('#getIcon-wa-class').text('getIcon-wa-rounded');
  });
  
  btLiteStyle.click(function(){
    getIconSkype.attr('class','getIcon-skype-lite');
    getIconWa.attr('class','getIcon-wa-lite');
    getIconFm.attr('class','getIcon-fm-lite');
    $('#getIcon-skype-class').text('getIcon-skype-lite');
    $('#getIcon-fm-class').text('getIcon-fm-lite');
    $('#getIcon-wa-class').text('getIcon-wa-lite');
  });
  
  btDarkStyle.click(function(){
    getIconSkype.attr('class','getIcon-skype-dark');
    getIconWa.attr('class','getIcon-wa-dark');
    getIconFm.attr('class','getIcon-fm-dark');
    $('#getIcon-skype-class').text('getIcon-skype-dark');
    $('#getIcon-fm-class').text('getIcon-fm-dark');
    $('#getIcon-wa-class').text('getIcon-wa-dark');
  });

  btFlatStyle.click(function(){
    getIconSkype.attr('class','getIcon-skype-flat');
    getIconWa.attr('class','getIcon-wa-flat');
    getIconFm.attr('class','getIcon-fm-flat');
    $('#getIcon-skype-class').text('getIcon-skype-flat');
    $('#getIcon-fm-class').text('getIcon-fm-flat');
    $('#getIcon-wa-class').text('getIcon-wa-flat');
  });
  
  btModernStyle.click(function(){
    getIconSkype.attr('class','getIcon-skype-modern');
    getIconWa.attr('class','getIcon-wa-modern');
    getIconFm.attr('class','getIcon-fm-modern');
    $('#getIcon-skype-class').text('getIcon-skype-modern');
    $('#getIcon-fm-class').text('getIcon-fm-modern');
    $('#getIcon-wa-class').text('getIcon-wa-modern');
  });
  
  $("#messenger-input").keyup(function(){
    $("#facebook-href").text($("#messenger-input").val());
    $('#getIcon-fm').attr('href','https://m.me/' + $("#messenger-input").val());
  });
  
  $("#whatsapp-input").keyup(function(){
    $("#whatsapp-href").text($("#whatsapp-input").val());
    $('#getIcon-wa').attr('href','https://api.whatsapp.com/send?phone=' + $("#whatsapp-input").val());
  });
  
  $("#skype-input").keyup(function(){
    $("#skype-href").text($("#skype-input").val());
    $('#getIcon-skype').attr('href','callto://' + $("#skype-input").val());
  });
  
  /* Gerado */
  var $btnChat = $("#btnGetChat");
  var $chatBody = $("#getChatBody");
  $("#sandbox").on("click", function(e) {
    $chatBody.slideUp();
    $btnChat.removeClass("closeGetChat");
  });
  $chatBody.on("click", function(e) {
    e.stopPropagation();
  });
  $btnChat.on("click", function(e) {
    $(this).toggleClass("closeGetChat");
    $chatBody.stop().slideToggle();
    e.stopPropagation();
  });
});
