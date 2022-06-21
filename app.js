// Internet connection checker
function connection_checker() {
    // Getting full screen connection status
    const full_screen_widget = document.getElementById("connection-checker-full-screen")
    // Getting "offline-error-activated" status
    const offline_error_activated = document.getElementsByClassName("offline-error-activated")[0]
    // If the user is online and disconnection error is activated
    if (navigator.onLine == true && offline_error_activated != undefined) {
        // Add a green background color for disconnection error
        full_screen_widget.style.backgroundColor = "#44ff6fba"
        // Adding 1 second delay to avoid interference with changing background color smoothly
        setTimeout(function () {
            // Hiding disconnection error with animation
            full_screen_widget.setAttribute("class", "flip-out-diag-2-tl")
        }, 1000)
        // Adding 2 seconds delay to avoid interference with hiding animation
        setTimeout(function () {
            // Hiding disconnection error element
            full_screen_widget.style.visibility = "hidden"
        }, 2000)
        // Enable all elements click and selection
        document.body.style.userSelect = "auto"
        document.body.style.pointerEvents = "auto"
    } else if (navigator.onLine == false) { // If user is offline
        // Display disconnection error with animation
        full_screen_widget.setAttribute("class", "flip-in-diag-2-br offline-error-activated")
        // Display disconnection error element
        full_screen_widget.style.visibility = "visible"
        // Add a red background color for disconnection error
        full_screen_widget.style.backgroundColor = "#ff5544ed"
        // Disable all elements click and selection
        document.body.style.userSelect = "none"
        document.body.style.pointerEvents = "none"
    }
}

// Checking the user internet connection every 1 second
setInterval(connection_checker, 1000)