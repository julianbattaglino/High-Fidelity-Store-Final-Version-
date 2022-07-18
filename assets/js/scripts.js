//Function para el toggle dark/ligth theme del menu
function themeToggle() {
  const toggle = document.getElementById('toggle');

  toggle.addEventListener('change', () => {
    if (toggle.checked == true) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  });

}
themeToggle();


//Función para obtener fecha + hora en español y luego imprimirla en el div
function date() {
  const meses = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
  ]

  const date = new Date()
  const dia = date.getDate();
  const mes = date.getMonth();
  const year = date.getFullYear();
  const clock = date.getHours() + ':' + date.getMinutes() + "hs";

  let spanishDate = "Hoy es" + " " + dia + ' de ' + meses[mes] + ' de ' + year + "  -  " + clock;
  console.log(spanishDate);
  document.getElementById("date").innerHTML = spanishDate;
}
date();
