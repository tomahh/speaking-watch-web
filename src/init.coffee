update = ->
  string =  "ITLISASTIME<br />" +
    "ACQUARTERDC<br />" +
    "TWENTYFIVEX<br />" +
    "HALFBTENFTO<br />" +
    "PASTERUNINE<br />" +
    "ONESIXTHREE<br />" +
    "FOURFIVETWO<br />" +
    "EIGHTELEVEN<br />" +
    "SEVENTWELVE<br />" +
    "TENSEOCLOCK<br />"

  string = highlightWords(string, "IT IS #{new SpeakingWatch().spoken(new Date)}")
  $("#watch").html(string)
  window.setTimeout(update, 10000)

$(-> update())
