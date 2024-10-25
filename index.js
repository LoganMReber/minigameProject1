let counter = 5;

const counter_display = document.querySelector("#counter_value");
const increaser = document.querySelector("#increase_button");
const decreaser = document.querySelector("#decrease_button");
counter_display.innerHTML = counter;

increaser.addEventListener("click",()=> {
    counter += 1;
    counter_display.innerHTML = counter;
} )

decreaser.addEventListener("click",()=> {
    counter -= 1;
    counter_display.innerHTML = counter;
} )
