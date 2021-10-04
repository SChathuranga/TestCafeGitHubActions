fixture('Hooks test fixture')
    .page("https://devexpress.github.io/testcafe/example/")
    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .setTestSpeed(0.5);
    });

    test("Hooks Test", async t =>{
        await t
            .typeText("#developer-name", "TAU User")
            .click("#windows")
            .click("#submit-button");
    });