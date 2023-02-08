// Tulis disini
var buttonCek = document.getElementById("cek");
buttonCek.addEventListener("click", function cek(e) {
  e.preventDefault();
  var nilaiIndonesia = document.getElementById("nilaiIndonesia").value;
  var nilaiIpa = document.getElementById("nilaiIpa").value;
  var nilaiIps = document.getElementById("nilaiIps").value;
  var nilaiMatematika = document.getElementById("nilaiMatematika").value;
  var nilaiJawa = document.getElementById("nilaiJawa").value;
  var ipSemester = [nilaiIndonesia, nilaiIpa, nilaiIps, nilaiMatematika, nilaiJawa];
  console.log(ipSemester);

  var total = 0;
  for (var i = 0; i < ipSemester.length; i++) {
    total += parseFloat(ipSemester[i]);
    var hasil = total / ipSemester.length;
  }
  document.getElementById("demo").value = hasil.toFixed(2);
  console.log("IP, Kumulatif " + hasil.toFixed(2));
});
