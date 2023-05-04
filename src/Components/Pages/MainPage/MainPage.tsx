import React from "react";
import './MainPage.module.scss';
import MarvelUniverse from "../../MarvelUniverse/MarvelUniverse";
import ProgressIndicator from "../../ProgressIndicator/ProgressIndicator";
import FormikForm from "../../PersonalDataForm/PersonalDataForm";


const steps = [
    {
        name: 'Create an investor profile',
        substeps: 2,
        completed: true,
        active: true,
    },
    {
        name: 'Select your investment strategy',
        substeps: 1,
        completed: true,
        active: false,
    },
    {
        name: 'Register',
        substeps: 25,
        completed: false,
    },
    {
        name: 'Open an account',
        completed: false,
    },
];

const MainPage = () => {
  return (
    <div>
      <FormikForm />
      <ProgressIndicator steps={steps} />
      <MarvelUniverse/>
    </div>
  )
}
export default MainPage;