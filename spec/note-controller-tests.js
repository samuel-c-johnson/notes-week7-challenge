function testControllerInitialize() {
     var controller = new Controller();
     assert.isTrue(controller instanceof Controller, "Controller is instantiated");

};


function testControllerGetHtml() {

  function fakeList(){
    fakeList.prototype.returnNotes = function() {
      return "[I love bananas]"
    };
  };

  function fakeView() {
    fakeView.prototype.returnHTML = function(){
      return "<ul><li>I love bananas</li></ul>"
    };
  };

  var list = new fakeList();
  var view = new fakeView();
  var controller = new Controller()

  var html = controller.view.returnHTML()
  controller.getHTML('app')
  assert.isTrue(document.getElementById('app').innerHTML === html, "Inner HTML contains the list HTML")
}




window.onload = function(){
  testControllerInitialize()
  testControllerGetHtml()
};
