$(document).ready(function() {
    $("#registrationForm").submit(function(event) {
        event.preventDefault();

        validateName();
        validatePhone();
        validateFullName();
        validateEmail();
        validatePassword();
        validateConfirmPassword();
        validateAge();
        validatePayment();
        validateCity();
        validateFavoriteSubject();

    });


    $("#name").blur(validateName);
    $("#phone").blur(validatePhone);
    $("#fullName").blur(validateFullName);
    $("#email").blur(validateEmail);
    $("#password").blur(validatePassword);
    $("#confirmPassword").blur(validateConfirmPassword);
    $("#age").blur(validateAge);
    $("#payment").blur(validatePayment);
    $("#city").blur(validateCity);
    $("#favoriteSubject").blur(validateFavoriteSubject);

    function validateName() {
        var name = $("#name").val();
        var nameRegex = /^[a-zA-Zа-яА-ЯёЁ]+$/;

        if (!nameRegex.test(name)) {
            showError("name", "Поле 'Имя' должно содержать только буквы.");
        } else {
            hideError("name");
        }
    }

    function validatePhone() {
        var phone = $("#phone").val();
        var phoneRegex = /^\d{10}$/;

        if (!phoneRegex.test(phone)) {
            showError("phone", "Поле 'Телефон' должно содержать 10 цифр без пробелов и разделителей.");
        } else {
            hideError("phone");
        }
    }

    function validateFullName() {
        var fullName = $("#fullName").val();
        var fullNameRegex = /^[a-zA-Zа-яА-ЯёЁ]+\s[a-zA-Zа-яА-ЯёЁ]+(\s[a-zA-Zа-яА-ЯёЁ]+)?$/;

        if (!fullNameRegex.test(fullName)) {
            showError("fullName", "Поле 'ФИО' должно содержать (Фамилия Имя [Отчество]) разделенные пробелами.");
        } else {
            hideError("fullName");
        }
    }

    function validateEmail() {
        var email = $("#email").val();
        var emailRegex = /^[a-zA-Z0-9]{2,}([.-]?[a-zA-Z0-9]{2,})*@[a-zA-Z0-9]{2,}([.-]?[a-zA-Z0-9]{2,})*\.[a-zA-Z0-9]{2,4}$/;

        if (!emailRegex.test(email)) {
            showError("email", "Неверный формат адреса электронной почты.");
        } else {
            hideError("email");
        }
    }

    function validatePassword() {
        var password = $("#password").val();

        if (password.length < 6) {
            showError("password", "Пароль должен содержать не менее 6 символов.");
        } else {
            hideError("password");
        }
    }

    function validateConfirmPassword() {
        var password = $("#password").val();
        var confirmPassword = $("#confirmPassword").val();

        if (password !== confirmPassword) {
            showError("confirmPassword", "Пароли не совпадают.");
        } else {
            hideError("confirmPassword");
        }
    }

    function validateAge() {
        var age = $("#age").val();

        if (isNaN(age) || age < 14 || age > 140) {
            showError("age", "Возраст должен быть числом от 14 до 140.");
        } else {
            hideError("age");
        }
    }


    function validateCity() {
        var city = $("#city").val();
        var cityRegex = /^[a-zA-Zа-яА-ЯёЁ\s.-]*$/;

        if (!cityRegex.test(city)) {
            showError("city", "Поле 'Город' может содержать только буквы, пробелы и символы .,-");
        } else {
            hideError("city");
        }
    }
    function validateFavoriteSubject() {
        var favoriteSubject = $("#favoriteSubject").val();

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
        var payment = $("#payment").val();

        if (payment.trim() === "") {
            showError("payment", "Укажите желаемую зарплату, не стесняйтесь.");
        } else if(payment > 0){
            showError("payment", "Мы семья, работаем на энтузиазме!.");
        }
        else {
            hideError("payment");
        }
    }


    function showError(field, message) {
        $("#" + field + "Error").text(message).show();
    }

    function hideError(field) {
        $("#" + field + "Error").text("").hide();
    }
});