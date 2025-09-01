let form = document.getElementById("form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (!email && !password) {
    alert("Email va parolni kiriting ");
    return;
  }

  try {
    let data = await fetch(
      "https://68a5d7942a3deed2960f1d7d.mockapi.io/api/v1/user"
    );
    let res = await data.json();
    console.log(res);

    let check = res.find(
      (user) => user.email === email && user.password === password
    );

    

    if (check) {
      localStorage.setItem("user", JSON.stringify(check));
      window.location.href = "../index.html";
      console.log("Sucsessfully");
      
    }else{
        alert("Email yoki parol hato")
    }
  } catch (err) {
    console.log(err.message());
  }
});
