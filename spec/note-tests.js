function testReturnText() {
    // var string = "hello"
    var note = new Note("Hello");

    assert.isTrue(note.text === "hello");
};

testReturnText();
