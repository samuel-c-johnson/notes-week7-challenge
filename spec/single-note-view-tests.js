function testSingleNoteView() {
  var note = new Note("Have a bath")
  var singleview = new SingleNoteView(note)

  assert.isTrue(singleview.returnSingleNoteHTML() === "<h1>Have a bath</h1>", "Instantiates a single note")



}
testSingleNoteView()
