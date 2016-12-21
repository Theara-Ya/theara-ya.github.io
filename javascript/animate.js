$(document).ready(function() {
    if($(".container").not(".panelClose") && $(".container").not(".panelOpen")) {
            $(".container").addClass("panelClose");
    }
    $(".button").on("click", function() {
        $(".container").toggleClass("panelOpen");
        $(".container").toggleClass("panelClose");
        
        $(".wrapper").children("main").toggleClass("spin");
    });
    
    $("main").on("click", function() {
       if($(this).hasClass("spin")) {
           $(this).removeClass("spin");
           $(".container").toggleClass("panelOpen");
           $(".container").toggleClass("panelClose");
       }
    });
    
    $(".container h3").on("click", function() {
        var li = $(this).next().children();
        
        if(li.eq(0).hasClass("remove")) {
            li.eq(0).removeClass("remove");
            setTimeout(function() {
                li.eq(0).removeClass("mask");
            }, 20);
        }
        else {
            li.eq(0).addClass("mask");
            li.eq(0).one("transitionend", function() {
               li.eq(0).addClass("remove"); 
            });
        }
        if(li.eq(1).hasClass("remove")) {
            li.eq(1).removeClass("remove");
            setTimeout(function() {
                li.eq(1).removeClass("mask");
            }, 220);
        }
        else {
            li.eq(1).addClass("mask");
            li.eq(1).one("transitionend", function() {
               li.eq(1).addClass("remove"); 
            });
        }
        if(li.eq(2).hasClass("remove")) {
            li.eq(2).removeClass("remove");
            setTimeout(function() {
                li.eq(2).removeClass("mask");
            }, 420);
        }
        else {
            li.eq(2).addClass("mask");
            li.eq(2).one("transitionend", function() {
               li.eq(2).addClass("remove"); 
            });
        }
        if(li.eq(3).hasClass("remove")) {
            li.eq(3).removeClass("remove");
            setTimeout(function() {
                li.eq(3).removeClass("mask");
            }, 620);
        }
        else {
            li.eq(3).addClass("mask");
            li.eq(3).one("transitionend", function() {
               li.eq(3).addClass("remove"); 
            });
        }
        if(li.eq(4).hasClass("remove")) {
            li.eq(4).removeClass("remove");
            setTimeout(function() {
                li.eq(4).removeClass("mask");
            }, 820);
        }
        else {
            li.eq(4).addClass("mask");
            li.eq(4).one("transitionend", function() {
               li.eq(4).addClass("remove"); 
            });
        }
        if(li.eq(5).hasClass("remove")) {
            li.eq(5).removeClass("remove");
            setTimeout(function() {
                li.eq(5).removeClass("mask");
            }, 1020);
        }
        else {
            li.eq(5).addClass("mask");
            li.eq(5).one("transitionend", function() {
               li.eq(5).addClass("remove"); 
            });
        }
        if(li.eq(6).hasClass("remove")) {
            li.eq(6).removeClass("remove");
            setTimeout(function() {
                li.eq(6).removeClass("mask");
            }, 1220);
        }
        else {
            li.eq(6).addClass("mask");
            li.eq(6).one("transitionend", function() {
               li.eq(6).addClass("remove"); 
            });
        }
        if(li.eq(7).hasClass("remove")) {
            li.eq(7).removeClass("remove");
            setTimeout(function() {
                li.eq(7).removeClass("mask");
            }, 1420);
        }
        else {
            li.eq(7).addClass("mask");
            li.eq(7).one("transitionend", function() {
               li.eq(7).addClass("remove"); 
            });
        }
    });
});