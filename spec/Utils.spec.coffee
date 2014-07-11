describe "Highlight words", ->
  it "highlight a word", ->
    expect(highlightWords("bonjourmonpetit", "mon"))
      .toEqual('bonjour<span class="highlight">mon</span>petit')
  it "highlight two words", ->
    expect(highlightWords("iamajedi", "am jedi"))
      .toEqual('i<span class="highlight">am</span>a<span class="highlight">jedi</span>')
  it "do not highlight if words are in the wrong order", ->
    expect(highlightWords("iamajedi", "jedi am"))
      .not.toEqual('i<span class="highlight">am</span>a<span class="highlight">jedi</span>')
