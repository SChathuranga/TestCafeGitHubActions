const { fixture } = require("testcafe");

fixture("Test Speed Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t =>{
    await t
        .setTestSpeed(0.1)
        .typeText("#developer-name", "TAU User")
        .click("#windows")
        .click("#submit-button");
});