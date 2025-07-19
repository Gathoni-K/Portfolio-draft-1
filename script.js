const contactForm = document.querySelector(".contactForm");
//references my form
const name = document.getElementById("name");
//references our name input
const email = document.getElementById("email");
//references our email field
const message = document.getElementById("message");
//references our message field
const success = document.getElementById("successMessage");
//references our succes message div
const button = document.getElementById("submit-button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    //prevents default submission of the form

     let hasError = false;

    if (name.value.trim() === "" ) {
//gets our value types in the name field
//the .trim() - used to remove any whitespaces
        const nameError = document.getElementById("name-error");
        //selects our name error field
        nameError.innerText = "Name is required";
        nameError.style.display = "block";
        //makes our error message visible
    }
    const emailValue = email.value.trim();
    //stores the value of our email field in this variable
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    //ensure to use a regexObject, wrap it in slashes instead of double quotes in order touse the '.test' method
    let isValid = emailRegex.test(emailValue);
    //checks if our email is valid
    if (emailValue === "" || !isValid) {
        const emailError = document.getElementById("email-error");
        emailError.innerText = email.value === "" ? "Email is required" : "Enter a valid email";
        //sets the inner text of our email error depending on the condition
        emailError.style.display = "block";
    }


    if (message.value === "" ) {
        const messageError = document.getElementById("message-error");
        messageError.innerText = "Enter your message here";
        messageError.style.display = "block";
    }

    if (!hasError) {
        success.innerText = "Form submitted successfully";
        success.style.display = "block";
    }
});