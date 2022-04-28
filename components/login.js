import { Selector } from 'testcafe';
import inputFields from '../elements/input-fields';
import buttons from '../elements/buttons';

const { usernameInputField,passwordInputField } =inputFields()
const { buttonSubmit } = buttons()

export async function CreateLogin(t) {

    await t
        .maximizeWindow()

    await t
        .typeText(usernameInputField, 'testteamtechtest')
        .typeText(passwordInputField, 'T3cht3ster')
        .click(buttonSubmit)

}
