function testReturnText() {
    var note = new Note("Hello");

    assert.isTrue(note.text === "hello");
};

testReturnText();
