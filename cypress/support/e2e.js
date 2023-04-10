Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })

// Hide XHR requests from the command log
    const app = window.top;
if (
    app &&
    !app.document.head.querySelector("[data-hide-command-log-request]")
) {
    const style = app.document.createElement("style");
    style.innerHTML =
    ".command-name-request, .command-name-xhr { display: none }";
    style.setAttribute("data-hide-command-log-request", "");

    app.document.head.appendChild(style);
}
