
(function(exports){
  function View(list){
    this.list = list;
  }

  View.prototype.returnHTML = function () {
;   var text = []
    for (var i=0; i < this.list.notes.length; i ++){

      text.push(this.list.notes[i].text.slice(0, 20))
   };
   console.log()
   return "<ul><li>" + text.join("</li><li>") + "</li></ul>"

  };


  exports.View = View;
})(this);
