input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 8; index++) {
        music.playMelody("B E A B C5 G F G ", 500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 40; index++) {
        music.playMelody("C5 E A B C5 G F G ", 100)
    }
})
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
