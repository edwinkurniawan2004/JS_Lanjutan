// ===>>> Speard Operator
// memecah iterables menjadi single element

// const mhs = ['Shandika', 'Doddy', 'Erik'];
// console.log(...mhs[0])

// ===>>> Menggabungkan 2 array
// const mhs = ['Shandika', 'Doddy', 'Erik'];
// const dosen = ['ade', 'hendra', 'wanda'];
// const orang = [...mhs, 'Aji', ...dosen];
// const orang = mhs.concat(dosen);
// console.log(orang)


// ===>>> Meng-copy Array
// const mhs = ['Shandika', 'Doddy', 'Erik'];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = 'fajar';
// console.log(mhs1)


// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for( let i = 0; i < liMhs.length; i++){
// 	mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs)


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;