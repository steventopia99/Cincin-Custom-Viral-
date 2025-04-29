// Sembunyikan/Munculkan kolom inisial otomatis
const tipeSelect = document.getElementById("tipeSelect");
const inisialField = document.getElementById("inisialField");

tipeSelect.addEventListener("change", function () {
  if (this.value === "Kupu-Kupu") {
    inisialField.style.display = "none";
  } else {
    inisialField.style.display = "block";
  }
});

// Kirim Form ke WhatsApp
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = this.nama.value.trim();
  const wa = this.wa.value.trim();
  const alamat = this.alamat.value.trim();
  const tipe = this.tipe.value;
  const inisial = this.inisial.value.trim();
  const jumlah = this.jumlah.value;

  if (tipe === "Inisial" && inisial === "") {
    alert("Mohon isi inisial untuk cincin inisial.");
    return;
  }

  let pesan = `Halo! Saya ingin pesan Cincin Custom:\n\n`;
  pesan += `Nama: ${nama}\n`;
  pesan += `No. WA: ${wa}\n`;
  pesan += `Alamat: ${alamat}\n`;
  pesan += `Tipe Cincin: ${tipe}\n`;
  if (tipe === "Inisial") {
    pesan += `Inisial: ${inisial}\n`;
  }
  pesan += `Jumlah Pesanan: ${jumlah}`;

  const noTujuan = "6281521768615"; // Ganti dengan nomor WA admin kamu
  const linkWA = `https://wa.me/${noTujuan}?text=${encodeURIComponent(pesan)}`;
  window.open(linkWA, "_blank");
});