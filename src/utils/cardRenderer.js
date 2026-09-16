// High-resolution Canvas Share Card Generator
// Creates a refined editorial 1080x1350 (4:5 portrait) diagnostic summary card

export async function generateShareCard({ primary, secondary, percentages }) {
  const canvas = document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1350;
  const ctx = canvas.getContext('2d');

  // Background: Warm Parchment Texture
  ctx.fillStyle = '#FAF7F2';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle outer border
  ctx.strokeStyle = '#D5CCC0';
  ctx.lineWidth = 4;
  ctx.strokeRect(40, 40, 1000, 1270);

  // Inner border
  ctx.strokeStyle = '#E8E2D7';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(48, 48, 984, 1254);

  // Top Epigraph & Header
  ctx.textAlign = 'center';
  ctx.fillStyle = '#867E75';
  ctx.font = '600 24px "Cinzel", Georgia, serif';
  ctx.fillText('ST. THOMAS AQUINAS × ARTHUR C. BROOKS', 540, 110);

  ctx.fillStyle = '#231F1C';
  ctx.font = '700 48px "Newsreader", Georgia, serif';
  ctx.fillText('THE FOUR FALSE IDOLS', 540, 175);

  ctx.fillStyle = '#B84A39';
  ctx.font = 'italic 26px "Newsreader", Georgia, serif';
  ctx.fillText('Diagnostic Assessment Dossier', 540, 215);

  // Decorative Divider
  ctx.strokeStyle = '#B84A39';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(420, 240);
  ctx.lineTo(660, 240);
  ctx.stroke();

  // Core Result Badge Area
  ctx.fillStyle = '#FFFDF9';
  ctx.beginPath();
  ctx.roundRect(100, 275, 880, 420, 16);
  ctx.fill();
  ctx.strokeStyle = '#E8E2D7';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Primary Idol Tag
  ctx.fillStyle = primary.accentColor;
  ctx.font = '700 22px "Cinzel", Georgia, serif';
  ctx.fillText('PRIMARY CORE IDOL', 540, 335);

  // Primary Name & Latin Title
  ctx.fillStyle = '#231F1C';
  ctx.font = '800 68px "Newsreader", Georgia, serif';
  ctx.fillText(primary.name.toUpperCase(), 540, 415);

  ctx.fillStyle = primary.accentColor;
  ctx.font = 'italic 32px "Newsreader", Georgia, serif';
  ctx.fillText(`"${primary.latinName}"`, 540, 465);

  // Archetype
  ctx.fillStyle = '#5C554E';
  ctx.font = '600 26px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`Archetype: ${primary.archetype}`, 540, 520);

  // Core Quote
  ctx.fillStyle = '#231F1C';
  ctx.font = 'italic 25px "Newsreader", Georgia, serif';
  const quoteText = primary.quote.length > 70 ? primary.quote.substring(0, 68) + '…' : primary.quote;
  ctx.fillText(quoteText, 540, 580);

  // Secondary Driver Note
  ctx.fillStyle = '#867E75';
  ctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`Secondary "Shadow" Driver: ${secondary.name} (${secondary.latinName})`, 540, 645);

  // Full Spectrum Breakdown Box
  ctx.fillStyle = '#FFFDF9';
  ctx.beginPath();
  ctx.roundRect(100, 725, 880, 440, 16);
  ctx.fill();
  ctx.strokeStyle = '#E8E2D7';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#231F1C';
  ctx.font = '700 28px "Newsreader", Georgia, serif';
  ctx.fillText('The Fourfold Spectrum', 540, 785);

  // 4 Idol Meters
  const idolEntries = [
    { label: 'Money (Divitiae)', pct: percentages.money, color: '#2D6A4F' },
    { label: 'Power (Potestas)', pct: percentages.power, color: '#2B4570' },
    { label: 'Pleasure (Voluptas)', pct: percentages.pleasure, color: '#9C3D54' },
    { label: 'Fame (Gloria)', pct: percentages.fame, color: '#A86214' }
  ];

  let startY = 840;
  idolEntries.forEach((item) => {
    // Label & Percentage
    ctx.textAlign = 'left';
    ctx.fillStyle = '#231F1C';
    ctx.font = '600 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(item.label, 150, startY);

    ctx.textAlign = 'right';
    ctx.fillStyle = item.color;
    ctx.font = '700 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`${item.pct}%`, 930, startY);

    // Track
    ctx.fillStyle = '#EFEAE1';
    ctx.beginPath();
    ctx.roundRect(150, startY + 12, 780, 16, 8);
    ctx.fill();

    // Fill
    const fillWidth = Math.max(16, (item.pct / 100) * 780);
    ctx.fillStyle = item.color;
    ctx.beginPath();
    ctx.roundRect(150, startY + 12, fillWidth, 16, 8);
    ctx.fill();

    startY += 70;
  });

  // Footer Tagline
  ctx.textAlign = 'center';
  ctx.fillStyle = '#867E75';
  ctx.font = '500 20px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Discover your false idol & Arthur Brooks’ actionable antidote at', 540, 1220);

  ctx.fillStyle = '#B84A39';
  ctx.font = '600 22px "Cinzel", Georgia, serif';
  ctx.fillText('FOUR FALSE IDOLS ASSESSMENT', 540, 1255);

  return canvas.toDataURL('image/png');
}
