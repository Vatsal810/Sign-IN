document.getElementById("login").addEventListener("submit",(event)=>{
  event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    location.replace("main.html")
  }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
  }
