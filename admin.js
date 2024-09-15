function getElement(selector, parent = document) {
  return parent.querySelector(selector);
}
const token = localStorage.getItem("token");
const template = getElement("template");
const elWrapper = getElement(".item_block");


if (!token) {
  window.location.replace("../index.html");
}

if (!token) {
  window.location.replace("../index.html");
}
fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))