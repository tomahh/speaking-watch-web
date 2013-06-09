window.highlightWords = (characters, words) ->
  tmp = ""
  for word in words.split(" ")
    highlighted_word = "<span class=\"highlight\">#{word}</span>"
    characters = characters.replace(word, highlighted_word)
    tmp += characters.slice(0, characters.indexOf(highlighted_word) + highlighted_word.length)
    characters = characters.slice(characters.indexOf(highlighted_word) + highlighted_word.length)
  tmp += characters
