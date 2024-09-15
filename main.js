function getElement(selector, parent = document) {
  return parent.querySelector(selector);
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  },
});

const elSignBtn = getElement("#sign-btn");
const elToTop = getElement("#to-top");
const elInputUserName = getElement("#username");
const elInputPassword = getElement("#password");
const elLoginDiv = getElement("#login-div");
const elIsLogin = getElement("#isLogin");
const elLogout = getElement("#logout");
const template = getElement("template");
const elWrapper = getElement(".item_block");

const products = [
  { id: 1, img: "https://eda.yandex/images/3538649/78264450c710e37688b9ead646630b42-600x450.jpg", isLiked: false, title: "KFC", rating: "4.8 yaxshi $$$", real_price: "bepul yetkazib berish" },
  { id: 2, img: "https://eda.yandex/images/2796335/78133c61bb98c180eb4389ae96c93978-600x450.jpg", isLiked: false, title: "Oqtepa Lavash", rating: "4.8 yaxshi $$$", real_price: "bepul yetkazib berish" },
  { id: 3, img: "https://eda.yandex/images/3682162/59c6d09b27fdcf982ef185fd128223fd-600x450.jpg", isLiked: false, title: "Yaponamama", rating: "4.8 yaxshi $$$", real_price: "bepul yetkazib berish" },
  { id: 4, img: "https://eda.yandex/images/3547279/2290a36f37206193d2474b76ad22b7d8-600x450.jpg", isLiked: false, title: "STRETT 77", rating: "4.8 yaxshi $$$", real_price: "bepul yetkazib berish" },
  { id: 5, img: "https://eda.yandex/images/2353725/6d2b0a41a98da9d946a090868070677c-600x450.jpg", isLiked: false, title: "Feed Up", rating: "4.8 yaxshi $$$", real_price: "bepul yetkazib berish" },
  { id: 6, img: "https://eda.yandex/images/3378693/92204931697355709e466007a7d9a09b-600x450.jpg", isLiked: false, title: "Burger Embassy", rating: "4.8 yaxshi $$$", real_price: "bepul yetkazib berish" },
  { id: 7, img: "https://eda.yandex/images/3525402/754cec1c6c494b35f5cd2901f5bcc5e0-600x450.jpg", isLiked: false, title: "Gosht Doner", rating: "4.8 yaxshi $$$", real_price: "bepul yetkazib berish" },
  { id: 8, img: "https://eda.yandex/images/3550919/b4ce665b0795708234d80f4c5ccd2753-600x450.jpg", isLiked: false, title: "Les Ailes", rating: "4.8 yaxshi $$$", real_price: "bepul yetkazib berish" }
];

function displayProductCards(products) {
  elWrapper.textContent = "";
  products.forEach((item) => {
    const newElement = template.content.cloneNode(true);
    const topImg = getElement(".card-img-top", newElement);
    const title = getElement(".card-title", newElement);
    const rating = getElement(".rating", newElement);
    const delivery = getElement(".card-price", newElement);

    topImg.src = item.img;
    title.textContent = item.title;
    rating.textContent = item.rating;
    delivery.textContent = item.real_price;

    elWrapper.appendChild(newElement);
  });
}

displayProductCards(products);

// Login
elSignBtn.addEventListener("click", () => {
  const obj = {
    username: elInputUserName.value,
    password: elInputPassword.value,
  };

  fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((res) => {
    if (res.status !== 200) {
      throw new Error("Invalid login");
    }
    return res.json();
  })
  .then((data) => {
    localStorage.setItem("token", data.token);
    window.location.replace(`../admin.html`);
  })
  .catch((err) => {
    alert("Error: " + err.message);
  });
});

elWrapper.addEventListener("click", (evt) => {
  if (evt.target.className.includes("mahsulot")) {
    const id = evt.target.dataset.id;
    window.location.replace(`../single-product.html?id=${id}`);
  }
});
