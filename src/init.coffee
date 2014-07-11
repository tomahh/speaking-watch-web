update = ->
  content =  "ITLISASTIME<br />" +
    "ACQUARTERDC<br />" +
    "TWENTYFIVEX<br />" +
    "HALFBTENFTO<br />" +
    "PASTERUNINE<br />" +
    "ONESIXTHREE<br />" +
    "FOURFIVETWO<br />" +
    "EIGHTELEVEN<br />" +
    "SEVENTWELVE<br />" +
    "TENSEOCLOCK<br />"

  time = "IT IS #{new SpeakingWatch().spoken(new Date)}"
  content = highlightWords(content, time)
  $("#watch").html(content)
  window.setTimeout(update, 10000)

$(-> update())
