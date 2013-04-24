$(function() {
    $("#hobbies a").hover(function(){
        $(".hobbies_detail").html($(this).find("span").text());
        $(".hobbies_detail").show();
    }, function(){
        $(".hobbies_detail").hide();
    });
    $("#contact a").hover(function(){
        $(".contact_detail").html($(this).find("span").text());
        $(".contact_detail").show();
    }, function(){
        $(".contact_detail").hide();
    });
})