
function check() {
  console.log("inside check method");
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  let data1 = fetch("http://localhost:3000/users")
    .then(response => response.json())
    .then(data => {
      //console.log(data)
      if (data.some((v) => { return v.email == email && v.newpassword == password })) {
        
        alert("login Successful");
        window.location.replace("dashboard.html");
        localStorage.setItem("email",email);
      }
      else{
        alert("check credentials");
        console.log("Login Unsuccessful");
      }

    })


}

