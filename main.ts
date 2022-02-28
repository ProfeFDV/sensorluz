basic.showIcon(IconNames.Happy)
basic.forever(function () {
    led.setBrightness(255 - pins.analogReadPin(AnalogPin.P0) / 300 * 255)
})
