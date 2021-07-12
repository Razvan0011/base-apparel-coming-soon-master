const btn = document.querySelector("#button");
const email = document.querySelector("#email");
const warning = document.querySelector("#warning");
const frm = document.querySelector("form");
const label = document.querySelector("#label");

btn.addEventListener("click", (e) => {
    // console.log("it works");
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        console.log("it works");
        email.classList.remove("short");
        warning.classList.remove("show");
        frm.classList.remove("inner-border");
        label.style.visibility = "hidden";

    } else {
        email.classList.add("short");
        warning.classList.add("show");
        frm.classList.add("inner-border");
        label.style.visibility = "visible";
    }
    e.preventDefault();
});