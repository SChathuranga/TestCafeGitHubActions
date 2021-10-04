const { fixture } = require("testcafe");



waitAllPending(done)
{

    const wait = () => {

      if (this._pending === 0) {

        return done();

      }

      setTimeout(wait, 10);

    };

    process.nextTick(wait);

    return this;
  }

  fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t =>{
    await t
        .typeText("#developer-name", "TAU User")
        .click("#windows")
        .click("#submit-button");
});