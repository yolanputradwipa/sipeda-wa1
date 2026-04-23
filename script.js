function hitung() {
  let verifikasi = parseInt(document.getElementById("verifikasi").value);
  let link = parseInt(document.getElementById("link").value);
  let data = parseInt(document.getElementById("data").value);
  let kunci = parseInt(document.getElementById("kunci").value);

  let skor = verifikasi + link + data + kunci;

  let hasil = "";
  let rekomendasi = "";

  if (skor >= 7) {
    hasil = "Aman ✅";
    rekomendasi = "Pertahankan kebiasaan keamanan Anda.";
  } 
  else if (skor >= 4) {
    hasil = "Cukup ⚠️";
    rekomendasi = "Tingkatkan keamanan dengan mengaktifkan fitur tambahan.";
  } 
  else {
    hasil = "Rentan ❌";
    rekomendasi = "Segera aktifkan verifikasi dua langkah dan hindari link mencurigakan.";
  }

  document.getElementById("hasil").innerHTML = "Status: " + hasil;
  document.getElementById("rekomendasi").innerHTML = rekomendasi;
}