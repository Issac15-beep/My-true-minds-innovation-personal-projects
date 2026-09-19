let cart = JSON.parse(localStorage.getItem('chuksKitchenCart') || '[]');

function fmt(n) {
  return "₦" + n.toLocaleString();
}

function imagePath(path) {
  if (!path) return '';
  if (path.startsWith('./Images/')) {
    return 'My-true-minds-innovation-personal-projects/Home screen page/' + path.slice(2);
  }
  return path;
}

function renderCart() {
  const wrap = document.getElementById('cart-items');
  if (cart.length === 0) {
    wrap.innerHTML = '<div class="cart-empty">Your cart is empty. Add something delicious!</div>';
    return;
  }
  wrap.innerHTML = cart.map((item, i) => `
    <div class="cart-item">
      <div class="cart-thumb" style="background-image:url('${imagePath(item.image)}')"></div>
      <div>
        <p class="cart-name">${item.name}</p>
        <p class="cart-desc">${item.desc}</p>
      </div>
      <div class="qty-row">
        <div class="qty">
          <button onclick="changeQty(${i}, 1)">+</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${i}, -1)">−</button>
        </div>
      </div>
      <div class="price-row">
        <span class="cart-price">${fmt(item.price * item.qty)}</span>
        <button class="remove-btn" onclick="removeItem(${i})">✕</button>
      </div>
    </div>
  `).join('');
}

function changeQty(i, delta) {
  cart[i].qty = Math.max(1, cart[i].qty + delta);
  saveCart();
  renderCart();
}

function removeItem(i) {
  cart.splice(i, 1);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem('chuksKitchenCart', JSON.stringify(cart));
}

renderCart();