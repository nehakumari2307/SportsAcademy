const fn = () => {
    const options = document.getElementById("options");
    $(options).bind('click', (event) => {
        const target = event.target;
        const text = target.text();
    });
    
    const slotSelected = (slotName) => {
        switch (slotName) {
            case "Events" : window.location.href = "index.html";
                            break;
            case "Academy" : window.location.href = "academy.html";
                            break;
            case "Contact" : window.location.href = "contact.html";
                            break;
        }    
    }
}

function academyClick() {
    window.location.href = "academy.html";
}

function contactClick() {
    window.location.href = "contact.html";
}

$(document).ready(function() {
    fn();
 });