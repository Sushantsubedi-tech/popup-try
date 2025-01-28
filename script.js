let username = document.querySelector(".username");
let follow= document.querySelector(".follow");
let followers = document.querySelector(".numf");
let message = document.querySelector(".message");
let email = document.querySelector(".email");
let name = document.querySelector(".name");
let followerscount = 0;
follow.addEventListener("click",function(){
followerscount++;
followers.innerHTML = followerscount;

})
follow.addEventListener("dblclick",function(){
    follow.innerHTML = "Following";
    
    })
    message.addEventListener("click",function(){
        open( "https://www.facebook.com/sushantttttttt","_blank");
    })

let uname = document.querySelector(".uname")  
let inusername = document.querySelector(".useraddress")
let submit = document.querySelector(".submit")
let popup = document.querySelector(".popup")
submit.addEventListener("click",function(){
    let uservalue =inusername.value 
    let uvalue = uname.value
    if(uservalue == "" || uvalue == ""){
        alert ("enter both username and name")
    }
    else{
        username.innerHTML=uservalue;
        name.innerHTML=uvalue
popup.style.display ="none";
    }
})
