const form = document.getElementById("inquiryForm");
const msg = document.getElementById("message");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const messageBox = document.getElementById("messageBox").value.trim();

    if(
        name === "" ||
        email === "" ||
        phone === "" ||
        subject === "" ||
        messageBox === ""
    ){
        msg.className = "error";
        msg.innerHTML = "⚠ Please fill all required fields.";
        return;
    }

    msg.className = "success";
    msg.innerHTML = "✓ Inquiry submitted successfully! Our team will contact you shortly.";

    form.reset();

    setTimeout(()=>{
        msg.style.display="none";
        msg.className="";
    },5000);

});