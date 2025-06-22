document.addEventListener("DOMContentLoaded", function() {
    const newParagraph = document.createElement("p")
    newParagraph.id  = "text"
    newParagraph.textContent = "This is really cool!"
    const main = document.getElementById("main")
    main.appendChild(newParagraph)
});

function addingEventListener() {
    const button = document.getElementById('button')
    button.addEventListener('click', function() {
        alert ('I was Clicked')
    })
    
};

