//Admin login
let adminform=document.getElementById("adminform")
adminform.addEventListener("submit",()=>{
    event.preventDefault()
    let adminemail= adminform.adminemail.value;
    let adminpassword=adminform.adminpassword.value;
    let adminObj={adminemail:"admin@empher.com",adminpassword:"empher@123"}
    let ans=JSON.stringify(adminObj)
    let ans2=JSON.parse(ans);
    console.log("parsed",ans2)


    if(adminform.email=="admin@empher.com" && adminform.password=="empher@123"){
        window.location.href="admin.html"
        alert("Logged in as Admin.")
    }
    loadadminform()
})
// function loadadminform(key, value){
//     const cont=JSON.parse(localStorage.getItem(key)) || []
//     cont.push(value)
// localStorage.setItem(key, JSON.stringify(cont));
// }


//user login
let userform=document.getElementById("userform")
userform.addEventListener("submit",()=>{
    event.preventDefault()
    let useremail= userform.usermail.value;
    let userpassword=userform.userpassword.value;
    let adminObj={useremail:"user@empher.com",userpassword:"user@123"}
    let ans=JSON.stringify(adminObj)
    let ans2=JSON.parse(ans);
    console.log("parsed",ans2)
    if(userform.email=="user@empher.com" && adminform.password=="user@123"){
        window.location.href="books.html"
        alert("Logged in as Admin.")
    }else{
        alert("Invalid credentials")
        
    }
})
// function loadadminform(key, value){
//     const cont=JSON.parse(localStorage.getItem(key)) || []
//     cont.push(value)
// localStorage.setItem(key, JSON.stringify(cont));
// }

