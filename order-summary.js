const baseTotals = {
  subtotal: 9200,
  deliveryFee: 500,
  serviceFee: 200,
  tax: 0
};

let fulfillment = 'delivery';
let promoApplied = false;

function fmt(n) {
  return "₦" + n.toLocaleString();
}

function updateTotals() {
  const delivery = fulfillment === 'delivery' ? baseTotals.deliveryFee : 0;
  let total = baseTotals.subtotal + delivery + baseTotals.serviceFee + baseTotals.tax;
  if (promoApplied) total = Math.max(0, total - 500);

  document.getElementById('sumSubtotal').textContent = fmt(baseTotals.subtotal);
  document.getElementById('sumDelivery').textContent = fmt(delivery);
  document.getElementById('sumService').textContent = fmt(baseTotals.serviceFee);
  document.getElementById('sumTax').textContent = fmt(baseTotals.tax);
  document.getElementById('sumTotal').textContent = fmt(total);
}

function setFulfillment(mode) {
  fulfillment = mode;
  document.getElementById('btnDelivery').classList.toggle('active', mode === 'delivery');
  document.getElementById('btnPickup').classList.toggle('active', mode === 'pickup');
  updateTotals();
}

function applyPromo() {
  const val = document.getElementById('promoInput').value.trim();
  if (val.length === 0) return;
  promoApplied = true;
  updateTotals();
}

updateTotals();