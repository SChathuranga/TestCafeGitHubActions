import {Selector} from 'testcafe';

const interfaceSelect = Selector('select#preferred-interface');
const interfaceOptions = interfaceSelect.find('option');

fixture("DropDown List Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test('Select element test', async t => {
    await t
        .click(interfaceSelect)
        .click(interfaceOptions.withText('Both'));
})