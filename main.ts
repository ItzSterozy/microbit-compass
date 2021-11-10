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
input.onButtonPressed(Button.B, function () {
    True_or_False = randint(1, 2)
    if (True_or_False == 1) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # #
            . . . . #
            # # # # #
            `)
    } else if (True_or_False == 2) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
    }
})
let True_or_False = 0
let Number2 = 0
basic.clearScreen()
