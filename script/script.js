function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(star);
}

setInterval(createStar, 500);

function validateForm() {
    let name = document.getElementById("FormControlInput1").value;
    let email = document.getElementById("FormControlInput2").value;
    let message = document.getElementById("FormControlTextarea1").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return false;
    }

    // Validate email format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}