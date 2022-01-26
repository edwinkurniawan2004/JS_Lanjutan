// ===>>> for..of
// const mhs = ['Shandika', 'Doddy', 'Erik'];

// for( let i = 0; i < mhs.length; i++){
// 	console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for( const m of mhs){
// 	console.log(m);
// }

// ===>> String 
// const nama = "Kurniawan";
// for( const n of nama){
// 	console.log(n);
// }


// const mhs = ['Shandika', 'Doddy', 'Erik'];
// mhs.forEach((m, i) => { 
// 	console.log(`${m} merupakan mahasiswa ke-${i + 1}`);
// });

// for( const [i, m] of mhs.entries()){
// 	console.log(`${m} merupakan mahasiswa ke-${i + 1}`);
// }


// ===>> NodeList
// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(m => console.log(m.innerHTML));
// for( const m of liNama){
// 	console.log(m.textContent);
// }


// ===>> arguments
// function jumlankanAngka(){
	// return arguments.reduce((m, i) => m + i);
	// arguments.forEach(m => jumlah += m);
// 	let jumlah = 0;
// 	for( m of arguments){
// 		jumlah += m;
// 	}
// 	return jumlah;
// }

// console.log(jumlankanAngka(1, 2, 3, 4, 5));


// ===>>> for..in
const mhs = {
	nama: 'Edwin Kurniawan',
	umur: 17,
	email: 'edwinkurniawan2004@email.com'
}

for( m in mhs){
	console.log(mhs[m]);
}