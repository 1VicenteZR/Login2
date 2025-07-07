document.getElementById('donantesBtn').addEventListener('click', function () {
  this.classList.add('active');
  document.getElementById('adminBtn').classList.remove('active');
});

document.getElementById('adminBtn').addEventListener('click', function () {
  this.classList.add('active');
  document.getElementById('donantesBtn').classList.remove('active');
});

document.getElementById('registerBtn').addEventListener('click', function () {
  window.location.href = "registro.html";
});

document.getElementById('loginBtn').addEventListener('click', function () {
  const email = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const emailRegex = /^\S+@\S+\.\S+$/;

  const errorDiv = document.getElementById('loginError') || (() => {
    const div = document.createElement('div');
    div.id = 'loginError';
    div.style.color = '#d32f2f';
    div.style.fontSize = '14px';
    div.style.margin = '8px 0 0 0';
    document.querySelector('form').appendChild(div);
    return div;
  })();

  if (!email) {
    errorDiv.textContent = 'El correo es obligatorio.';
  } else if (!emailRegex.test(email)) {
    errorDiv.textContent = 'Ingresa un correo válido.';
  } else if (!pass) {
    errorDiv.textContent = 'La contraseña es obligatoria.';
  } else {
    errorDiv.textContent = '';
    window.location.href = "dashboard.html";
  }
});
