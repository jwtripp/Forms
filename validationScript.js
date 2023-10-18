// JavaScript code for form validation WEB115 Week 8

// Implement a function
    document.getElementById('myForm').addEventListener('submit', function (event) {// Add an event listener
        event.preventDefault();// Prevent form from submitting

        let inputField = document.getElementById('inputField');// Retrieve the input field value from FormsAssignment.html
    
        let validateInput = inputField.value;// Populates variable validateInput with input entered from form
        let alphanumericRegex = /^[a-zA-Z0-9]+$/;// Use regex to validate the input

        if (alphanumericRegex.test(validateInput)) {// Check if the input value matches the pattern
            alert('Thank you! Form submitted successfully!');// Display a confirmation if the input is valid and 'submits' the form*
            this.reset(); // Resets the form for next use
        } 
        else {// Displays alert if input is invalid and does not submit the form
            alert('You may use only letters and numbers!');// Invalid input: display error message
        }
    });