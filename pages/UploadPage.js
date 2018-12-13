const dragAndDropFile = require('../utils/drop-file');
const PageBase = require("./PageBase");

class UploadPage extends PageBase {
    constructor() {
        super();
        this.fileInput = $('#file-upload');
        this.submitButton = $('#file-submit');
        this.dragAndDropArea = $('#drag-drop-upload');
        this.uploadedFormFiles = $('#uploaded-files');
    }

    open() {
        browser.get('/upload');
    }

    selectFormFile(fileName) {
        this.fileInput.sendKeys(fileName);
    }

    submitForm() {
        this.submitButton.click();
    }

    waitForFormFileUploading() {
        this.waitForElement(this.uploadedFormFiles);
    }

    dropFile(filePath) {
        dragAndDropFile(this.dragAndDropArea, filePath);
        browser.sleep(300);
    }

    getUploadedFormFilesText() {
        return this.uploadedFormFiles.getText();
    }

    getDroppedFiles() {
        return this.dragAndDropArea.$$('.dz-success');
    }

    getDroppedFilesCount() {
        return this.getDroppedFiles().count();
    }

    getNthDroppedFileName(pos) {
        return this.getDroppedFiles().get(pos).$('.dz-filename').getText();
    }
}

module.exports = new UploadPage();