

function submitForm(event) {
    event.preventDefault();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;

    
    document.getElementById("displayFirstName").textContent = firstName;
    document.getElementById("displayLastName").textContent = lastName;
    document.getElementById("displayEmail").textContent = email;

    
    document.getElementById("userData").style.display = "block";
}




function toggleDescription() {
    var fullDescription = document.getElementById("full-description");
    var buttonText = document.querySelector(".item-container button");

    if (fullDescription.style.display === "none") {
        fullDescription.style.display = "block";
        buttonText.textContent = "Read less";
    } else {
        fullDescription.style.display = "none";
        buttonText.textContent = "Read more";
    }
}



function addStudent() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var grade = document.getElementById("grade").value;

    var table = document.getElementById("studentTable");
    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.textContent = name;
    cell2.textContent = age;
    cell3.textContent = grade;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        table.deleteRow(row.rowIndex);
    };
    cell4.appendChild(deleteButton);

    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
        showEditForm(row);
    };
    cell4.appendChild(editButton);

    // Clear the form fields after adding a student
    document.getElementById("studentForm").reset();
}

function showEditForm(row) {
    var editForm = document.getElementById("editForm");
    var cells = row.getElementsByTagName("td");

    document.getElementById("editName").value = cells[0].textContent;
    document.getElementById("editAge").value = cells[1].textContent;
    document.getElementById("editGrade").value = cells[2].textContent;

    // Set up the update function to know which row to update
    document.getElementById("updateButton").onclick = function() {
        updateStudent(row);
    };

    editForm.style.display = "block";
}

function updateStudent(row) {
    var cells = row.getElementsByTagName("td");

    cells[0].textContent = document.getElementById("editName").value;
    cells[1].textContent = document.getElementById("editAge").value;
    cells[2].textContent = document.getElementById("editGrade").value;

    // Hide the edit form after updating
    document.getElementById("editForm").style.display = "none";
}

function cancelEdit() {
    document.getElementById("editForm").style.display = "none";
}
