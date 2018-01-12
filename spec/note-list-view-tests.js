
function testForReturnHTMLNote(){
  var list = new List();
  var view = new View(list);
  var note = new Note("123456789123456789123456789");
  list.addNote(note);
  var note2 = new Note("I'm good");
  list.addNote(note2);


  assert.isTrue(view.returnHTML() === "<li><a href=\"#note8>12345678912345678912</a></li><li><a href=\"#note9>I'm good</a></li>", "Convert one note to a html");
};
testForReturnHTMLNote();
