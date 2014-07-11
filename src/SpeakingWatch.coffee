window.SpeakingWatch = class SpeakingWatch
  roundMinutes: (minutes) ->
    digit = ~~(minutes / 5)
    digit = 12 - digit if minutes > 30
    digit

  hour: (date = new Date()) ->
    hours = ["TWELVE", "ONE", "TWO", "THREE", "FOUR", "FIVE",
        "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "ELEVEN"]
    digit = date.getHours()
    digit += 1 if date.getMinutes() >= 35
    hours[digit % 12]

  minutes: (date = new Date()) ->
    minutes = ["", "FIVE", "TEN", "QUARTER", "TWENTY", "TWENTY FIVE", "HALF"]
    digit = this.roundMinutes(date.getMinutes())
    minutes[digit]

  dial_half: (date = new Date()) ->
    minutes = this.roundMinutes(date.getMinutes())
    if date.getMinutes() < 35
      "PAST"
    else
      "TO"

  oclock: (date = new Date()) ->
    if this.roundMinutes(date.getMinutes()) == 0 then "OCLOCK" else ""

  spoken: (date = new Date()) ->
    ret_string = if not this.oclock(date)
      "#{this.minutes(date)} #{this.dial_half(date)} "
    else
      ""
    ret_string += "#{this.hour(date)}"
    ret_string += " #{this.oclock(date)}" if this.oclock(date)
    ret_string
