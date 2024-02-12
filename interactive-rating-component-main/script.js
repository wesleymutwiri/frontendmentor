
const form = document.getElementById("rating-form");
form.addEventListener("submit", (event) => {
    if(!form.checkValidity || form.checkValidity()){
        event.preventDefault();
        form.reset();
    }
});

function submitRating(e) {
    if(!form.checkValidity || form.checkValidity()) {
        const rating_display = document.getElementById("rating-selected");
        let thank_you_state = document.getElementsByClassName("thank-you-state")[0];
        thank_you_state.style.display = "flex";
        let rating_selected = form.elements["rating"].value;
        rating_display.innerHTML = rating_selected;


        let rating_card = document.getElementsByClassName("rating-state")[0];
        rating_card.style.display = "none";
    }
}