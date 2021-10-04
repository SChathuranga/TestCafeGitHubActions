import {Selector} from 'testcafe';

const triedCheckbox = Selector('label').withText("I have tried TestCafe");
const slider = Selector('#slider');

fixture("Drag test Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("Drag element Test", async t =>{
    await t
        .click(triedCheckbox)
        .drag(slider, 360, 0, {offsetX:10, offsetY:10})
});