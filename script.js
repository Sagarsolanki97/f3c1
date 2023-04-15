let employees = [];
let nextId = 1;

const addEmployee = () => {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;

    if (!name || !profession || !age) {
        showError('Error:Please Make sure All the fields are filled before adding in an employee!');
        return;
    }

    employees.push({
        id: nextId,
        name,
        profession,
        age: parseInt(age)
    });
    // const user = { "Name": name, "Profession": profession, "Age": parseInt(age) }
    // employees.push(user);

    showSuccess('Success:Employee Added!');
    renderEmployees();

    nextId++;
};

const renderEmployees = () => {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';

    employees.forEach((employee) => {
        const li = document.createElement('li');
        li.innerHTML = `
      <span>Name: ${employee.name}&nbsp; Profession: ${employee.profession}&nbsp;  Age: ${employee.age}</span>
      <button type="button" class="delete-btn" data-id="${employee.id}" >Delete user</button>
    `;
        employeeList.appendChild(li);
    });

    const deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const id = parseInt(event.target.getAttribute('data-id'));
            employees = employees.filter((employee) => employee.id !== id);
            renderEmployees();
        });
    });
};

const showError = (message) => {
    const errorDiv = document.getElementById('error-message');
    errorDiv.innerText = message;
    errorDiv.style.color = 'red';
};

const showSuccess = (message) => {
    const successDiv = document.getElementById('success-message');
    successDiv.innerText = message;
    successDiv.style.color = 'green';
};

const addButton = document.getElementById('add-btn');
addButton.addEventListener('click', addEmployee);
