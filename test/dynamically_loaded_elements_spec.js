const page = require('../pages/DynamicallyLoadedElementsPage');

describe('Dynamically loaded page elements', () => {
    beforeEach(page.open);

    [
        'Example 1',
        'Example 2'
    ].forEach((linkText) => {
        it(`should show an async element on the "${linkText}" page`, () => {
            page.openExample(linkText);
            page.start();
            page.waitForDynamicElement();

            expect(page.getDynamicElementText()).toEqual('Hello World!');
        });
    });
});