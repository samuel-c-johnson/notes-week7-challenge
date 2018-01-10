
function testForReturnHTML(){
  var list = new List();
  var view = new View(list);
  assert.isTrue(view.returnHTML() === "<ul></ul>", "Convert empty string to a html")
}
testForReturnHTML()

function testForReturnHTMLNote(){
  var list = new List();
  var view = new View(list);
  var note = new Note("How are you?");

  list.addNote(note);
  console.log(view.returnHTML())
  assert.isTrue(view.returnHTML() === "<ul><li><div>How are you?</div></li></ul>", "Convert one note to a html");
};
testForReturnHTMLNote();
