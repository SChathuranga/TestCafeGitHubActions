const { fixture } = require("testcafe");

fixture("Pagee Load Timeout Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test.timeouts(5)("set Page timeout Test", async t =>{
    await t
        .setPageLoadTimeout(5)
        .typeText("#developer-name", "TAU User")
        .click("#windows")
        .click("#submit-button");
});

//setPageLoadTimeout is deprecaed hence recommended to use test.timeout()