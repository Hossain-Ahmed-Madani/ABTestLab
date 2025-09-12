/* 
Test Name: TSM - Seat Rating 4.5+  Pop Up & Filter
Ticket: https://seatplan.atlassian.net/jira/software/c/projects/ECX/boards/46?selectedIssue=ECX-145
Test container: https://app.convert.com/accounts/1004737/projects/1004631/experiences/1004165791/summary


Control: https://uat.seatplan.com/london/hamilton-tickets/tickets/30-sep-2025/7-30pm/?_conv_eforce=1004165791.1004391814&utm_campaign=sp5
V1:  https://uat.seatplan.com/london/hamilton-tickets/tickets/30-sep-2025/7-30pm/?_conv_eforce=1004165791.1004391815&utm_campaign=sp5


location: if true -> !!(window.appRoute === "ticketing_date_and_time" && window.highRatedSeatsCount > 0)
function: window.tsmHighRatedSeatsFilterAbTest();

*/

(function () {
    function waitForElement(predicate, callback, timer = 10000, frequency = 150) {
        if (timer <= 0) {
            console.warn(`Timeout reached while waiting for condition: ${predicate.toString()}`);
            return;
        } else if (predicate && predicate()) {
            callback();
        } else {
            setTimeout(() => waitForElement(predicate, callback, timer - frequency, frequency), frequency);
        }
    }

    waitForElement(
        () => typeof window.tsmHighRatedSeatsFilterAbTest === "function",
        () => {
            console.log("EXP-: All | TSM | Seat Rating Pop Up & Filter | A/B");
            window.tsmHighRatedSeatsFilterAbTest();
        }
    );
})();
