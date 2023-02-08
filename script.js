const rataRataForm = document.getElementById("rataRataForm");
const demoContainer = document.getElementById("demoContainer");
const inputNilaiIndonesia = document.getElementById("nilaiIndonesia");
const inputNilaiIpa = document.getElementById("nilaiIpa");
// const nilaiIps = document.getElementById("nilaiIps");
// const nilaiMtk = document.getElementById("nilaiMtk");
// const nilaiJawa = document.getElementById("nilaiJawa");

const rataRata = JSON.parse(localStorage.getItem("rataRata")) || [];

const addRata = (nilaiIndonesia, nilaiIpa, hasil) => {
    rataRata.push ({
        nilaiIndonesia,
        nilaiIpa,
        hasil
    });

    localStorage.setItem("rataRata", JSON.stringify(rataRata));

    return {nilaiIndonesia, nilaiIpa, hasil};
};

const createRata = ({nilaiIndonesia, nilaiIpa, hasil}) => {
    const rataRataDiv = document.createElement("div");
    const nilaiBahasaIndonesia = document.createElement("p");
    const nilaiIlmuPengetahuanAlam = document.createElement("p");
    // const nilaiIlmuPengetahuanSosial = document.createElement("p");
    // const nilaiMatematika = document.createElement("p");
    // const nilaiBahasaJawa = document.createElement("p");
    const nilaiHasil = document.createElement("p");

    nilaiBahasaIndonesia.innerText = "Nilai Indonesia : " + nilaiIndonesia;
    nilaiIlmuPengetahuanAlam.innerText = "Nilai Ipa : " + nilaiIpa;
    // nilaiIlmuPengetahuanSosial.innerText = "Nilai Ips : " + nilaiIps;
    // nilaiMatematika.innerText = "Nilai Matematika : " + nilaiMtk;
    // nilaiBahasaJawa.innerText = "Nilai Jawa : " + nilaiJawa;
    nilaiHasil.innerText = "Hasil Rata-Rata : " + hasil;

    rataRataDiv.append = (nilaiBahasaIndonesia, nilaiIlmuPengetahuanAlam, nilaiHasil);
    demoContainer.appendChild(rataRataDiv);

    // demoContainer.style.display = rataRata.length === 0 ? "none" : "flex";
};

// demoContainer.style.display = rataRata.length === 0 ? "none" : "flex";

rataRata.forEach(createRata);

rataRataForm.onsubmit = (e) => {
    e.preventDefault();

    let vnilaiIndonesia = inputNilaiIndonesia.value;
    let vnilaiIpa = inputNilaiIpa.value;
    // let vnilaiIps = nilaiIps.value;
    // let vnilaiMtk = nilaiMtk.value;
    // let vnilaiJawa = nilaiJawa.value;
    let hasil = (parseInt(vnilaiIndonesia) + parseInt(vnilaiIpa)) / 2;
    
    const newRata = addRata(
        vnilaiIndonesia,
        vnilaiIpa, 
        // vnilaiIps, 
        // vnilaiMtk, 
        // vnilaiJawa, 
        hasil
    );

    createRata(newRata);

    vnilaiIndonesia = "";
    vnilaiIpa = "";
    // nilaiIps.value = "";
    // nilaiMtk.value = "";
    // nilaiJawa.value = "";
};



