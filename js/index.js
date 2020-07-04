
const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {

    const bar = skill.querySelector(".bar");

    const width = bar.textContent;
    bar.style.width = width;

});


$(".page-scroll").click(handleNavLinks);

// TakeAway: Animated Scrolling event on nav link click.
function handleNavLinks(e) {  
    e.preventDefault();

    let destElementId = $(this).attr("href");
    let destElement = $(destElementId);

    // TakeAway: We need to include jQuery UI library for "easeInExpo" effect.
    $("html, body").stop().animate({
        // 60 px is substracted to offset for the height of the nav-bar.
        scrollTop: destElement.offset().top - 60
    }, 1500, "easeInExpo");
}

// To hide the menu overlay when link is clicked.
const checkBox = $(".toggler");
const menuLinks = $(".menu-links-content a");
menuLinks.click(() => {
    checkBox.prop("checked", false);
});

// Contact Form Validations
const contactForm = $(".contact-us-form");
contactForm.on("submit", (e) => {
    
    const name = contactForm.find("#name");
    const email = contactForm.find("#email");
    const message = contactForm.find("#message");

    if (!name.val()) {
        e.preventDefault();

        name.parent().addClass("error");
    }
    else {
        name.parent().removeClass("error");
    }

    if (!email.val()) {
        e.preventDefault();

        email.parent().addClass("error");
    }
    else if (!validateEmail(email.val())) {
        email.parent().addClass("error");
    }
    else {
        email.parent().removeClass("error");
    }

    if (!message.val()) {
        e.preventDefault();

        message.parent().addClass("error");
    }
    else {
        message.parent().removeClass("error");
    }

});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}