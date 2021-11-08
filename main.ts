input.onButtonPressed(Button.A, function () {
    Number2 = randint(1, 4)
    if (Number2 == 1) {
        basic.showArrow(ArrowNames.North)
    } else if (Number2 == 2) {
        basic.showArrow(ArrowNames.East)
    } else if (Number2 == 3) {
        basic.showArrow(ArrowNames.South)
    } else if (Number2 == 4) {
        basic.showArrow(ArrowNames.West)
    }
})
let Number2 = 0
basic.clearScreen()
