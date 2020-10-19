gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Up, function () {
    basic.showLeds(`
        . # . . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
gamePad.onEvent(GamerBitPin.P14, GamerBitEvent.Down, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
gamePad.onEvent(GamerBitPin.P15, GamerBitEvent.Down, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Down, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Up, function () {
    gamePad.vibratorMotor(gamePad.Vibrator.V0)
    gamePad.led(gamePad.Led.OFF)
})
gamePad.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
gamePad.onEvent(GamerBitPin.P1, GamerBitEvent.Down, function () {
    gamePad.vibratorMotor(gamePad.Vibrator.V1)
    gamePad.led(gamePad.Led.ON)
})
gamePad.onEvent(GamerBitPin.P13, GamerBitEvent.Up, function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
radio.sendNumber(1)
basic.forever(function () {
    if (gamePad.keyState(GamerBitPin.P1)) {
        gamePad.vibratorMotorSpeed(173)
    } else {
        gamePad.vibratorMotorSpeed(0)
    }
})
