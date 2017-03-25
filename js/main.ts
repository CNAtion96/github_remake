$(".linkOne").click(function(){
    $(".nav-link").removeClass("active");
    $(".linkOne").addClass("active");
})

$(".linkTwo").click(function(){
    $(".nav-link").removeClass("active");
    $(".linkTwo").addClass("active");
    $.ajax({ url: "https://api.github.com/users/CNAtion96/repos",
        success: fuction(response){
            console.log(response);
        }
    })
})

$(".linkThree").click(function(){
    $(".nav-link").removeClass("active");
    $(".linkThree").addClass("active");
})