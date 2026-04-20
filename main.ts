input.onButtonPressed(Button.A, function () {
    inn1 = 1
})
input.onButtonPressed(Button.B, function () {
    inn2 = 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    inn1 = 0
    inn2 = 0
})
let inn2 = 0
let inn1 = 0
inn1 = 0
inn2 = 0
basic.forever(function () {
    if (inn1 && inn2) {
        basic.showString("ON")
    } else {
        basic.showString("OFF")
    }
})
