// Disegna il logo rotondo dentro ogni elemento con classe "logo".
(function () {
  const stella = (cx, cy, r) => {
    const p = [];
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + i * Math.PI / 5, q = i % 2 ? r * 0.45 : r;
      p.push((cx + q * Math.cos(a)).toFixed(1) + ',' + (cy + q * Math.sin(a)).toFixed(1));
    }
    return '<polygon points="' + p.join(' ') + '" fill="#F2B632"/>';
  };
  let n = 0;
  document.querySelectorAll('.logo').forEach(el => {
    const id = 'l' + (n++);
    el.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
  <defs>
    <path id="${id}su" d="M 69 200 A 131 131 0 0 1 331 200"/>
    <path id="${id}giu" d="M 45 200 A 155 155 0 0 0 355 200"/>
  </defs>
  <circle cx="200" cy="200" r="199" fill="#1A1A1A"/>
  <circle cx="200" cy="200" r="195" fill="#FFFFFF"/>
  <circle cx="200" cy="200" r="188" fill="none" stroke="#1A1A1A" stroke-width="14" pathLength="52" stroke-dasharray="1 1"/>
  <circle cx="200" cy="200" r="174" fill="none" stroke="#1A1A1A" stroke-width="14" pathLength="52" stroke-dasharray="1 1" stroke-dashoffset="1"/>
  <circle cx="200" cy="200" r="167" fill="#C4281C" stroke="#1A1A1A" stroke-width="4"/>
  <circle cx="200" cy="200" r="112" fill="#FCFAF5" stroke="#1A1A1A" stroke-width="4"/>
  <image href="../menu-smash-burger/mascotte.png" x="104" y="96" width="192" height="208"/>
  <text font-family="Yellowtail" font-size="38" fill="#FCFAF5" text-anchor="middle"><textPath href="#${id}su" startOffset="50%">Il Giardino del Gusto</textPath></text>
  <text font-family="Bebas Neue" font-size="40" letter-spacing="5" fill="#FCFAF5" text-anchor="middle"><textPath href="#${id}giu" startOffset="50%">SMASH BURGER</textPath></text>
  ${stella(62, 222, 11)}${stella(338, 222, 11)}
</svg>`;
  });
})();
