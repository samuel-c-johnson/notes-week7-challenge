(function(exports) {
  function Note(string) {
    this.text = string;
  };

  Note.prototype.getNote = function() {
    return this.text
  };

  exports.Note = Note;

})(this);
