import './style.css';

const container = document.getElementById("container");

// create form for adding project name
const createAddProjectFormFunc = () => {
    const addProjectForm = document.createElement("form");
    addProjectForm.setAttribute("id", "add-project-form");
    container.appendChild(addProjectForm);

    const formContents = document.createElement("div");
    addProjectForm.appendChild(formContents);
    formContents.setAttribute("class", "form-contents");

    // add label
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

    // add cross button
    const crossBtn = document.createElement("div");
    crossBtn.setAttribute("id", "cross");
    crossBtn.textContent = "+";
    formContents.appendChild(crossBtn);

    return container;
};

export { createAddProjectFormFunc, };