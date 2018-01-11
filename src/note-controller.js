window.onload = function(){


  (function(exports){
    function Controller(list = new List()){
      this.list = list
      this.list.addNote(new Note("Favourite Drink: JD and coke"))
      this.view = new View(this.list)

      Controller.prototype.getHTML = function(){
        document.getElementById("app").innerHTML = this.view.returnHTML();
      }
    }
      exports.Controller = Controller;

  })(this);

  controller = new Controller()
  // console.log(controller)
  controller.getHTML()

};
//
// controller = new Controller()
// console.log(controller)
