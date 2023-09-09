const profilePic = document.getElementById("upload-picture");
let newProfile = document.querySelectorAll(".newProfile");
const post = document.querySelector(".mind");
const createPost = document.querySelector(".create-post");
const cross = document.querySelector(".cro");
const container = document.querySelector(".container");
const posted = document.querySelector(".posted");
const textArea = document.getElementById("txt");
const postPic = document.querySelector(".post-pic");
const uploadPhoto = document.getElementById("post-picture");
const inside = document.querySelector(".inside2");

// login page
var userName= localStorage.getItem('userName');
console.log(userName);  // This will output "Hello from script1
document.querySelector(".post-name").innerText = userName;
let len = newProfile.length;
for(let i=0; i<len; i++){
   newProfile[i].src = localStorage.getItem('source');
}
console.log(localStorage.getItem('source'));


if (post) {         
  post.addEventListener("click", () => {
    createPost.classList.remove("activePost");
    container.classList.add("activeCon");
  }); 
}
if (cross) {
  cross.addEventListener("click", () => {
    createPost.classList.add("activePost");
    container.classList.remove("activeCon");

    textArea.value = "";
    check = true;
  });
}

//outside the div
// to update profile pic
if (profilePic) {
  profilePic.addEventListener("change", () => {
    // console.log("enterd");
    let len = newProfile.length;
    for (let i = 0; i < len; i++) {
      newProfile[i].src = URL.createObjectURL(profilePic.files[0]);
    }
  });
}

let check = true;
if (uploadPhoto) {
  uploadPhoto.addEventListener("change", () => {
    postPic.src = URL.createObjectURL(uploadPhoto.files[0]);
    document.querySelector(".noPic").classList.add("disableNopic");
    document.querySelector(".post-pic").classList.remove("disableImg");
    posted.classList.remove("disable");
    
    check = false;
  }); 
}

if (textArea) {
  textArea.addEventListener("input", () => {
  
    let val = textArea.value;
    console.log(val, val.length);
    if (parseInt(val.length) == 0 && check) {
      posted.classList.add("disable");
    } else {
      posted.classList.remove("disable");
    }
  });
}

let nameArray = ["Pranav" ,  "Nishant Verma",  "Paras","Nishant Thakur"];
let imgPath = [
    "images/pranav.jpg",
    "images/NishantVerma.jpg",
    "images/paras.jpg",
    "images/Nishant.jpg",
];

let profileImg = [
    "images/pranav.jpg",
    "images/NishantVerma.jpg",
    "images/paras.jpg",
    "images/Nishant.jpg",
]

let description = [`Mai Pranav hu <br>mere 2 hath or 2 laat hai mera ek muh hai <br>m din 3 bar khana khata hu <br> `

 , `Mai Nishant hu <br>mere 2 hath or 2 laat hai mera ek muh hai <br>m din 3 bar khana khata hu <br> ` , 
 `Mai Paras hu hu <br>mere 2 hath or 2 laat hai mera ek muh hai <br>m din 3 bar khana khata hu <br> `,
 `Mai Nishant hu <br>mere 2 hath or 2 laat hai mera ek muh hai <br>m din 3 bar khana khata hu <br> `,


];
let timig = ['3' , '2' , '2' , '1'];

let likeCounter = [0 , 0 , 0 , 0];
const map={};

inside.addEventListener("click" , (event)=>{
  console.log(event.target);
  if(event.target.parentNode.closest('.cros')){
    map[event.target.parentNode.id] = "1";
    // console.log("event " , map[event.target.parentNode.id]);
    const item = event.target.parentNode.parentNode.parentNode.parentNode;
    inside.removeChild(item);
  }
  let clickedEle = event.target;

  // to inc likes 
  let topmost = clickedEle.closest('.doLike');
  if(topmost){
    console.log(" top " + topmost);
    console.log(topmost);
    const parent = topmost.parentNode.parentNode;
    console.log(parent);
   // const parentId = parent.querySelector(".cros").id;
    const likeP =  parent.querySelector(".countLike");
    likeP.innerText = parseInt(likeP.innerText)+1;
    likeCounter[parseInt(parentId)] = likeP.innerText;
  }
  
})

function loading(){
let n = nameArray.length;
for (let i = n-1; i>=0; i--) {
  if(map[i]==undefined){

  const grandParent = document.createElement("div");
  const start = document.createElement("div");               
  const leftPart = document.createElement("div");
  const profile = document.createElement("div");
  profile.setAttribute("id", "profil");
  const profilePostLogo = document.createElement("img");

  profilePostLogo.src = profileImg[i];
  profile.appendChild(profilePostLogo);
  
  const info = document.createElement("info");
  const intro = document.createElement("p");
  intro.innerText = nameArray[i];
  info.appendChild(intro);
  const pref =document.createElement("pre")

  pref.innerHTML =  `${timig[i]}d . <img src="	https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/8eTKEb2kGn1.png" height="15px" width="15px" alt="">`;
  info.appendChild(pref);

  const rightPart = document.createElement("div");
  rightPart.innerHTML = `
   <div  class="threeDot hov">
       <div class="dot"></div>
       <div class="dot"></div>
       <div class="dot"></div>
    </div>
    <div class="cros hov" id="${i}">
       <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/L1k-kkbTA1u.png&quot;); background-position: 0px -110px; background-size: 190px 182px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>

    </div>
   `;

  const pref2 = document.createElement("pre");
  if(i<description.length)
  pref2.innerHTML = description[i];


  const postPicture = document.createElement("img");
  if(i<imgPath.length)
  postPicture.src = imgPath[i];
  postPicture.style.width="100%";
  postPicture.classList.add("post-photo");
 

  const counter = document.createElement("div");
  counter.innerHTML = `
   <div class="like">
   <img class="x16dsc37" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" width="18">                   
   <p class = "countLike">${likeCounter[i]}</p>
   
</div>
<div class="shares">
   <pre><span>45 </span>comments</pre>
   <pre><span>34 </span>shares</pre>
</div>
   
   `;

   const command = document.createElement("div");
   command.innerHTML = `
   <div class="doLike"> 
   <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/fSIH5kPU1qz.png&quot;); background-position: 0px -180px; background-size: 26px 556px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
   <p>Like</p>
</div>
<div>
   <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/fSIH5kPU1qz.png&quot;); background-position: 0px -140px; background-size: 26px 556px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>       
    <p>Comment</p>
</div>
<div>
   <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/fSIH5kPU1qz.png&quot;); background-position: 0px -200px; background-size: 26px 556px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>
    <p>Share</p>
</div>
   `;
   
   // now concatinate
   grandParent.appendChild(start);
   start.appendChild(leftPart);
   start.appendChild(rightPart);
   leftPart.appendChild(profile);
   leftPart.appendChild(info);
   grandParent.appendChild(pref2); //

   grandParent.appendChild(postPicture); //
   // console.log(inside);
   grandParent.appendChild(counter);//
   grandParent.appendChild(command);
   inside.appendChild(grandParent);

   //   add classes
   grandParent.classList.add("new-post");
   start.classList.add("start");
   leftPart.classList.add("leftPart");
   rightPart.classList.add("rightPart");
   info.classList.add("info");
   pref2.classList.add("des");
   counter.classList.add("counter");
   command.classList.add("command");
   // grandParent.style.gap="1.3em"
   }
   else{
      console.log(" i " + i);
   }
 }

}
loading();

if(posted){
   posted.addEventListener("click" , ()=>{
      let val = textArea.value;
      console.log("val " + val);
    //   if(val!=0){
         val += `<br> `;
         description.push(val);
         let postName = document.querySelector(".post-name").innerText;
         console.log(" poast name hai ye " + postName)
         nameArray.push(postName);

         if(postPic.src!="http://127.0.0.1:5500/welcome.html"){
         imgPath.push(postPic.src);
         postPic.src="";         
         }
         else{
            imgPath.push("");
         }
         const sr = newProfile[0].src;
         
         console.log( );
         profileImg.push(`${sr}`);
         likeCounter.push(0);
         const date = new Date();
         console.log(date);
         timig.push(`${date.getDate()}`);
         inside.innerHTML="";
    // window.location.reload();

      loading();
      createPost.classList.add("activePost");
    container.classList.remove("activeCon");
    document.querySelector(".noPic").classList.remove("disableNopic");
    document.querySelector(".post-pic").classList.add("disableImg");
    posted.classList.add("disable");

    textArea.value = "";
    check = true;

      
      // checking();
    
   console.log(description);
   })
}

