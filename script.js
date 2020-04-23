const btnAll = Array.from(document.getElementsByTagName('button'));
const btnNumAndOpr = btnAll.filter(e => e.className == 'numAndOpr');
const btnEksekusi = btnAll.filter(e => e.className == 'eksekusi')[0];
const btnReset = btnAll.filter(e => e.className == 'btnReset')[0];
const hasil = document.getElementsByClassName('hasil')[0];

// ketika angka dan operator aritmatika di klik
btnNumAndOpr.forEach(e => e.onclick = e => (hasil.value == 0) ? hasil.value = e.toElement.value : hasil.value += e.toElement.value);

// ketika tombol sama dengan diklik
btnEksekusi.onclick = e => {
  let valHasil = hasil.value;
  if (valHasil.indexOf('x')) valHasil = valHasil.replace('x', '*');
  valHasil = eval(valHasil);
  hasil.value = valHasil;
};

// ketika tombol reset di klik
btnReset.onclick = e => hasil.value = 0;
