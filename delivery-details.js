function handleChangeAddress() {
  const box = document.querySelector('.address-box');
  const newAddress = prompt('Enter new delivery address:', 'Home: 123 Main Street, Victoria Island, Lagos');
  if (newAddress) {
    box.innerHTML = newAddress.replace(/\n/g, '<br>') +
      '<br><span class="change-link" id="changeAddressLink">Change Address</span>';
    document.getElementById('changeAddressLink').addEventListener('click', handleChangeAddress);
  }
}

document.getElementById('changeAddressLink').addEventListener('click', handleChangeAddress);