const profilePic = document.getElementById("upload-picture");
const newProfile = document.querySelectorAll(".newProfile");
const post = document.querySelector(".mind");
const createPost = document.querySelector(".create-post");
const cross = document.querySelector(".cro");
const container = document.querySelector(".container");
const posted = document.querySelector(".posted");
const textArea = document.getElementById("txt");
const postPic = document.querySelector(".post-pic");
const uploadPhoto =document.getElementById("post-picture");
localStorage.setItem('sharedData', 'Hello from script1');

// console.log(newProfile);
if(post){
post.addEventListener("click" , ()=>{
   createPost.classList.remove("activePost");
   container.classList.add("activeCon");
});
} 
if(cross){
cross.addEventListener("click" , ()=>{
   createPost.classList.add("activePost");
   container.classList.remove("activeCon");
   document.querySelector(".noPic").classList.remove("disableNopic");
   document.querySelector(".post-pic").classList.add("disableImg");
   posted.classList.add("disable");
   textArea.value="";
   check=true;
});
}
// outside the div

if(profilePic){

profilePic.addEventListener("change" , ()=>{
    console.log("enterd");
   let len = newProfile.length;
   localStorage.setItem('source' ,  URL.createObjectURL(profilePic.files[0]) );
   for(let i=0; i<len; i++){
      newProfile[i].src = localStorage.getItem('source');
   }
   console.log(localStorage.getItem('source'));
});
}
let check = true;
if(uploadPhoto){
   uploadPhoto.addEventListener("change" , ()=>{
    
       postPic.src = URL.createObjectURL(uploadPhoto.files[0]);
       
       document.querySelector(".noPic").classList.add("disableNopic");
       document.querySelector(".post-pic").classList.remove("disableImg");
       posted.classList.remove("disable");
       check = false;
   });
}

if(textArea){
  textArea.addEventListener("input" , ()=>{
     let val = textArea.value;
     console.log(val , val.length);
     if(parseInt(val.length)==0 && check){
      posted.classList.add("disable");
     }
     else{
      posted.classList.remove("disable");
     }
  });

}


let email = document.querySelector(".email");
let pass = document.querySelector(".pass");
const loginSubmit = document.querySelector(".login");
let userName = "";

if(loginSubmit){
loginSubmit.addEventListener("click" , (event)=>{
   //  console.log(event.target);
   //  console.log("click");
    event.preventDefault();
    let emailVal = email.value ,passVal = pass.value;
    console.log(emailVal);
    if(emailVal.includes("@gmail.com") && passVal.length>=8){
        document.querySelector(".s").classList.add("active");
        for(let i=0; i<email.value.length; i++){
            if(email.value[i]=='@') break;
            userName+=email.value[i];
        }
        document.querySelector(".welcome").innerText = `Welcome to Facebook, ${userName}`;
        // pass.style.border="1px solid #ccc";
        localStorage.setItem("userName" , userName);
        document.querySelector(".container").classList.remove("activeHome"); 
        document.querySelector(".container2").classList.add("activeLogin");
      //   document.removeChild(".container2");
    }
    else{
        document.querySelector(".s").classList.remove("active");
        if(pass.value.length<9 && pass.value.length>0){
            pass.style.border = "1px solid red";
        }
        else if(pass.value.length>7){
            document.querySelector(".s").classList.add("active");
            pass.style.border="1px solid #ccc"; 
        }
      
         if(!email.value.includes("@gmail.com")){
            console.log(" yesss");
             email.style.border="1px solid red";
        }
        else if(email.value.includes("@gmail.com")){
            email.style.border="1px solid #ccc";
        }
    }
})

}

if(pass){
pass.addEventListener("input" , ()=>{
    if(pass.value.length<9 && pass.value.length>0){
        document.querySelector(".s").classList.remove("active");
        pass.style.border = "1px solid red";
    }
    else{
        document.querySelector(".s").classList.add("active");
        pass.style.border="1px solid #ccc";
    }
})
}
if(email){
email.addEventListener("input" , ()=>{
    if(!email.value.includes("@gmail.com")){
    email.style.border="1px solid red";
    }
    else if(email.value.includes("@gmail.com")){
        email.style.border="1px solid #ccc";
    }
});

}