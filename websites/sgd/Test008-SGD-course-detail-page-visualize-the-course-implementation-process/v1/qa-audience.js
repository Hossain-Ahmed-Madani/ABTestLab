// QA Cookie: qa5=true

function checkCookie(name, value) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie === `${name}=${value}`) {
            return true;
        }
    }
    return false;
}

const cookieExists = checkCookie("qa5_cookie", "true");

if (cookieExists) {
    return true;
} else if (location.href.includes("qa5=true")) {
    document.cookie = "qa5_cookie=true;path=/";
    return true;
}
