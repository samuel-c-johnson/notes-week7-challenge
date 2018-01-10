
(function(exports){
  function View(list){
    this.list = list;
  }

  View.prototype.returnHTML = function () {
    // console.log('view');
    // console.log(this.list);
    console.log(this.list.notes);

   var text = []
   for (var i=0; i < this.list.notes.length; i ++){
     text.push(this.list.notes[i].text)
   };
   // console.log(text)
   return "<ul><li>" + text.join("</li><li>") + "</li></ul>"
  };


  exports.View = View;
})(this);
