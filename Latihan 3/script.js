//ARROW FUNCTION
// const tampilNama = (nama) => { return `Halo, ${nama}`}
// console.log(tampilNama('edwin'));

// const tampilNama = (nama,waktu) => { 
// 	return `Selamat, ${waktu}, ${nama}`;
// }
// console.log(tampilNama('edwin'));

//IMPLISIT RETURN
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('edwin'));



// let mahasiswa = ['Shandika Galih', 'doddy ferdiansyah', 'Erik'];

// let jumlahHuruf = mahasiswa.map(function (nama){
// 	return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// ARROW FUNCTION OBJECT ({});
// let jumlahHuruf = mahasiswa.map(nama => ({nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);


// let namaTkj = (nama,kelamin) => {
// 	if(kelamin == 'pria'){
// 		console.log(`Halo Ganting, nama mu adalah ${nama}`);
// 	}else if(kelamin == 'wanita'){
// 		console.log(`Halo Cantik, nama mu adalah ${nama}`);
// 	}
// 	return namaTkj;
// }

// namaTkj('edwin', 'pria');
// namaTkj('bunga', 'wanita');



//Konsep this pada arrow function

//constructor Function
// const Mahasiswa = function(){
// 	this.nama = 'edwin';
// 	this.umur = 33;
// 	this.sayHello = function(){
// 		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
// 	}
// }
// const edwin = new Mahasiswa();

// Arrow function
// const Mahasiswa = function(){
// 	this.nama = 'edwin';
// 	this.umur = 33;
// 	this.sayHello = () =>{
// 		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
// 	}
// }
// const edwin = new Mahasiswa();

//object literal
// const Mahasiswa = {
// 	nama: 'edwin',
// 	umur: 33,
// 	sayHello: () => { // arrow function tidak memiliki konsep this
		// console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
// 		console.log(this);
// 	}
// }



// const Mahasiswa = function(){
// 	this.nama = 'edwin';
// 	this.umur = 33;
// 	this.sayHello = function(){
// 		console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
// 	}

// 	setInterval(() => {
// 		console.log(this.umur++);
// 	},1000);

// }
// const edwin = new Mahasiswa();



const box = document.querySelector('.box');
box.addEventListener('click', function(){
	let satu = 'size';
	let dua = 'caption';
	
	if(this.classList.contains(satu)){
		[satu, dua] = [dua, satu];
	}
	
	this.classList.toggle(satu);
	setTimeout(() => {
		this.classList.toggle(dua);
	}, 600);
});