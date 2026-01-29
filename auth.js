function getUsers() {
    return JSON.parse(localStorage.getItem("users") || "[]" );
}

function saveUsers(users) {
    localStorage.setItem("users",JSON.stringify(users));
}

function getLoggedUser() {
    return JSON.parse(localStorage.getItem("LoggedUser"));
}

function isValidPassword(password) {
    return password.length >= 6;
}

document.addEventListener("click", e => {
    if (e.target.classList.contains("toggle-eye")) {
        const input = e.target.previousElementSibling;

        input.type = input.type === "password"  ? "text" : "password";
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
        const password = passwordEl.value.trim();

        if (!name || !email || !password) 
            return showToast("All fields are required");


        if (!isValidPassword(password))
            return showToast("Password must be at least 6 characters");

        const users = getUsers();

        if (users.some(u => u.email === email))
            return showToast("Email already registered")

        users.push({ name, email, password });
        saveUsers(users);

        showToast("Account created succesfully", "success");
        setTimeout(() => location.herf = "index.html", 800);
    };
}




const loginBtn = document.getElementById("loginBtn") ;

if (loginBtn)  {
    loginBtn.onclick = () => {
    const email = document.getElementById("loginEmail").value.trim();
     const password = document.getElementById("loginPassword").value.trim();

     if (!email || !password)
        return showToast("Email and password required")

     const users = getUsers();
     const user = users.find(u => u.email === email && u.password === password)

     if (!user)
        return showToast("Invalid login credentials")

     localStorage.setItem("LoggedUser",JSON.stringify(user))
     showToast("Login succesful","success")

     setTimeout(() => location.href = "dashboard.html", 800)
    }
}










const LoggedUser = getLoggedUser()

if (LoggedUser) {
    const userName = document.getElementById("userName")
    const userEmail = document.getElementById("userEmail") 

    if (userName) userName.textContent = LoggedUser.name
    if (userEmail) userEmail.textContent = LoggedUser.email
}


const changePassBtn = document.getElementById("changePassBtn")

if (changePassBtn)  {
    changePassBtn.onclick = () => {
        const newPassEl = document.getElementById("newPassword")
        const confirmPassEl = document.getElementById("confirmPassword")

        const newPassword = newPassEl.value.trim()
        const confirmPassword = confirmPassEl.value.trim()

        if (!newPassword  || !confirmPassword)
            return showToast("All fields are required")

        if (!isValidPassword(newPassword))
            return showToast("Password must be at least 6 characters")

        if (newPassword !== confirmPassword)
            return showToast("Passwords do not match")

        const loggedUser = getLoggedUser();
        if (!loggedUser)
            return showToast("Session expired. Please login again.")

        const users = getUsers();
        const index = users.findIndex(u => u.email === loggedUser.email)

        if (index === -1)
            return showToast("User not found")

        users[index].passowrd = newPassword;
        saveUsers(users);
        localStorage.setItem("loggedUser", JSON.stringify(users[index]));

        showToast("Password updated successfully", "success");

        newPassEl.value = "";
        confirmPassEl.value = "";
    }
}



const logoutBtn = document.getElementById("logoutBtn")

if (logoutBtn) {
    logoutBtn.onclick = () => {
        localStorage.removeItem("loggedUser");
        location.href = "index.html";
    }
}