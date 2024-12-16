// Sepet İşlemleri
let cart = [];
const cartItemsContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");

// Sepete ürün ekleme butonu
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const menuItem = button.parentElement;
    const name = menuItem.dataset.name;
    const price = parseInt(menuItem.dataset.price);

    addToCart(name, price);
  });
});

// Sepete ekle fonksiyonu
function addToCart(name, price) {
  // Sepette aynı ürün varsa adet artır
  const existingItem = cart.find((item) => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  updateCart();
}

// Sepet güncelleme
function updateCart() {
  cartItemsContainer.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <p>${item.name} x ${item.quantity} - ${item.price * item.quantity} TL</p>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  totalPriceElement.textContent = totalPrice;
}

// Ödeme butonu
document.getElementById("checkout").addEventListener("click", () => {
  alert("Ödeme sayfasına yönlendiriliyorsunuz...");
  // Burada ödeme sayfasına yönlendirme yapılabilir.
});