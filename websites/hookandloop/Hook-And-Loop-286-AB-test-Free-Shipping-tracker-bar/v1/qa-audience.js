// QA Parameter: &qa5=true
// QA Cookie: varify_qa5_cookie=true

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

const cookieExists = checkCookie("varify_qa5_cookie", "true");

if (cookieExists) {
    return true;
} else if (location.href.includes("qa5=true")) {
    document.cookie = "varify_qa5_cookie=true;path=/";

    return true;
}
