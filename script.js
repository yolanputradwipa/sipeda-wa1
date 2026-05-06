function hitung() {
  let skor =
    parseInt(verifikasi.value) +
    parseInt(link.value) +
    parseInt(data.value) +
    parseInt(kunci.value);

  let persen = (skor / 8) * 100;
  let hasil = "";
  let warna = "";
  let rekomendasi = "";

  if (skor >= 7) {
    hasil = "Aman ✅";
    warna = "green";
    rekomendasi = "Keamanan sangat baik!";
  } else if (skor >= 4) {
    hasil = "Cukup ⚠️";
    warna = "orange";
    rekomendasi = "Masih perlu ditingkatkan.";
  } else {
    hasil = "Rentan ❌";
    warna = "red";
    rekomendasi = "Segera perbaiki keamanan!";
  }

  hasil.innerHTML = hasil;
  rekomendasi.innerHTML = rekomendasi;

  let bar = document.getElementById("progressBar");
  bar.style.width = persen + "%";
  bar.style.background = warna;

  document.getElementById("resultBox").style.display = "block";
}
