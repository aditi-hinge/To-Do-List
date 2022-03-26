import { headerFunc, toDoBodyFunc, sideBarFunc, projectContentFunc, dayWiseListFunc, newProjectListFunc } from './home';

homeFunc();

const homeFunc = () => {
    headerFunc();
    toDoBodyFunc();
    sideBarFunc();
    projectContentFunc();
    dayWiseListFunc();
    newProjectListFunc();
 }
