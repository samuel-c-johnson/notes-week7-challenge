
function testForReturnHTMLNote(){
  var list = new List();
  var view = new View(list);
  var note = new Note("123456789123456789123456789");
  list.addNote(note);
  var note2 = new Note("I'm good");
  list.addNote(note2);


  assert.isTrue(view.returnHTML() === "<ul><li>12345678912345678912</li><li>I'm good</li></ul>", "Convert one note to a html");
};
testForReturnHTMLNote();
