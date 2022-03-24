let container = document.getElementById("container");

// make header
const headerFunc = () => {
    const header = document.createElement("div");
    header.setAttribute("id", "header");
    container.appendChild(header);

    header.textContent = "REMEMBER ME LIST";
};

// make body
const toDoBodyFunc = () => {
    const toDoBody = document.createElement("div");
    toDoBody.setAttribute("id", "to-do-body");
    container.appendChild(toDoBody);

    // toDoBody.textContent = "body";

    // return toDoBody;
};
headerFunc();
toDoBodyFunc();

// make sidebar
const sideBarFunc = () => {
    //get to do body by id 
    let toDoBody = document.getElementById("to-do-body");

    const sideBar = document.createElement("div");
    sideBar.setAttribute("id", "side-bar");
    toDoBody.appendChild(sideBar);

    // sideBar.textContent = "sidebar";

    // return toDoBody;
};
sideBarFunc();

// make project content
const projectContentFunc = () => {
    //get to do body by id 
    let toDoBody = document.getElementById("to-do-body");

    const projectContent = document.createElement("div");
    projectContent.setAttribute("id", "project-content");
    toDoBody.appendChild(projectContent);

    // projectContent.textContent = "project content";
    //create add button div
    const addReminderBtnDiv = document.createElement("div");
    addReminderBtnDiv.setAttribute("id", "add-reminder-btn-div");
    projectContent.appendChild(addReminderBtnDiv);
    //create add button
    const addReminderBtn = document.createElement("button");
    addReminderBtn.setAttribute("id", "add-reminder-button");
    addReminderBtn.textContent = "+"
    addReminderBtnDiv.appendChild(addReminderBtn);
};
projectContentFunc();

// make day wise list in sidebar
const dayWiseListFunc = () => {
    //get to do body by id 
    let sidebar = document.getElementById("side-bar");

    const dayWiseList = document.createElement("div");
    dayWiseList.setAttribute("id", "day-wise-list");
    sidebar.appendChild(dayWiseList);

    // dayWiseList.textContent = "day wise list";

    // make all
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


    // return toDoBody;
};
dayWiseListFunc();

// new project list in sidebar
const newProjectListFunc = () => {
    //get to do body by id 
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
    
    // return toDoBody;
};
newProjectListFunc();


// create form
const createAddProjectFormFunc = () => {
    const addProjectForm = document.createElement("form");
    addProjectForm.setAttribute("id", "add-project-form");
    container.appendChild(addProjectForm);

    const formContents = document.createElement("div");
    addProjectForm.appendChild(formContents);
    formContents.setAttribute("class", "form-contents");

    //add label
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name-input");
    nameLabel.textContent = "Add Project";
    formContents.appendChild(nameLabel);
    // add input
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Project Title");
    nameInput.setAttribute("id", "name-input");
    nameInput.setAttribute("maxlength", "30");
    nameInput.required = true;
    formContents.appendChild(nameInput);
    // add submit button
    const submitNewProjectBtn = document.createElement("button");
    submitNewProjectBtn.setAttribute("type", "submit");
    submitNewProjectBtn.setAttribute("id", "submit-new-project-btn");
    submitNewProjectBtn.textContent = "SUBMIT";
    formContents.appendChild(submitNewProjectBtn);

    //add cross button
    const crossBtn = document.createElement("div");
    crossBtn.setAttribute("id", "cross");
    crossBtn.textContent = "+";
    formContents.appendChild(crossBtn);
};
createAddProjectFormFunc();


// open add project form

document.getElementById("add-project-button").addEventListener("click", ()=>{
    //show form
    const addProjectForm = document.getElementById("add-project-form");
    addProjectForm.style.display = "flex";
});

//cancel submit event
document.getElementById("add-project-form").addEventListener("submit",(event)=>{
    event.preventDefault();
});

//close form on clicking cross button
document.getElementById("cross").addEventListener("click", ()=>{
    // close form
    const addProjectForm = document.getElementById("add-project-form");
    addProjectForm.style.display = "none";
});

//get value from save button
document.getElementById("submit-new-project-btn").addEventListener("click", ()=>{
    const nameInput = document.getElementById("name-input");
    if(nameInput.value === "") return;
    const addProjectForm = document.getElementById("add-project-form");
    addNewProject();
    nameInput.value = "";
    addProjectForm.style.display = "none";
});

//adding new project div to PROJECTS sidebar
const addNewProject = () => {
    const nameInput = document.getElementById("name-input");
    const newProjectList = document.getElementById("new-project-list");

    const newProjectDiv = document.createElement("div");
    newProjectDiv.setAttribute("class", "new-project-div");
    newProjectDiv.textContent = nameInput.value;
    newProjectList.appendChild(newProjectDiv);
}

// selecting a particular project and displaying on the body
// TO FIX NOT WORKING
const showProjectName = () => {
    const newProjectDiv = document.querySelectorAll(".new-project-div");

    newProjectDiv.forEach((div)=> {
        div.addEventListener("click", (event)=>{
            console.log(event.target.div.textContent);
        })
    })
}
showProjectName();



// make form for reminder
const reminderFormFunc = () => {
    const addReminderForm = document.createElement("form");
    addReminderForm.setAttribute("id", "add-reminder-form");
    container.appendChild(addReminderForm);

    const reminderFormContents = document.createElement("div");
    addReminderForm.appendChild(reminderFormContents);
    reminderFormContents.setAttribute("class", "reminder-form-contents");

    // add heading
    const addReminderHeading = document.createElement("div");
    addReminderHeading.setAttribute("id", "add-reminder-heading");
    addReminderHeading.textContent = "ADD REMINDER";
    reminderFormContents.appendChild(addReminderHeading);

    // make title li
    const titleLi = document.createElement("li");
    reminderFormContents.appendChild(titleLi);

    // add title label to li
    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title-input");
    titleLabel.textContent = "Title";
    titleLi.appendChild(titleLabel);

    // add title input to li
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Reminder Title");
    titleInput.setAttribute("id", "title-input");
    titleInput.required = true;
    titleInput.setAttribute("maxlength", "20");
    titleLi.appendChild(titleInput);

    // make due date li
    const dueDateLi = document.createElement("li");
    reminderFormContents.appendChild(dueDateLi);

    // add due date label
    const dueDateLabel = document.createElement("label");
    dueDateLabel.setAttribute("for", "due-date-input");
    dueDateLabel.textContent = "Due Date";
    dueDateLi.appendChild(dueDateLabel);

    // TO FIX, date input not working
    // add date input
    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.required = true;
    dueDateInput.setAttribute("id", "due-date-input");
    dueDateInput.valueAsDate = new Date(); 
    dueDateLi.appendChild(dueDateInput);

    // make description li
    const descriptionLi = document.createElement("li");
    reminderFormContents.appendChild(descriptionLi);

    // add description label
    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description-input");
    descriptionLabel.textContent = "Description";
    descriptionLi.appendChild(descriptionLabel);

    // add description input
    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("placeholder", "Remind me to...");
    descriptionInput.required = true;
    descriptionInput.setAttribute("id", "description-input");
    descriptionInput.setAttribute("maxlength", "100");
    descriptionLi.appendChild(descriptionInput);

    // 


    //add priority
    // make priority li
    const priorityLi = document.createElement("li");
    reminderFormContents.appendChild(priorityLi);

    // add priority label
    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority-selection");
    priorityLabel.textContent = "Set Priority";
    priorityLi.appendChild(priorityLabel);

    // add priority selection
    const prioritySelection = document.createElement("select");
    prioritySelection.setAttribute("id", "priority-selection");
    priorityLi.appendChild(prioritySelection);
    
    // add options to priority selection
        // high
    const highPriority = document.createElement("option");
    highPriority.setAttribute("value", "high");
    highPriority.textContent = "High";
    prioritySelection.appendChild(highPriority);

        // medium
    const mediumPriority = document.createElement("option");
    mediumPriority.setAttribute("value", "medium");
    mediumPriority.textContent = "Medium";
    prioritySelection.appendChild(mediumPriority);

        // low
    const lowPriority = document.createElement("option");
    lowPriority.setAttribute("value", "low");
    lowPriority.textContent = "Low";
    prioritySelection.appendChild(lowPriority);

    // make submit button li
    const submitButtonLi = document.createElement("li");
    reminderFormContents.appendChild(submitButtonLi);

    // add submit button
    const createReminderBtn = document.createElement("button");
    createReminderBtn.setAttribute("type", "submit");
    createReminderBtn.setAttribute("id", "create-reminder-btn");
    createReminderBtn.textContent = "CREATE";
    submitButtonLi.appendChild(createReminderBtn);

    //add cross button
    const crossBtn = document.createElement("div");
    crossBtn.setAttribute("id", "cross");
    crossBtn.setAttribute("id", "reminder-form-cross");
    crossBtn.textContent = "+";
    reminderFormContents.appendChild(crossBtn);   
}

// cancel submit event of reminder form
// document.getElementById("add-reminder-form").addEventListener("submit",(event)=>{
//     event.preventDefault();
// });

reminderFormFunc();
//show form by clicking add reminder form button
const showReminderForm = () => {
    const addReminderBtn = document.getElementById ("add-reminder-button");
    addReminderBtn.addEventListener("click", ()=>{
        const addReminderForm = document.getElementById("add-reminder-form");
        addReminderForm.style.display = "flex";
    })
}
showReminderForm();

//close reminder form on clicking cross button
const closeReminderForm = () => {
    document.getElementById("reminder-form-cross").addEventListener("click", ()=>{
    // close form
    const addReminderForm = document.getElementById("add-reminder-form");
    addReminderForm.style.display = "none";
    });
}
closeReminderForm();

//get value from create button of add reminder form
document.getElementById("create-reminder-btn").addEventListener("click", ()=>{
    const titleInput = document.getElementById("title-input");
    const dueDateInput = document.getElementById("due-date-input");
    const descriptionInput = document.getElementById("description-input");
    const prioritySelection = document.getElementById("priority-selection");
    const addReminderForm = document.getElementById("add-reminder-form");

    if(titleInput.value === "" || dueDateInput.value === ""
    || descriptionInput === "" || prioritySelection === "") return;

    // addNewReminder();
    addNewReminderToArray();
    // console.log(titleInput.value);
    // console.log(dueDateInput.value);
    // console.log(descriptionInput.value);
    // console.log(prioritySelection.value);
    addReminderForm.style.display = "none";
});

//cancel submit event
document.getElementById("add-reminder-form").addEventListener("submit",(event)=>{
    // addNewReminderToArray();
    event.preventDefault();
});


// take info from the form and display it on the body
const addNewReminder = () => {
    const projectContent = document.getElementById("project-content");
    const titleInput = document.getElementById("title-input");
    const dueDateInput = document.getElementById("due-date-input");
    const descriptionInput = document.getElementById("description-input");
    const prioritySelection = document.getElementById("priority-selection");

    //create parent div
    const newReminderDiv = document.createElement("div");
    newReminderDiv.setAttribute("class", "new-reminder-div");
    projectContent.appendChild(newReminderDiv);

    //for now append everything
    // newReminderDiv.textContent = `${titleInput.value} and ${dueDateInput.value} and ${descriptionInput.value} and ${prioritySelection.value}.`;
}

// constructor class function
class Reminder {
    constructor(title, date, description, priority) {
        this.title = title;
        this.date = date;
        this.description = description;
        this.priority = priority;
    }
}
let reminderLibrary = [];
// function for application logic of adding a new reminder div
const addNewReminderToArray = () => {
    //bring all components
    const titleInput = document.getElementById("title-input");
    const dueDateInput = document.getElementById("due-date-input");
    const descriptionInput = document.getElementById("description-input");
    const prioritySelection = document.getElementById("priority-selection");
    const projectContent = document.getElementById("project-content");

    //make new reminder
    const brandNewReminder = new Reminder(
        titleInput.value,
        dueDateInput.value,
        descriptionInput.value,
        prioritySelection.value,
    )

    //reminder library
    
    reminderLibrary.push(brandNewReminder);
    console.log(reminderLibrary); 

    //create parent div
    const newReminderDiv = document.createElement("div");
    newReminderDiv.setAttribute("class", "new-reminder-div");
    newReminderDiv.setAttribute("id",reminderLibrary.length-1);
    projectContent.appendChild(newReminderDiv);
    

    // show details on div
    newReminderDiv.textContent = `${titleInput.value} & ${dueDateInput.value}
    & ${descriptionInput.value} & ${prioritySelection.value}`;
};
