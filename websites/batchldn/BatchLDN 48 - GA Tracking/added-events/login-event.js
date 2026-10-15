

// ============================================================
// Shopify Standard Event: null
// Publish Shopify Custom Event: login
// GA4 Event: login
// ============================================================

// {% if customer %}
// <script> 
//       window.gaLoginCustomerId = customer.id;
// </script>
// <script>

(function () {
    const currentCustomerId = window.gaLoginCustomerId;

    if (!currentCustomerId) {
        // Logged out / not logged in — clear all tracking state
        // so the next login (same or different account) fires fresh
        sessionStorage.removeItem("ga_login_sent");
        localStorage.removeItem("ga_login_customer_id");
        return;
    }

    const storedCustomerId = localStorage.getItem("ga_login_customer_id");
    const loginSent = sessionStorage.getItem("ga_login_sent");

    // Already published during this session
    if (loginSent === "1") return;

    // Customer was already tracked in a previous session (and hasn't logged out since)
    if (storedCustomerId === currentCustomerId) {
        sessionStorage.setItem("ga_login_sent", "1");
        return;
    }

    // Publish the Shopify custom login event
    const data = {
        customerId: currentCustomerId,
    };

    Shopify.analytics.publish("login", data);
    sessionStorage.setItem("ga_login_sent", "1");
    localStorage.setItem("ga_login_customer_id", currentCustomerId);
})();

// </script>
// {% endif %}
