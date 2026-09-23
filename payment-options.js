document.getElementById('payBtn').addEventListener('click', function () {
  this.textContent = 'Payment Successful ✓';
  this.disabled = true;
});