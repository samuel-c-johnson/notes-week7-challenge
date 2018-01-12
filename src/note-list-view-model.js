
(function(exports){
  function View(list){
    this.list = list;
  }

  View.prototype.viewNoteList = function() {
    return this.list
  }


  View.prototype.returnHTML = function () {
    var text = []

    for (var i=0; i < this.list.notes.length; i ++){

      var noteContent = this.list.notes[i].text.slice(0, 20)
      var noteId = this.list.notes[i].id
      var totalstring = text.push( "<li><a href=\"#note" + noteId + ">" + noteContent + "</a></li>")
      // return "<li><a href=\"#note" + noteId + ">" + noteContent + "</a></li>"
    };
    return text.join("")
  };


  exports.View = View;
})(this);
