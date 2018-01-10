window.onload = function(){
  (function(exports){
    function Controller(list = new List()){
      this.list = list
      this.list.addNote("Favourite Drink: JD and coke")
      this.view = new View(this.list)
      console.log(this.list)
      console.log(this.view)
      console.log(this.view.returnHTML())
      console.log(this.list.notes[0])
      Controller.prototype.getHTML = function(){
        // document.getElementById("app").innerHTML = "test";
        document.getElementById("app").innerHTML = this.view.returnHTML();
      }
      console.log(this.view.returnHTML())
    }
      exports.Controller = Controller;

  })(this);

  controller = new Controller()
  controller.getHTML()

  // document.getElementById("app").innerHTML = "What up Lan?";
  // elem = "howdy";
  // console.log(elem)
};
