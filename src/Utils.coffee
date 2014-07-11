window.highlightWords = (characters, words) ->
  tmp = ""
  for word in words.split(" ")
    highlighted_word = "<span class=\"highlight\">#{word}</span>"
    characters = characters.replace(word, highlighted_word)
    highlighted_word_index = characters.indexOf(highlighted_word)
    tmp += characters.slice(
      0, highlighted_word_index + highlighted_word.length
    )
    characters = characters.slice(
      highlighted_word_index + highlighted_word.length
    )
  tmp += characters
