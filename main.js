const META = 1000;
let ahorrado = 0;

while (ahorrado < META) {
  let aporte = parseFloat(prompt(`Llevas ahorrado $${ahorrado} de $${META}.\n¿Cuanto dinero quieres depositar hoy?`));

  if (aporte > 0) {
    ahorrado += aporte;
    console.log(`✅ Depositaste $${aporte}. Total acumulado: $${ahorrado}`);
  } else if (aporte <= 0) {
    alert("⚠️ Tienes que ingresar un monto mayor a 0.");
  } else {
    alert("❌ Dato inválido. Por favor ingresa solo numeros.");
  }
}

alert(`¡Felicidades! Alcanzaste tu meta de $${META}. Total ahorrado: $${ahorrado}`);
console.log("Meta cumplida.");