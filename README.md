# Registration-form-login-page-personal-account
This project was created as a test assignment for the itlogia Academy. It includes the implementation of a user registration system with validation and functionality for login and a personal account.

Features

Registration Page:

Modified form validation code with the following requirements:
All fields must be filled.
Full Name can only contain letters and spaces.
Your username can contain only letters, numbers, underscores, and hyphens.
Validated the entered email.
The password field must contain a minimum of 8 characters, including:
At least one uppercase letter.
At least one digit.
At least one special character.
Password and Repeat Password must match.
User must agree to the terms.
If a field fails validation, the field border turns red, and an error message appears below the field.
Upon successful registration:
Display a modal window with the message "A link has been sent to your email. Click on it to complete the registration." and an "OK" button.
Save user data to an object and then store that object in an array called clients in Local Storage.
Login Page:

Clicking on the "Already have an account?" link or the "OK" button in the modal window triggers a transition to the login page.
The "Already have an account?" link is not removed; instead, its text is changed to "Registration."
When clicking the "Sign In" button:
If the Username and Password fields are empty, display an error message and make the field border red.
If both fields are filled, check if there is a user with that username in the clients array in Local Storage.
If not found, display an error message below the username field: "This user is not registered."
If found but the password does not match, underline the password field in red, and display an error: "Incorrect password."
If found and the password is correct, simulate a transition to the personal account.
Personal Account Page:

To simulate entering the personal account:
Replace the header text with "Welcome, name!" where name is the full name entered during registration.
Change the text on the "Sign In" button to "Exit" and modify its listener to simply reload the page, simulating a logout.
Remove all other elements, including text under the header, Username and Password fields, and the "Registration" link.
Note:
LocalStorage stores data about all registered users in the form of objects in the clients array. Data about the first user should not be deleted when a second user registers.

Instructions:
Clone the repository.
Open the index.html file in a web browser to interact with the registration, login, and personal account pages.
