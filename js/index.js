document.getElementById('title').addEventListener('click', function () {
    console.log('Title was clicked');
})

$("#showAll").click(function() {
    $(this).toggleClass("active");
    $(".chairYoga").toggleClass("show");
    $(".yoga").toggleClass("show");
});

$("#onlyChair").click(function() {
    $(this).toggleClass("active");
    $(".yoga").toggleClass("hide");
});

$("#onlyYoga").click(function() {
    $(this).toggleClass("active");
    $(".chairYoga").toggleClass("hide");
});