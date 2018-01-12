(function(exports) {
  var id = 0
  function Note(string) {
    this.text = string;
    this.id = id++
  };

  Note.prototype.getNote = function() {
    return this.text
  };

  exports.Note = Note;

})(this);
