// Template Literal / Template String
// const nama = 'Edwin Kurniawan';
// const umur = 17;
// console.log(`Halo, nama saya ${nama}, dan umur saya ${umur}`);


// Embedded Expression
// console.log(`${1 + 5}`);
// console.log(`${alert('mantapu jiwa')}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);


// HTML Fragments
// const mhs = {
// 	nama : 'edwin kurniawan',
// 	umur : 17,
// 	nrp : 5046353148,
// 	email : 'edwinkurniawan2004@email.com'
// };

// const el = `<div class='mhs'>
// 	<h2>nama : ${mhs.nama}</h2>
// 	<h3>umur : ${mhs.umur}</h3>
// 	<span class='nrp'>nrp : ${mhs.nrp}</span>
// 	<a href='${mhs.email}'>${mhs.email}</a>
// </div>`;

// document.body.innerHTML = el;



// 1. HTML Fragments
// const mhs = {
// 	nama : 'edwin kurniawan',
// 	umur : 17,
// 	nrp : 5046353148,
// 	email : 'edwinkurniawan2004@email.com'
// };

// const el = `<div class='mhs'>
// 	<h2>nama : ${mhs.nama}</h2>
//  	<h3>umur : ${mhs.umur}</h3>
//  	<span class='nrp'>nrp : ${mhs.nrp}</span>
//  	<a href='${mhs.email}'>${mhs.email}</a>
//  	</div>`;


// 2. Looping
// const mhs = [
// 	{
// 		nama: 'edwin kurniawan',
// 		email: 'edwinkurniawan2004@email.com'
// 	},
// 	{
// 		nama: 'Doddy',
// 		email: 'erik@email.com'
// 	},
// 	{
// 		nama: 'erik',
// 		email: 'erik@email.com'
// 	}
// ];
// const el = `<div class="mhs">
// 	${mhs.map(m => `<ul>
// 		<li>${m.nama}</li>
// 		<li>${m.email}</li>
// 	</ul>`).join('')}
// </div>`


// 3.Conditionals
// ternary
// const lagu = {
// 	judul: 'Kau Adalah',
// 	penyanyi: 'Isyana Sarasvati',
// 	//feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
// 	<ul>
// 		<li>${lagu.penyanyi}</li>
// 		<li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
// 	</ul>
// </div>`;


// 4. Nested
// HTML Fragments bersarang
// const mhs = {
// 	nama : 'Edwin Kurniawan',
// 	semester : 5,
// 	mataKuliah : [
// 		'Rekayasa Web',
// 		'Analisis dan Perancangan Sistem Informasi',
// 		'Pemrograman Sistem Interaktif',
// 		'Perancangan Sistem Berorientasi Object'
// 	]
// }

// function cetakMataKuliah(mataKuliah){
// 	return `
// 		<ol>
// 			${mataKuliah.map(mk => `<li>${mk}</li>`).join(`<br>`)}
// 		</ol>
// 	`
// }

// const el = `<div class="mahasiswa1">
// 	<h3>Nama : ${mhs.nama}</h3>
// 	<h3>Semester : ${mhs.semester}</h3>
// 	<h3>Daftar mata kuliah :</h3>
// 	${cetakMataKuliah(mhs.mataKuliah)}
// </div>`

// document.body.innerHTML = el;


// Togged templates
// const nama = 'Edwin Kurniawan';
// const umur = 17;

// function coba(strings, ...values ){
// 	// let result = '';
// 	// strings.forEach((str, i) => {
// 	// 	result += `${str}${values[i] || ''}`;
// 	// });
// 	// return result;

// 	return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);



// Hightlight
const nama = 'Edwin Kurniawan';
const umur = 17;
const email = 'edwinkurniawan2004@email.com';

function hightlight(strings, ...values ){
	return strings.reduce((result, str, i) => `${result}${str} <span class="hl">${values[i] || ''}</span>`, '');
}

const str = hightlight`Halo, nama saya ${nama}, saya ${umur} tahun, email saya yaitu ${email}.`;
document.body.innerHTML = str;
