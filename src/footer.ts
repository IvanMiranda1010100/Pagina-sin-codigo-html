export function footerComponent() {
  const footer = document.createElement("footer");
  footer.innerHTML = "<h2>Contactos</h2>";
  footer.style.border = "solid 3px black";
  footer.style.padding = "10px";
  return footer;
}
