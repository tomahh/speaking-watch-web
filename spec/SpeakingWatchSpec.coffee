describe "Speaking Watch", ->
  watch = null

  beforeEach ->
    watch = new SpeakingWatch()

  describe "hour method", ->
    it "return the hour as string", ->
      expect(watch.hour(new Date("January 1, 1970 1:00"))).toEqual("ONE")
    it "adds one hour if in 2nd half of the dial", ->
      expect(watch.hour(new Date("January 1, 1970 1:50"))).toEqual("TWO")

  describe "minutes method", ->
    it "returns the current 5 minutes interval we are in", ->
      expect(watch.minutes(new Date("January 1, 1970 1:07"))).toEqual("FIVE")
    it "go backward on the 2nd half of the dial", ->
      expect(watch.minutes(new Date("January 1, 1970 1:47"))).toEqual("QUARTER")
    it "returns an empty string on 'oclock'", ->
      expect(watch.minutes(new Date("January 1, 1970 1:00"))).toEqual("")

  describe "dial_half method", ->
    it "returns 'PAST' when in first half", ->
      expect(watch.dial_half(new Date("January 1, 1970, 1:05"))).toEqual("PAST")
    it "returns 'PAST' when in 30..35", ->
      expect(watch.dial_half(new Date("January 1, 1970, 1:34"))).toEqual("PAST")
    it "returns 'TO' when in second half", ->
      expect(watch.dial_half(new Date("January 1, 1970, 1:44"))).toEqual("TO")

  describe "oclock method", ->
    it "returns 'OCLOCK' when in 00..04", ->
      expect(watch.oclock(new Date("January 1, 1970, 1:04"))).toEqual("OCLOCK")
    it "returns null when not in 00..04", ->
      expect(watch.oclock(new Date("January 1, 1970, 1:44"))).toBe("")

  describe "spoken method", ->
    it "does not include anything before the hour on oclock time", ->
      expect(watch.spoken(new Date("January 1, 1970, 1:00"))).toEqual("ONE OCLOCK")
    it "does not append space when not oclock time", ->
      expect(watch.spoken(new Date("January 1, 1970, 1:05"))).toEqual("FIVE PAST ONE")
