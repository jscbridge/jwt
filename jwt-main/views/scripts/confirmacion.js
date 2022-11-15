
function prueba() {
  //alert(window.location.pathname.split('/')[2]);

    let newPass = document.getElementById("pass1").value;
    let repeatPass = document.getElementById("pass2").value;
    var ok = newPass == repeatPass;
    // let token = localStorage.getItem("token");
    let token = window.location.pathname.split('/')[2];
    if (ok) {
      let password = newPass;
      let info = {
        method: "POST",
        body: JSON.stringify({ password, token }),
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
      };
      //let token = `http://localhost:5000/confirmacion/${infoJwt}`
      
      fetch("/verificar", info)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            document.getElementsByTagName("p")[0].innerText =
              "Se ha actualizado su nuevo Password";
          } else {
            document.getElementsByTagName("p")[0].innerText = "Token incorrectos";
          }
        });
    } else {
      document.getElementsByTagName("p")[0].innerText = "No son iguales";
    }
  }


