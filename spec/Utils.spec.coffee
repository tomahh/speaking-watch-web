describe "Highlight words", ->
  it "highlight a word", ->
    expect(highlightWords("bonjourmonpetit", "mon"))
      .toEqual('bonjour<span class="highlight">mon</span>petit')
  it "highlight two words", ->
    highlighted_string =
      'i<span class="highlight">am</span>a<span class="highlight">jedi</span>'
    expect(highlightWords("iamajedi", "am jedi"))
      .toEqual(highlighted_string)
  it "do not highlight if words are in the wrong order", ->
    highlighted_string =
      'i<span class="highlight">am</span>a<span class="highlight">jedi</span>'
    expect(highlightWords("iamajedi", "jedi am"))
      .not.toEqual(highlighted_string)
