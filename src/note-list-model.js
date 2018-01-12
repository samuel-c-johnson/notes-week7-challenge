(function(exports){

  function List() {
    this.notes = [];
    this.id = 0
  }

  List.prototype.addNote = function(note){
    this.notes.push(note);
  }

  List.prototype.returnNoteList = function(){
    return this.notes
  }

  exports.List = List;

})(this);
