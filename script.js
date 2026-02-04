document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Form submitted! Backend integration pending.");
  });
});
