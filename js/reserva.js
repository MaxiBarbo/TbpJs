$(function(){

    $("[name*='dataOne']").click(function() {
        $("[name*='labelOne']").fadeOut(3000);

    });

    $("[name*='dataTwo']").click(function() {
        $("[name*='labelTwo']").fadeOut(3000);

    });

    $("[name*='dataThree']").click(function() {
        $("[name*='labelThree']").fadeOut(3000);

    });

    $("[name*='dataFour']").click(function() {
        $("[name*='labelFour']").fadeOut(3000);

    });

    $("[name*='clear']").click(function() {

        $("[name*='labelOne']").show(1000);
        $("[name*='labelTwo']").show(1500);
        $("[name*='labelThree']").show(2000);
        $("[name*='labelFour']").show(2500);
        
    });
        
  



       























});    