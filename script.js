let cvBtn = document.getElementById("cvBtn");
let submit = document.getElementById("submit");
let bar = document.getElementById("bar");

cvBtn.addEventListener("click", function(){
    let link = document.createElement('a');
    link.href = 'khaista_Rehman.pdf';  // Replace with your CV file's path
    link.download = 'khaista_Rehman.pdf';  // Set the filename for the download
    link.click();
})
submit.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" && pass.value == ""){
        alert("Fill deatail")
    }else{
        alert("submitted successfully")
        email.value = "";
        pass.value = "";
        msg.value = "";
    }
})

let ul = document.querySelector("ul")
bar.addEventListener("click",function(){
    ul.classList.toggle("showData");
    if(ul.classList.contains ("showData")){
        bar.className = "fa-solid fa-xmark"
    }else{
         bar.className = "fa-solid fa-bars"
    }
})

 
