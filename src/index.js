import { headerFunc, 
    toDoBodyFunc, 
    sideBarFunc, 
    projectContentFunc,
    dayWiseListFunc,
    newProjectListFunc,
 } 
 from './home';
 import { createAddProjectFormFunc } from './form';


homeFunc();
formFunc();

const formFunc = () => {
    createAddProjectFormFunc();
}

const homeFunc = () => {
    headerFunc();
    toDoBodyFunc();
    sideBarFunc();
    projectContentFunc();
    dayWiseListFunc();
    newProjectListFunc();
 }
