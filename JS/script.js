$(function(){
    let normalHeight = $(".ball").height();
    let normalWidth = $(".ball").width();
    let normalShadow = $(".ball").css("box-shadow");
    let normalMenuColor = $(".menu").css("background-color");
    $(".ball").mouseenter(function(){
        $(".ball").animate(
            {height:normalHeight+65, width:normalWidth+65},
            100,
            function(){
                $(".ball").css("box-shadow", "0vmin 0vmin 1.345vmin 0.9vmin #05313f");
                $(".menu").css("background-color", "#438167");
                $(".ball").on("click",function(){
                    window.location.href = "https://xtoclown.github.io/LR7frontend/";
                })
            }
        );
    })
    $(".ball").mouseleave(function(){
        $(".ball").animate(
            {opacity: 1, height:normalHeight, width:normalWidth},
            100,
            function(){
                $(".ball").css("box-shadow", normalShadow);
                $(".menu").css("background-color", normalMenuColor);
            }
        );
    })
})
$(function(){
    let normalHeight = $(".cards").height();
    let normalWidth = $(".cards").width();
    let normalShadow = $(".cards").css("box-shadow");
    let normalMenuColor = $(".menu").css("background-color");
    $(".cards").mouseenter(function(){
        $(".cards").animate(
            {height:normalHeight+65, width:normalWidth+65},
            100,
            function(){
                $(".cards").css("box-shadow", "0vmin 0vmin 1.345vmin 0.9vmin #4f04b1");
                $(".menu").css("background-color", "#856aa8");
                $(".cards").on("click",function(){
                    window.location.href = "https://xtoclown.github.io/lr9/";
                })
            }
        );
    })
    $(".cards").mouseleave(function(){
        $(".cards").animate(
            {opacity: 1, height:normalHeight, width:normalWidth},
            100,
            function(){
                $(".cards").css("box-shadow", normalShadow);
                $(".menu").css("background-color", normalMenuColor);
            }
        );
    })
})
$(function(){
    let normalHeight = $(".count").height();
    let normalWidth = $(".count").width();
    let normalShadow = $(".count").css("box-shadow");
    let normalMenuColor = $(".menu").css("background-color");
    $(".count").mouseenter(function(){
        $(".count").animate(
            {height:normalHeight+65, width:normalWidth+65},
            100,
            function(){
                $(".count").css("box-shadow", "0vmin 0vmin 1.345vmin 0.9vmin #c01003");
                $(".menu").css("background-color", "#b95b54");
                $(".count").on("click",function(){
                    window.location.href = "https://xtoclown.github.io/lr8/";
                })
            }
        );
    })
    $(".count").mouseleave(function(){
        $(".count").animate(
            {opacity: 1, height:normalHeight, width:normalWidth},
            100,
            function(){
                $(".count").css("box-shadow", normalShadow);
                $(".menu").css("background-color", normalMenuColor);
            }
        );
    })
})
$(function(){
    let normalHeight = $(".casino").height();
    let normalWidth = $(".casino").width();
    let normalShadow = $(".casino").css("box-shadow");
    let normalMenuColor = $(".menu").css("background-color");
    $(".casino").mouseenter(function(){
        $(".casino").animate(
            {height:normalHeight+65, width:normalWidth+65},
            100,
            function(){
                $(".casino").css("box-shadow", "0vmin 0vmin 1.345vmin 0.9vmin #ff6600");
                $(".menu").css("background-color", "#f5cd78");
                $(".casino").on("click",function(){
                    window.location.href = "https://xtoclown.github.io/lr10/";
                })
            }
        );
    })
    $(".casino").mouseleave(function(){
        $(".casino").animate(
            {opacity: 1, height:normalHeight, width:normalWidth},
            100,
            function(){
                $(".casino").css("box-shadow", normalShadow);
                $(".menu").css("background-color", normalMenuColor);
            }
        );
    })
})