const page = require('../pages/NestedFramesPage');

describe('Nested frames', () => {
    beforeAll(page.open);
    beforeEach(page.switchFrameToDefault);

    [
        ['LEFT', 'frame-top', 'frame-left'],
        ['MIDDLE', 'frame-top', 'frame-middle'],
        ['RIGHT', 'frame-top', 'frame-right'],
        ['BOTTOM', 'frame-bottom'],
    ].forEach(([text, ...path]) => {
        it(`should contain text "${text}" in the "${path.join(' > ')}" frame`, () => {
            page.switchFrameTo(path);

            expect(page.getBodyText()).toEqual(text);
        });
    });
});