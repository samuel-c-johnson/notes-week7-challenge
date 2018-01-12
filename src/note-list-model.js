(function(exports){

  function List() {
    this.notes = [];
    this.id = 0
  }

  List.prototype.addNote = function(note){
    this.notes.push(note);
  }

  // List.prototype.createNote = function(notetext){
  //   note = new Note(notetext, this.id)
  //   // list = new List
  //   console.log(note)
  //   List.addNote(note)
  //   this.id += 1
  // }

  exports.List = List;

})(this);
