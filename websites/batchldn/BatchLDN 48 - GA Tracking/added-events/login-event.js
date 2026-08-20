// ============================================================
// Shopify Standard Event: null
// Publish Shopify Custom Event: login
// GA4 Event: login
// ============================================================

// {% if customer %}
// <script>
(function () {
    const currentCustomerId = "{{ customer.id }}";

    const storedCustomerId = localStorage.getItem("ga_login_customer_id");
    const loginSent = sessionStorage.getItem("ga_login_sent");

    // Already published during this session
    if (loginSent === "1") return;

    // Customer was already tracked in a previous session
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

    console.log("login : Custom Event Published", data);
})();
// </script>
// {% endif %}
