
(function(exports) {
  function SingleNoteView(note) {
    this.note = note
  };


    SingleNoteView.prototype.returnSingleNoteHTML = function() {
      var text = this.note.getNote()
      return "<h1>" + text + "</h1>";
    };

    exports.SingleNoteView = SingleNoteView;
  })(this);
