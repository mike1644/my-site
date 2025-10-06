document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('msg').textContent = 'You clicked me at ' + new Date().toLocaleTimeString();
});
