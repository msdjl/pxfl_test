const PageBase = require("./PageBase");

class DynamicallyLoadedElementsPage extends PageBase {
    constructor() {
        super();
        this.dynamicElement = $('#finish');
        this.startButton = $('#start button');
    }

    open() {
        browser.get('/dynamic_loading');
    }

    openExample(linkText) {
        this.getLinkByText(linkText).click();
    }

    start() {
        this.startButton.click();
    }

    waitForDynamicElement() {
        this.waitForElement(this.dynamicElement);
    }

    getDynamicElementText() {
        return this.dynamicElement.getText();
    }
}

module.exports = new DynamicallyLoadedElementsPage();