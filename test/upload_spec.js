const path = require('path');
const page = require('../pages/UploadPage');

describe('Files uploading', () => {
    const filePath = __filename;
    const fileName = path.basename(filePath);

    beforeEach(page.open);

    it('should allow to upload a file using uploading form', () => {
        page.selectFormFile(filePath);
        page.submitForm();
        page.waitForFormFileUploading();

        expect(page.getUploadedFormFilesText()).toEqual(fileName);
    });

    it('should allow to drag&drop a file', () => {
        page.dropFile(filePath);

        expect(page.getDroppedFilesCount()).toEqual(1);
        expect(page.getNthDroppedFileName(0)).toEqual(fileName);
    });

    it('should allow to drag&drop multiple files', () => {
        page.dropFile(filePath);
        page.dropFile(filePath);

        expect(page.getDroppedFilesCount()).toEqual(2);
    });
});