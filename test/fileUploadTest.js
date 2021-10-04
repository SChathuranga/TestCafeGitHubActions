import {Selector} from 'testcafe';

const fileUpload = Selector('input#file-upload');
const uploadFileButton = Selector('input#file-submit.button')

fixture("DropDown List Fixture")
    .page("https://the-internet.herokuapp.com/upload");

    test("File upload test", async t => {
        await t
            .setFilesToUpload(fileUpload, '../../upload/nagarro-squarelogo.png')
            .clearUpload(fileUpload)
            .setFilesToUpload(fileUpload, '../../upload/nagarro-squarelogo.png')
            //.debug()
            .click(uploadFileButton);
    })