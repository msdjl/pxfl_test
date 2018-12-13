exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 5,
    },
    specs: [
        'test/nested_frames_spec.js',
        'test/dynamically_loaded_elements_spec.js',
        'test/upload_spec.js',
    ],
    baseUrl: 'https://the-internet.herokuapp.com',
    onPrepare: () => {
        browser.waitForAngularEnabled(false)
    }
};