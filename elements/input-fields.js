
import { Selector } from 'testcafe'

export default () => {

    const usernameInputField = Selector('div').find('input').withAttribute('id','username')
    const passwordInputField = Selector('div').find('input').withAttribute('id','password')  
    const descriptionInputField = Selector('textarea').withAttribute('id','assetLocaleEditTextTextareadescriptiontest_locale')
    const localeInputField = Selector('input').withAttribute('id','localeInputdescriptiontest_locale')
    
  return {

    usernameInputField,
    passwordInputField,
    descriptionInputField,
    localeInputField
  };
};