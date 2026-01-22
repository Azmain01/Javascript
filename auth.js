function getUser() {
    return JSON.parse(localStorage.getitem("users") || "[]" );
}

function saveUsers(users) {
    localStorage.setItem("users",JSON.stringify(users));
}

function getLoggedUser() {
    return JSON.parse(localStorage.getitem("LoggedUser"));
}

function isValidPassword(password) {
    return password.lenght >= 6;
}

document.addEventListener("click", e => {
    if (e.target.classList.contains("toggle-eye")) {
        const input = e.target.previousElementSibling;

        input.type = input.type === "password"  ? "text" : "passowrd";
        e.target.classList.toggle("fa-eye");
        e.target.classList.toggle("fa-eye-slash");
    }
});

const signupBtn = document.getElementById("signupBtn");

if (signupBtn) {
    signupBtn.onclick = () => {
        const nameEl = document.getElementById("name");
        const emailEl = document.getElementById("email");
        const passwordEl = document.getElementById("password");

        const name = nameEl.value.trim();
        const email = emailEl.value.trim();
        const passowrd = passwordEl.value.trim();

        if (!name || !email || !passowrd) 
            return showToast("All fields are required");


        if (!isValidPassword(passowrd))
            return showToast("Password must be at least 6 characters");

        const users = getUsers();

        if (users.some(u => u.email === email))
            return showToast("Email already registered")

        users.push({ name, email, passowrd });
        saveUsers(users);

        showToast("Account created succesfully", "success");
        setTimeout(() => location.herf = "index.html", 800);
    };
}