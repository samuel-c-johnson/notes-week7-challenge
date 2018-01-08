
(function(exports) {

  function noteListView(noteList) {
    this.listView = noteList;
  }

  noteListView.prototype.displayNotes = function() {
      <ul><li><div> Note: </div></li></ul>
  }

  exports.noteListView = noteListView;

})(this);
