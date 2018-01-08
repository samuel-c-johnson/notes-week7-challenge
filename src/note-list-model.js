(function(exports){

  function List() {
    this.notes = "hello";

  }

  List.prototype.addNote = function(note){
    this.notes.push(note)
  }

  exports.List = List;

})(this);
