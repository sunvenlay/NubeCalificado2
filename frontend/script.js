const API = 'http://localhost:8000/api';

async function login() {
  const correo = document.getElementById('correo').value;
  const password = document.getElementById('password').value;
  const res = await fetch(`${API}/clientes/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ correo, password })
  });

  if (res.ok) {
    const data = await res.json();
    cargarClientes();
  } else {
    alert('Login fallido');
  }
}

async function register() {
  const correo = document.getElementById('correo').value;
  const password = document.getElementById('password').value;
  const nombre = "Nuevo Usuario";
  await fetch(`${API}/clientes/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ correo, password, nombre })
  });
  alert('Registrado');
}

async function cargarClientes() {
  const res = await fetch(`${API}/clientes`);
  const clientes = await res.json();
  document.getElementById('clientes').innerHTML = JSON.stringify(clientes, null, 2);
}

async function cargarProductos() {
  const res = await fetch(`${API}/productos`);
  const productos = await res.json();
  document.getElementById('productos').innerHTML = JSON.stringify(productos, null, 2);
}
