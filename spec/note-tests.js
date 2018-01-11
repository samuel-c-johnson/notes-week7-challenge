function testReturnText() {

    var note = new Note("Hello");

    assert.isTrue(note.text === "Hello", "Returns text");

};

testReturnText();
