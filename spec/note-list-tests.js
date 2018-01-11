function testReturnList(){

  var list = new List();

  var note = new Note("Hello");

  list.addNote(note);

  assert.isTrue(list.notes[0] === note, "Returns list of notes");

};

testReturnList();

function testReturnNotes(){

  var list = new List();

  var note = new Note("Hello");
  var note2 = new Note("Val");

  list.addNote(note);
  list.addNote(note2);

  assert.isTrue(list.notes[0] === note, "Returns the notes");
  assert.isTrue(list.notes[1] === note2, "Returns the notes");

};

testReturnNotes();

function testReturnNotesText(){

  var list = new List();

  var note = new Note("Hello");
  var note2 = new Note("Val");

  list.addNote(note);
  list.addNote(note2);

  assert.isTrue(note.text === "Hello", "Returns the text in a note");
  assert.isTrue(note2.text === "Val", "Returns the text in a note");

};

testReturnNotesText();
