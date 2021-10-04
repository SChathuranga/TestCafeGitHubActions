const { fixture } = require("testcafe");
import {Selector} from 'testcafe';

const developerName = Selector("#developer-name");
const windowsOption = Selector("#windows");
const macOSOption = Selector("#macos");
const submitButton = Selector("#submit-button");

fixture.meta('version', '1')("First Fixture")
    .page("https://google.com");

test
    .meta('env', 'production')
    .meta('osOption', 'windows')
    .page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t
        .typeText(developerName, "TAU User")
        .click(windowsOption)
        .click(submitButton);
});

test
    .meta('env', 'uat')
    .meta('osOption', 'macos')
    .page("https://devexpress.github.io/testcafe/example/")
("Second Test", async t =>{
    await t
        .typeText(developerName, "TAU User")
        .click(macOSOption)
        .click(submitButton);
});