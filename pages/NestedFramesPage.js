const PageBase = require("./PageBase");

class NestedFramesPage extends PageBase {
    constructor() {
        super();
        this.body = $('body');
    }

    open() {
        browser.get('/nested_frames');
    }

    getBodyText() {
        return this.body.getText();
    }

    switchFrameTo(path) {
        path.forEach(this.switchFrameByName);
    }
}

module.exports = new NestedFramesPage();