let lightStatus = 0
let ms = 0
basic.forever(function () {
    if (lightStatus == 0) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
basic.forever(function () {
    if (ms == 0) {
        if (lightStatus == 0) {
            lightStatus = 1
            ms = 30000
            basic.pause(100)
        } else {
            lightStatus = 0
            ms = 20000
            basic.pause(100)
        }
    } else {
        basic.pause(1)
        ms += -1
    }
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
