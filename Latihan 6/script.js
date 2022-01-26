// Destructuring Variable / Assignment

// =====>>>> Destructuring Array
// const perkenalan = ['halo', 'nama', 'saya', 'Shandika Galih'];

// const [salam, satu, dua, nama] = perkenalan;

// ======>>>>skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// =======>>>>> swap items
// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// =====>>>>> return value pada function
// function coba(){
// 	return [1, 2];
// }

// const [a,b] = coba();
// console.log(b);

// ======>>>> Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);


// =====>>>> Dectructuring Object
// const mhs = {
// 	nama: 'Edwin Kurniawan',
// 	umur: 33
// }

// const{ nama, umur} = mhs;
// console.log(umur);

// =====>>>> Assignment tanpa deklarasi object

// ({ nama, umur} = {nama: 'Edwin Kurniawan', umur: 33});
// console.log(nama);

// =====>>>> Assign je variable baru
// const mhs = {
// 	nama: 'Edwin Kurniawan',
// 	umur: 33
// }

// const{ nama: n, umur: u} = mhs;
// console.log(n);

// =====>>>> Memberikan Default Value
// const mhs = {
// 	nama: 'Edwin Kurniawan',
// 	umur: 33,
// 	email: 'edwinkurniawan2004@email.com'
// }

// const{ nama, umur, email = 'edwin@email.com'} = mhs;
// console.log(email);

// ====>>>> Memberi nilai default + assign ke variable baru

// const mhs = {
// 	nama: 'Edwin Kurniawan',
// 	umur: 33,
// 	email: 'edwinkurniawan2004@email.com'
// }

// const{ nama: n, umur: u, email: e = 'edwin@email.com'} = mhs;
// console.log(e);

// ====>>>> Rest parameter
// const mhs = {
// 	nama: 'Edwin Kurniawan',
// 	umur: 33,
// 	email: 'Edwin@email.com'
// }

// const{ nama, ...values} = mhs;
// console.log(values);

// Mengambil field pada object, setelah dikirim sebagai parameter unutk function
// const mhs = {
// 	id: 123,
// 	nama: 'Edwin Kurniawan',
// 	umur: 33,
// 	email: 'edwinkurniawan2004@email.com'
// }

// function getIdMhs({ id }){
// 	return id;
// }
// console.log(getIdMhs(mhs))


// =======>>>>> LATIHAN LATIHAN DESTRUCTURING

// Destructuring

// function kalkulasi(a,b){
// 	return [a + b, a - b, a * b, a / b];
// };

// const tambah = penjumlahanPerkalian(2,3)[0];
// const kali = penjumlahanPerkalian(2,3)[1];

// const [jumlah, kali] = penjumlahanPerkalian(2,3);
// console.log(jumlah);
// console.log(kali);

// const [jumlah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(2,3);
// console.log(bagi);


// function kalkulasi(a,b){
// 	return {
// 		tambah: a + b,
// 		kurang: a - b,
// 		kali: a * b,
// 		bagi: a / b
// 	}
// }

// const {bagi, tambah, kali, kurang} = kalkulasi(2,3);
// console.log(kurang);


// ======>>>>> Destructuring function arguments
const mhs1 = {
	nama: 'Edwin Kurniawan',
	umur: 17,
	email: 'edwinkurniawan2004@email,com',
	nilai: {
		tugas: 80,
		uts: 75,
		uas: 60
	}
}

// function cetakMhs(mhs){
// 	return `Halo, nama saya ${mhs.nama}, saya ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));


function cetakMhs({ nama, umur, nilai: {tugas, uts, uas}}){
	return `Halo, nama saya ${nama}, saya ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1))