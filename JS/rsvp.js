const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");
        submitBtn = form.querySelector(".submit");
        homeBtn = form.querySelector(".homeBtn");

/* This works ONLY if ALL inputs are filled in
nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})
*/

//works if any fields are filled out or not ?? //
nextBtn.addEventListener("click", () => form.classList.add('secActive'));

backBtn.addEventListener("click", () => form.classList.remove('secActive'));

submitBtn.onclick = function() {
    form.classList.remove('secActive');
    form.classList.add('subActive');
    return false;
}   

homeBtn.onclick = function() {
    window.open("index.html", "_self");
    return false;
}  



// Login.JS //

function validate(){
    var password = document.getElementById("password").value;
    if(password=="password"){
        window.open("rsvp.html", "_self");
        return false;
    }
    else{
        alert("login failed");
    }
}
//end of login.js //

//registry.js //
