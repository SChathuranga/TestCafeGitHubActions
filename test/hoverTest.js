

fixture("Hover test Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("Hover element Test", async t =>{
    await t
        .setTestSpeed(0.01)
        .hover('input#populate');
});