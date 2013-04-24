$(function() {
    $("#hobbies a").hover(function() {
        $(".hobbies_detail").html($(this).find("span").text());
        $(".hobbies_detail").show();
    }, function() {
        $(".hobbies_detail").hide();
    });
    $("#contact a").hover(function() {
        $(".contact_detail").html($(this).find("span").text());
        $(".contact_detail").show();
    }, function() {
        $(".contact_detail").hide();
    });
    $.extend({
        createMail: function(tld, domain, name) {
            var mail = "";
            mail += 'ma' + 'il' + 'to:' + name;
            mail += '@' + domain + '.' + tld;
            return mail;
        }
    });
    $("#email").attr("href", $.createMail("com", "gmail", "tjy430"));
});