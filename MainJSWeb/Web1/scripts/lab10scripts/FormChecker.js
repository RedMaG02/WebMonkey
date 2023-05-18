document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
});


document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("password").addEventListener("blur", validatePassword);
document.getElementById("confirmPassword").addEventListener("blur", validateConfirmPassword);
document.getElementById("age").addEventListener("blur", validateAge);
document.getElementById("city").addEventListener("blur", validateCity);
document.getElementById("favoriteSubject").addEventListener("blur", validateFavoriteSubject)
document.getElementById("payment").addEventListener("blur", validatePayment)
document.getElementById("phone").addEventListener("blur", validatePhone);
document.getElementById("fullName").addEventListener("blur", validateFullName);


function validateName() {
    var name = document.getElementById("name").value;
    var nameRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;

    if (!nameRegex.test(name)) {
        showError("name", "Поле 'Логин' должно содержать только буквы.");
    } else {
        hideError("name");
    }
}

function validateEmail() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[a-zA-Z0-9]{2,}([.-]?[a-zA-Z0-9]{2,})*@[a-zA-Z0-9]{2,}([.-]?[a-zA-Z0-9]{2,})*\.[a-zA-Z0-9]{2,4}$/;

    if (email.trim() === "") {
        showError("email", "Поле 'Email' обязательно для заполнения.");
    } else if (!emailRegex.test(email)) {
        showError("email", "Некорректный формат Email.");
    } else {
        hideError("email");
    }
}

function validatePhone() {
    var phone = document.getElementById("phone").value;
    var phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phone)) {
        showError("phone", "Поле 'Телефон' должно содержать 10 цифр без пробелов и разделителей.");
    } else {
        hideError("phone");
    }
}

function validateFullName() {
    var fullName = document.getElementById("fullName").value;
    var fullNameRegex = /^[a-zA-Zа-яА-ЯёЁ]+\s[a-zA-Zа-яА-ЯёЁ]+(\s[a-zA-Zа-яА-ЯёЁ]+)?$/;

    if (!fullNameRegex.test(fullName)) {
        showError("fullName", "Поле 'ФИО' должно содержать (Фамилия Имя [Отчество]) разделенные пробелами.");
    } else {
        hideError("fullName");
    }
}

function validatePassword() {
    var password = document.getElementById("password").value;

    if (password.trim() === "") {
        showError("password", "Поле 'Пароль' обязательно для заполнения.");
    } else {
        hideError("password");
    }
}

function validateConfirmPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (confirmPassword.trim() === "") {
        showError("confirmPassword", "Поле 'Подтвердите пароль' обязательно для заполнения.");
    } else if (confirmPassword !== password) {
        showError("confirmPassword", "Пароли не совпадают.");
    } else {
        hideError("confirmPassword");
    }
}

function validateAge() {
    var age = document.getElementById("age").value;

    if (isNaN(age) || age < 14 || age > 140) {
        showError("age", "'Возраст' должен быть числом от 14.1 до 140.");
    } else {
        hideError("age");
    }
}


function validateCity() {
    var city = document.getElementById("city").value;
    var cityRegex = /^[a-zA-Zа-яА-ЯёЁ\s.-]*$/;

    if (!cityRegex.test(city)) {
        showError("city", "Поле 'Город' может содержать только буквы, пробелы и символы .,-");
    } else {
        hideError("city");
    }
}


function validateFavoriteSubject() {
    var favoriteSubject = document.getElementById("favoriteSubject").value;

    if (favoriteSubject.trim() === "") {
        showError("favoriteSubject", "Предмет выбрать обязательно.");
    }else if (favoriteSubject !== "web") {
        showError("favoriteSubject", `Подумайте ещё.`);
    }
    else {
        hideError("favoriteSubject");
    }
}

function validatePayment() {
    var payment = document.getElementById("payment").value;

    if (payment.trim() === "") {
        showError("payment", "Укажите желаемую зарплату, не стесняйтесь.");
    } else if(payment > 0){
        showError("payment", "Мы семья, работаем на энтузиазме!.");
    }
    else {
        hideError("payment");
    }
}

function showError(fieldId, errorMessage) {
    var field = document.getElementById(fieldId);
    field.classList.add("error");

    var errorElement = document.getElementById(fieldId + "Error");
    if (!errorElement) {
        errorElement = document.createElement("div");
        errorElement.id = fieldId + "Error";
        errorElement.classList.add("error");
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
    errorElement.textContent = errorMessage;
}

function hideError(fieldId) {
    var field = document.getElementById(fieldId);
    field.classList.remove("error");

    var errorElement = document.getElementById(fieldId + "Error");
    if (errorElement) {
        errorElement.parentNode.removeChild(errorElement);
    }
}
