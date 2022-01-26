// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

//mencari angka >= 3
//  for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++){
// 	if(angka[i] >= 3){
// 		newAngka.push(angka[i]);
// 	}
// }

// console.log(newAngka);

//  filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);


//  map
//kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);


//  Reduce
//jumlahkan seluruh elemen pada angka
//0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) =>
// accumulator + currentValue, 0); // 0 adalah nilai awal
// console.log(newAngka);


// Method Chaining
// Cari angka > 5
// kalikan 3
//jumlahkan
// const hasil = angka.filter(a => a > 5) // 8, 9, 9
// .map(a => a * 3) // 24, 27, 27
// .map(a => a * 2)
// .reduce((acc,cur) => acc + cur) 
// console.log(hasil);




//Latihan map, filter, reduce

// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))
// Ambil durasi masing2 video
.map(item => item.dataset.duration)

// Ubah durasi menjadi float, ubah menit menjadi detik
.map(waktu => {
	// 10:30 -> [10, 30] split
	const parts = waktu.split(':').map(part => parseFloat(part));
	return (parts[0] * 60) + parts[1];
})

// Jumlahkan semua detik
.reduce((total, detik) => total + detik);

// Ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// Simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.innerHTML = `${jmlVideo} Video.`;

