let lightStatus = 0
basic.forever(function () {
    lightStatus = 0
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(5000)
    lightStatus = 1
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(30000)
})
basic.forever(function () {
    if (lightStatus == 1) {
        basic.showString("Run!")
        for (let index = 0; index < 4; index++) {
            music.playTone(262, music.beat(BeatFraction.Eighth))
            basic.pause(100)
        }
        music.playTone(247, music.beat(BeatFraction.Eighth))
    } else {
        basic.showString("Stop")
        music.playTone(220, music.beat(BeatFraction.Quarter))
        basic.pause(500)
    }
})
