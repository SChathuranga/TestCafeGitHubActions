import { Selector, ClientFunction } from "testcafe";

const developerName = Selector('#developer-name');
const osOption = Selector('#macos');
const submitButton = Selector('#submit-button');

const getPageURL = ClientFunction(() => window.location.href);

fixture("Client Function Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("Client function test", async t =>{
    await t
        .typeText(developerName, "TAU User")
        .click(osOption)
        .click(submitButton)
        .expect(getPageURL()).contains('thank-you');
});