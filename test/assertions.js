import {Selector} from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#windows");
const submitButton = Selector("#submit-button");

fixture("Assertions Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test
    .timeouts({
        pageLoadTimeout: 2000
    })
    ("Assertions Test", async t =>{
        await t
            .maximizeWindow()
            .expect(developerName.value).eql('', 'input is empty')
            .typeText(developerName, "TAU User")
            .expect(developerName.value).contains('TAU', 'The text contains expected text');
    });