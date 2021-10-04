const { fixture } = require("testcafe");
import {Selector} from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#windows");
const submitButton = Selector("#submit-button");

fixture("My Extension Fixture")
    .page("http://www.google.com");

    test.page("https://devexpress.github.io/testcafe/example/")
    ("First Test", async t =>{
        const developerNameElement = await developerName.with({visibilityCheck:true})();
        await t
            .typeText(developerName, "TAU User")
            .click(osOption)
            .click(submitButton);
    });