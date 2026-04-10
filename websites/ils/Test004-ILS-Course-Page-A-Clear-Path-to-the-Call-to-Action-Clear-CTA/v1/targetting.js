const maxTime = 25000; // 25s
const intervalTime = 100;
let elapsed = 0;

return new Promise(function (resolve) {
    var interval = setInterval(function () {
        if (document.querySelector("#sud-formular")) {
            clearInterval(interval);
            resolve(true);
        }

        elapsed += intervalTime;

        if (elapsed >= maxTime) {
            clearInterval(interval);
            resolve(false);
        }
    }, intervalTime);
});
