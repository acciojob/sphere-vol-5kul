function volume_sphere() {
  const radiusInput = document.getElementById('radius').value;
  const radius = parseFloat(radiusInput);
  let volume;

  // Validate radius
  if (isNaN(radius) || radius < 0) {
    volume = NaN;
  } else {
    volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(4); // Round to 4 decimal places
  }

  // Display result
  document.getElementById('volume').value = volume;

  return false; // Prevent actual form submission
}

// Hook up the form on page load
window.onload = function () {
  document.getElementById('MyForm').onsubmit = volume_sphere;
};
