let form = document.getElementById("form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let password = document.getElementById("password").value;
  let confirm = document.getElementById("confirm").value;


  if (!name || !lastname || !email || !phone || !password || !confirm) {
    alert("Malumotlarni kiriting");
    return;
  }

  if (password !== confirm) {
    alert("Parol bir xil bulishi kerak");
    return;
  }

  const dataUser = {
    first_name: name,
    last_name: lastname,
    email: email,
    phone: phone,
    password: password,
  };
  try {
    const res = await fetch(
      "https://68a5d7942a3deed2960f1d7d.mockapi.io/api/v1/user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUser),
      }
    );

    if (!res.ok) {
      console.log("Hatolik");
    } else {
        window.location.href="./login.html"
    }
    let data = await res.json();
    console.log("Ruyhatdan utildi", data);
    alert("Ruyxatdan o'tish muvaffaqiyatli!");
    form.reset();
  } catch (err) {
    console.log(err);
  }
});
