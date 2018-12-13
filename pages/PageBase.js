class PageBase {
    waitForElement(element) {
        const EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(element));
    }

    getLinkByText(text) {
        return element(by.partialLinkText(text));
    }

    switchFrameByName(name) {
        browser.switchTo().frame($(`frame[name=${name}]`).getWebElement());
    }

    switchFrameToDefault() {
        browser.switchTo().defaultContent();
    }
}

module.exports = PageBase;