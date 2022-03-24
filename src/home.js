//all home functions
import './style.css';

const container = document.getElementById("container");

// make header
const headerFunc = () => {
    const header = document.createElement("div");
    header.setAttribute("id", "header");
    container.appendChild(header);
    header.textContent = "REMEMBER ME LIST";
    return container;
};

// make body
const toDoBodyFunc = () => {
    const toDoBody = document.createElement("div");
    toDoBody.setAttribute("id", "to-do-body");
    container.appendChild(toDoBody);
    return container;
};

// make sidebar
const sideBarFunc = () => {
    //get to do body by id 
    let toDoBody = document.getElementById("to-do-body");
    const sideBar = document.createElement("div");
    sideBar.setAttribute("id", "side-bar");
    toDoBody.appendChild(sideBar);
    return toDoBody;
};

// make project content
const projectContentFunc = () => {
    //get to do body by id 
    let toDoBody = document.getElementById("to-do-body");

    const projectContent = document.createElement("div");
    projectContent.setAttribute("id", "project-content");
    toDoBody.appendChild(projectContent);

    //create add button div
    const addReminderBtnDiv = document.createElement("div");
    addReminderBtnDiv.setAttribute("id", "add-reminder-btn-div");
    projectContent.appendChild(addReminderBtnDiv);

    //create add button
    const addReminderBtn = document.createElement("button");
    addReminderBtn.setAttribute("id", "add-reminder-button");
    addReminderBtn.textContent = "+"
    addReminderBtnDiv.appendChild(addReminderBtn);

    return toDoBody;
};

// make day wise list in sidebar
const dayWiseListFunc = () => {
    //get to do body by id 
    let sidebar = document.getElementById("side-bar");

    const dayWiseList = document.createElement("div");
    dayWiseList.setAttribute("id", "day-wise-list");
    sidebar.appendChild(dayWiseList);

    // make 'all'
    const all = document.createElement("div");
    all.setAttribute("id", "all");
    dayWiseList.appendChild(all);
    all.textContent = "ALL";

    // make today
    const today = document.createElement("div");
    today.setAttribute("id", "today");
    dayWiseList.appendChild(today);
    today.textContent = "TODAY";

    // make this year
    const thisYear = document.createElement("div");
    thisYear.setAttribute("id", "this-year");
    dayWiseList.appendChild(thisYear);
    thisYear.textContent = "THIS YEAR";

    return sidebar;
};

// new project list in sidebar
const newProjectListFunc = () => {
    let sidebar = document.getElementById("side-bar");

    const newProjectList = document.createElement("div");
    newProjectList.setAttribute("id", "new-project-list");
    sidebar.appendChild(newProjectList);
    newProjectList.textContent = "PROJECTS";

    // plus sign for adding project
    const addProjectButton = document.createElement("button");
    addProjectButton.setAttribute("id", "add-project-button");
    newProjectList.appendChild(addProjectButton);
    addProjectButton.textContent = "+";
    
    return sidebar;
};



export { headerFunc, 
    toDoBodyFunc, 
    sideBarFunc, 
    projectContentFunc, 
    dayWiseListFunc, 
    newProjectListFunc,   
};