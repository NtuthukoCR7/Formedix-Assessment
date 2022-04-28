
import { Selector } from 'testcafe'

export default () => {

    const buttonSubmit = Selector('div').find('button').withAttribute('id','btnSubmit')
    const repositoryButton = Selector('div').withAttribute('class','fdx-main-nav-item  has-sub-menu')
    const studiesButton = Selector('li').withAttribute('id','menuMdbStudies')
    const threeButton = Selector('span').withAttribute('id','fdxMdbContainerListItem0MenuToggle')
    const techStudyButton = Selector('div').withAttribute('class','container-item')
    const dataAcquisitionButton = Selector('li').withAttribute('id','ViewAssetGroupdataAcquisition')
    const formsButton = Selector('span').withAttribute('id','FORMTypeIcon')
    const medicalHistoryButton = Selector('span').withText('Medical History')    
    const editFormButton = Selector('button').withAttribute('id','switchEditMode') 
    const addDescriptionButton = Selector('div').withAttribute('id','editPropsAddEntrydescription')    
    const buttonUpdate = Selector('button').withAttribute('id','saveAsset')    
    const menuUser = Selector('li').withAttribute('id','menuUser')
    const menuUserLogout = Selector('li').withAttribute('id','menuUserLogout')
    
  return {
    buttonSubmit,
    repositoryButton,
    studiesButton,
    threeButton,
    techStudyButton,
    menuUser,
    menuUserLogout,
    dataAcquisitionButton,
    formsButton,
    medicalHistoryButton,
    editFormButton,
    addDescriptionButton,
    buttonUpdate
  };
};