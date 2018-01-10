
function testForReturnHTMLNote(){
  var list = new List();
  var view = new View(list);
  var note = new Note("How are you?");
  list.addNote(note);
  var note2 = new Note("I'm good");
  list.addNote(note2);

  console.log(view.returnHTML())
  assert.isTrue(view.returnHTML() === "<ul><li>How are you?</li><li>I'm good</li></ul>", "Convert one note to a html");
};
testForReturnHTMLNote();
