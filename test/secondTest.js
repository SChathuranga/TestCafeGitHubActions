const { fixture } = require("testcafe");
import {Selector} from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#windows");
const submitButton = Selector("#submit-button");

fixture("First Fixture")
    .page("https://google.com");

test.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t
        .typeText(developerName, "TAU User")
        .click(osOption)
        .click(submitButton);
});