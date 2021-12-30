$(function(){

    $("#dataForm").submit(function(event){
        event.preventDefault();
       
        $("#tfecha").append($("[name*='dataThree']").val());
        $("#thorario").append($("[name*='dataFour']").val());
        $("#tnombre").append($("[name*='dataOne']").val());

    
        });

























});    