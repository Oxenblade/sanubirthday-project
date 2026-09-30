/* =========================================
   CURRENT PAGE
========================================= */

let currentPage = 1;

const totalPages = 6;


/* =========================================
   CHANGE PAGE
========================================= */

function showPage(pageNumber) {


    // Prevent going outside the pages

    if (pageNumber < 1) {

        pageNumber = 1;

    }


    if (pageNumber > totalPages) {

        pageNumber = totalPages;

    }


    // Hide all pages

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    // Show selected page

    const selectedPage =
        document.getElementById(
            "page" + pageNumber
        );


    selectedPage.classList.add("active");


    // Update current page

    currentPage = pageNumber;


    // Update page number

    document.getElementById(
        "pageNumber"
    ).innerText =
        currentPage + " / " + totalPages;


    // Update navigation buttons

    updateNavigation();

}


/* =========================================
   NEXT PAGE
========================================= */

function nextPage() {

    if (currentPage < totalPages) {

        showPage(currentPage + 1);

    }

}


/* =========================================
   PREVIOUS PAGE
========================================= */

function previousPage() {

    if (currentPage > 1) {

        showPage(currentPage - 1);

    }

}


/* =========================================
   NAVIGATION BUTTONS
========================================= */

function updateNavigation() {


    const backButton =
        document.getElementById(
            "backButton"
        );


    const forwardButton =
        document.getElementById(
            "forwardButton"
        );


    // First page

    if (currentPage === 1) {

        backButton.style.visibility =
            "hidden";

    }

    else {

        backButton.style.visibility =
            "visible";

    }


    // Last page

    if (currentPage === totalPages) {

        forwardButton.style.visibility =
            "hidden";

    }

    else {

        forwardButton.style.visibility =
            "visible";

    }

}


/* =========================================
   FLOWER MESSAGES
========================================= */

function showMessage(number) {


    const message =
        document.getElementById(
            "flowerMessage"
        );


    if (number === 1) {

        message.innerText =
            "I hope you always have reasons to smile, even on the ordinary days. 🌷";

    }


    else if (number === 2) {

        message.innerText =
            "Some of the smallest moments can become the memories we treasure most. 🌸";

    }


    else if (number === 3) {

        message.innerText =
            "Here's to another year of adventures, laughter and wonderful memories. 🌹";

    }


    // Small animation

    message.style.animation = "none";

    message.offsetHeight;

    message.style.animation =
        "messageAppear 0.5s ease";

}


/* =========================================
   FINAL SURPRISE
========================================= */

function openFinalMessage() {


    const finalMessage =
        document.getElementById(
            "finalMessage"
        );


    finalMessage.classList.add("show");


    // Change gift appearance

    const gift =
        document.querySelector(
            ".gift-box"
        );


    gift.innerText = "✨";


}


/* =========================================
   START WEBSITE
========================================= */

showPage(1);