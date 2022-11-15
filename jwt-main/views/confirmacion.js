
function prueba() {

    let newPass = document.getElementById("pass1").value;
    let repeatPass = document.getElementById("pass2").value;
    var ok = newPass == repeatPass;
    // let token = localStorage.getItem("token");

    if (ok) {
      let password = newPass;
      let info = {
        method: "POST",
        body: JSON.stringify({ password }),
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
      };
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

