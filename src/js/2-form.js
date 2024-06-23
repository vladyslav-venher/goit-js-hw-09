const form = document.querySelector(".feedback-form");

const formData = {
    email: "",
    message: ""
};

const storedData = localStorage.getItem("feedback-form-state");
if (storedData) {
    const parsedData = JSON.parse(storedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
};

form.addEventListener('input', handlerInput);
function handlerInput(event) {
    if (event.target === document.querySelector('input[name="email"]')) {
      formData.email = event.target.value.trim();
    } else if (event.target === document.querySelector('textarea[name="message"]')) {
      formData.message = event.target.value.trim();
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
    event.preventDefault();
    
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
        document.querySelector('input[name="email"]').value = "";
        document.querySelector('textarea[name="message"]').value = "";
    }
};