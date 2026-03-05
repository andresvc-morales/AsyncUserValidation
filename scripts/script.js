// Get references to the DOM elements
const submitButton = document.getElementById("submit_button");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const statusParagraph = document.getElementById("status");

// Event listener for the submit button to handle form submission
submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    processForm(nameInput.value, ageInput.value, initProcess);

});

// Function to process the form data and handle the asynchronous operation
function processForm(name, age, callback) {
    if ((name.trim() === "") || (age === "") ){
        statusParagraph.innerText = "Invalid information";
        return;
    }
    else {
        nameInput.value = "";
        ageInput.value = "";
        callback(name)
        .then(function() {
            console.log("processed information successfully");
        }).catch((err) => {
            console.error("error processing information: " + err);
        });
    }
};

// Simulate an asynchronous operation to validate the age
async function validateAge(age) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            if (age < 0) {
                reject("Invalid age");
            } else {
                resolve(age);
            }
        }, 2000);
    })
};

// Initialize the process of validating the age and updating the status
async function initProcess(userName) {
    statusParagraph.innerText = "Processing information...";
    try {
        const age = await validateAge(ageInput.value);
        const result = age >= 18 ? `The user ${userName} is an adult` : `The user ${userName} is a minor`;
        statusParagraph.innerText = result;
    }
    catch (error) {
        statusParagraph.innerText = error;
    }
};