
const objeto1 = { nombre: "Sergie Code" };
const objeto2 = { profesion: 'programador' };

const combinado = { ...objeto1, ...objeto2 };
console.log(combinado)


// { nombre: "Sergie Code", profesion: 'programador' }