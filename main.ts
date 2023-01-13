input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Skull)
music.playMelody("C5 F A E B G A C5 ", 292)
music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.ForeverInBackground)
