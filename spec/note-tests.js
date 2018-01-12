function testReturnText() {

    var note = new Note("Hello");

    assert.isTrue(note.text === "Hello", "Returns text");

};

testReturnText();

function testNoteId() {
  var note = new Note("Hidey ho!");

  assert.isTrue(note.id === 2, "Note ID")
}

testNoteId()
