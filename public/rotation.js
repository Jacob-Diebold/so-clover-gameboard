let rotation = 0

function rotateBoard(direction) {
    if (direction == "left") {
        rotation = rotation + 90
        if (rotation == 360 || rotation == -360) {
            rotation = 0
        }
        $(".game-board").css("transform","rotate("+ rotation + "deg)")

    } else if (direction == "right") {
        rotation = rotation - 90
        if (rotation == 360 || rotation == -360) {
            rotation = 0
        }
        $(".game-board").css("transform","rotate(" + rotation + "deg)")
    }
    if (rotation == 0) {
        $("#turn-bot-left-tleft").css("visibility","visible")
        $("#turn-bot-left-tright").css("visibility","hidden")
        $("#turn-bot-right-tleft").css("visibility","hidden")
        $("#turn-bot-right-tright").css("visibility","visible")
        $("#turn-top-left-tleft").css("visibility","hidden")
        $("#turn-top-left-tright").css("visibility","hidden")
        $("#turn-top-right-tleft").css("visibility","hidden")
        $("#turn-top-right-tright").css("visibility","hidden")
        let horizontal0 = [".game-board #c1-1", ".game-board #c2-1", ".game-board #c1-3", ".game-board #c2-3", ".game-board #c3-1", ".game-board #c4-1", ".game-board #c3-3", ".game-board #c4-3",]
        horizontal0.forEach(id => {
            $(id).css("transform", "rotate(0deg) translate(0,25%)")
        });
        $(".game-board .turn-card").css("transform", "rotate(0deg)")

        // $(".left-word").css("transform" , "rotate(-90deg) translate(0,25%)")
        // $(".right-word").css("transform" , "rotate(90deg) translate(0,25%)")
    } else if (rotation == 90 || rotation == -270) {
        $("#turn-bot-left-tleft").css("visibility","hidden")
        $("#turn-bot-left-tright").css("visibility","hidden")
        $("#turn-bot-right-tleft").css("visibility","visible")
        $("#turn-bot-right-tright").css("visibility","hidden")
        $("#turn-top-left-tleft").css("visibility","hidden")
        $("#turn-top-left-tright").css("visibility","hidden")
        $("#turn-top-right-tleft").css("visibility","hidden")
        $("#turn-top-right-tright").css("visibility","visible")

        let horizontal90 = [".game-board #c2-2", ".game-board #c4-2", ".game-board #c3-2", ".game-board #c1-2", ".game-board #c4-4" ,".game-board #c2-4" ,".game-board #c3-4" ,".game-board #c1-4"]
        horizontal90.forEach(id => {
            $(id).css("transform" , "rotate(-90deg) translate(0,25%)")
        });
        $(".game-board .turn-card").css("transform", "rotate(-90deg)")


    } else if (Math.abs(rotation) == 180) {
        $("#turn-bot-left-tleft").css("visibility","hidden")
        $("#turn-bot-left-tright").css("visibility","hidden")
        $("#turn-bot-right-tleft").css("visibility","hidden")
        $("#turn-bot-right-tright").css("visibility","hidden")
        $("#turn-top-left-tleft").css("visibility","hidden")
        $("#turn-top-left-tright").css("visibility","visible")
        $("#turn-top-right-tleft").css("visibility","visible")
        $("#turn-top-right-tright").css("visibility","hidden")

        let horizontal180 = [".game-board #c4-3", ".game-board #c3-3", ".game-board #c4-1", ".game-board #c3-1", ".game-board #c2-3", ".game-board #c1-3", ".game-board #c2-3", ".game-board #c1-3", ".game-board #c2-1", ".game-board #c1-1", ]
        horizontal180.forEach(id => {
            $(id).css("transform" , "rotate(180deg) translate(0,25%)") 
        });
        $(".game-board .turn-card").css("transform", "rotate(180deg)")

    } else if (rotation == -90 || rotation == 270) {
        $("#turn-bot-left-tleft").css("visibility","hidden")
        $("#turn-bot-left-tright").css("visibility","visible")
        $("#turn-bot-right-tleft").css("visibility","hidden")
        $("#turn-bot-right-tright").css("visibility","hidden")
        $("#turn-top-left-tleft").css("visibility","visible")
        $("#turn-top-left-tright").css("visibility","hidden")
        $("#turn-top-right-tleft").css("visibility","hidden")
        $("#turn-top-right-tright").css("visibility","hidden")
        
        let horizontal270 = [".game-board #c2-2", ".game-board #c4-2", ".game-board #c2-4", ".game-board #c4-4", ".game-board #c1-2", ".game-board #c3-2", ".game-board #c1-4", ".game-board #c3-4"]
        horizontal270.forEach(id => {
            $(id).css("transform" , "rotate(90deg) translate(0,25%)")
        });
        $(".game-board .turn-card").css("transform", "rotate(90deg)")

    }
    
}
function rotateLeft() {
        return rotateBoard("left")
}

function rotateRight() {
        return rotateBoard("right")
}
$(".turn-left").on("click", rotateLeft)
$(".turn-right").on("click", rotateRight)