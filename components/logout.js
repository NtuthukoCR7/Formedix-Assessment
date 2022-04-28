import buttons from '../elements/buttons';

const { menuUser, menuUserLogout } = buttons()

export async function CreateLogout(t) {

    await t
    .click(menuUser)
    .click(menuUserLogout) 

}
