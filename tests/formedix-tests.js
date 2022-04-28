import { Selector } from 'testcafe';
//import { randomTextGenerator} from '../helpers/generator'
import { CreateLogin } from '../components/login'
import { CreateLogout } from '../components/logout'

import inputFields from '../elements/input-fields';
import buttons from '../elements/buttons';

const { descriptionInputField,localeInputField} =inputFields()
const { repositoryButton,
        studiesButton,
        threeButton,
        techStudyButton,
        dataAcquisitionButton,
        formsButton,
        medicalHistoryButton,
        editFormButton,
        buttonUpdate
  } = buttons()

const descriptionText= 'test_description'
const descriptionName=Selector('span').withAttribute('id','formDescription')

const getVariable = async (reference) => {
  const awaitedReference = await reference;
  return awaitedReference;
};

fixture`Getting Started`
    .page`https://ryze-staging.formedix.com/`;

test.meta({ testCaseId: 'C1' })
    ('test', async t => {

    await CreateLogin(t)

    await t
      .click(repositoryButton)
      .click(studiesButton)
      .expect(threeButton.exists).ok()

    await t
      .click(techStudyButton)
      .wait(5e3)
      .click(dataAcquisitionButton)
      .click(formsButton)
      .click(medicalHistoryButton)

    await t
      .click(editFormButton)
      .click(descriptionInputField)
      .pressKey('ctrl+a delete')
      .typeText(descriptionInputField, descriptionText)
      .click(localeInputField)
      .pressKey('ctrl+a delete')
      .typeText(localeInputField,'tt')
      .click(buttonUpdate)

      const descriptionNameString = await getVariable(await descriptionName.textContent)
      console.log(descriptionNameString)

    await t
      .expect(descriptionNameString).eql(descriptionText)

    await CreateLogout(t)     

})






