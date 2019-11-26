function checkIfLoggedIn_and_redirect() {
    if (user === null) {
        alert("Not logged in");
        window.location.href = "index.html";
    }
}
