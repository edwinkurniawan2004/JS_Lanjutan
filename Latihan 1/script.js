// Cara Untuk Membuat Object Pada JavaScript
// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa = {
// 	nama: 'Edwin Kurniawan',
// 	energi: 10,
// 	makan: function(porsi){
// 		this.energi = this.energi + porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	}
// }
// let pembeli = {
// 	nama: 'Shandika',
// 	barang: function(banyak){
// 		this.barang = banyak;
// 	},
// 	harga: function(angka){
// 		this.harga = this.barang * angka;
// 		console.log(`halo ${this.nama}, terima kasih sudah berbelanja`);
// 	}
// }


// 2. Function Declaration
// const methodMahasiswa = {
// 	makan: function(porsi){
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan`);
// 	},

// 	main: function(jam){
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, selamat bermain`);
// 	},

// 	tidur: function(jam){
// 		this.energi += jam * 2;
// 		console.log(`Halo ${this.nama}, selamat tidur`);
// 	}
// }

// function Mahasiswa(nama, energi){
// 	let mahasiswa = Object.create(methodMahasiswa);
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;
	
// 	return mahasiswa;
// }

// let shandika = Mahasiswa('Shandika', 10);
// let edwin = Mahasiswa('Edwin', 20);


// 	VERSI PROTOTYPE VERSI 1
// function Mahasiswa(nama, energi){
// 	this.nama = nama;
// 	this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi){
// 	this.energi += porsi;
// 	return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam){
// 	this.energi -= jam;
// 	return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.tidur = function(jam){
// 	this.energi += jam * 2;
// 	return `Halo ${this.nama}, selamat makan!`;
// }

// let edwin = new Mahasiswa('Edwin', 10);


//VERSI CLASS
class Mahasiswa{
	constructor(nama, energi){
		this.nama = nama;
		this.energi = energi;
	}
	makan(porsi){
		this.energi += porsi;
		return `Halo ${this.nama}, selamat makan!`;
	}
	main(jam){
		this.energi -= jam;
		return `Halo ${this.nama}, selamat makan!`;
	}

	tidur(jam){
		this.energi += jam * 2;
		return `Halo ${this.nama}, selamat makan!`;
	}
}

let edwin = new Mahasiswa('edwin', 10);
let shandika = new Mahasiswa('shandika', 20);



// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi){
// 	this.nama = nama;
// 	this.energi = energi;

// 	this.makan = function(porsi){
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan`);
// 	}

// 	this.main = function(jam){
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, selamat bermain`);
// 	}
// }


// let edwin = new Mahasiswa('edwin', 10);


// 4. Object.create