export default function changeColor() {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
  ];

  const pick = Math.floor(Math.random() * colors.length);

  const html = document.querySelector("html")!;

  html.classList.remove(...colors);
  html.classList.add(colors[pick]);
}