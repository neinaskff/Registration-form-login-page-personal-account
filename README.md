# Registration-form-login-page-personal-account
 > This project was created as a test assignment for the itlogia Academy. It includes the implementation of a user registration system with validation and functionality for login and a personal account.


### Features

Creation of the registration page:
- A page was created using the Figma design mockup.
- JavaScript and CSS files were connected to the page.

# 💻 Registration Page:

 >  Modified form validation code with the following requirements:
1. All fields must be filled.
2. Full Name can only contain letters and spaces.
3. Username can contain only letters, numbers, underscores, and hyphens.
4. Validated the entered email.
5. The password field must contain a minimum of 8 characters, including:
* *At least one uppercase letter.*
* *At least one digit.*
* *At least one special character.*
6. Password and Repeat Password must match.
7. User must agree to the terms.
8. If a field fails validation, the field border turns red, and an error message appears below the field.
9. Upon successful registration:
*  *Display a modal window with the message "A link has been sent to your email. Click on it to complete the registration." and an "OK" button.*
*  *Save user data to an object and then store that object in an array called clients in Local Storage.*
  




# 👤 Login Page:

1. Clicking on the "Already have an account?" link or the "OK" button in the modal window triggers a transition to the login page.
2. The "Already have an account?" link is not removed; instead, its text is changed to "Registration."
3. When clicking the "Sign In" button:
* *If the Username and Password fields are empty, display an error message and make the field border red.*
* *If both fields are filled, check if there is a user with that username in the client's array in Local Storage.*
* *If not found, display an error message below the username field: "This user is not registered."*
* *If found but the password does not match, underline the password field in red, and display an error: "Incorrect password."*
* *If found and the password is correct, simulate a transition to the personal account.*




# 🎯 Personal Account Page:

To simulate entering the personal account:
* *Replace the header text with "Welcome, name!" where the name is the full name entered during registration.*
* *Change the text on the "Sign In" button to "Exit" and modify its listener to reload the page, simulating a logout simply.*
* *Remove all other elements, including text under the header, Username and Password fields, and the "Registration" link.*

# ➕ Additional Details:

### Fonts:
All fonts are connected to the website according to the design mockup.

### JavaScript:

1. An event handler for the full page load was created.
2. Input of numbers is prohibited in the "Full Name" field.
3. Input of dots and commas is prohibited in the "Your username" field.
4. A corresponding message is logged to the console when the checkbox value is changed.
5. Checks on pressing the "Sign Up" button include:
- *Verification of a value in each text field.*
- *Password length check (minimum 8 characters).*
- *Confirmation of matching passwords in the two text fields.*
- *Verification of checkbox selection.*
6. Handling successful registration:
- *If all checks are successful, a popup appears with a message and an "OK" button.*
- *Clicking the "OK" button closes the window, clears the form, and redirects the user to the login page.*
7. Imitating a transition to the login page:
- *The text "Get your free account" is replaced with "Log in to the system."*
- *Blocks with the "Full Name," "E-mail," and "Repeat Password" fields are removed.*
- *The checkbox block is also removed.*
- *The text in the button is changed to "Sign In."*
- *The "Already have an account-?" link is removed.*
- *The event listener for the "Sign In" button is updated to check only if both fields (Username and Password) are filled.*
8. Upon successful completion, a message is displayed via alert: "Welcome, username!".

# 🗒  Note:

LocalStorage stores data about all registered users in the form of objects in the clients' array. Data about the first user should not be deleted when a second user registers.

# ⚙️ Instructions:

* Clone the repository.
* Open the index.html file in a web browser to interact with the registration, login, and personal account pages.
