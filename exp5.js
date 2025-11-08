const form = document.getElementById("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value;
  const pass = form.password.value;
  const phone = form.phone.value;

  if (!name) return msg.textContent = "Name required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return msg.textContent = "Invalid email";
  if (!/^(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/.test(pass)) return msg.textContent = "Weak password";
  if (!/^\d{10}$/.test(phone)) return msg.textContent = "Phone must be 10 digits";

  msg.textContent = " Registration Successful!";
});

