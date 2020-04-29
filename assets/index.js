$(document).ready(function () {
//   	$('header').remove();
    $('footer').remove();

    let leafContainer = $(".leaf-container");

    $("#retailer").hover(function (e) { 
        leafContainer.animate({opacity:"0.7", speed: 300});
      	leafContainer.animate({opacity:"1", speed: 100});
        leafContainer.css("background-image", "url('https://cdn.shopify.com/s/files/1/0098/7482/t/8/assets/leaves-left-hover.png')");
    });
    $("#personal").hover(function (e) { 
        leafContainer.animate({opacity:"0.7", speed: 300});
        leafContainer.animate({opacity:"1", speed: 100});
        leafContainer.css("background-image", "url('https://cdn.shopify.com/s/files/1/0098/7482/t/8/assets/leaves-right-hover.png')");
    });

    const mouseLeave = () => {
        leafContainer.css("background-image", "url('https://cdn.shopify.com/s/files/1/0098/7482/t/8/assets/leaves.png')");
    }

    $("#retailer").mouseleave(mouseLeave);
    $("#personal").mouseleave(mouseLeave);
});
