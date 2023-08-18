const hobbies=['jogar vôlei', 'cantar', 'comer', 'escutar música'];
console.log(hobbies)
console.log(hobbies[0])
console.log(hobbies[1])
console.log(hobbies[2])
hobbies[0] = 'ler livros';
console.log(hobbies)

//quantos hobbies voce tem 
console.log(hobbies.length);
hobbies.push('cozinhar');
console.log(hobbies);
hobbies.pop();
console.log(hobbies);
let posicao = hobbies.indexOf('jogar vôlei');
hobbies.splice(posicao, 1);
console.log(hobbies)

const amigo=['jogar volei', 'cozinhar', 'escutar música'];

const todosOsHobbies = hobbies.concat(amigo);
console.log(todosOsHobbies);

const
hobbiesMusicais = ['cantar','escutar música'];
hobbiesEsportivos = ['Jogar vôlei', 'nadar'];
categoriasDeHobbies = [hobbiesMusicais, hobbiesEsportivos];
console.log(categoriasDeHobbies[0]);

categoriasDeHobbies[0][0]
console.log(categoriasDeHobbies[0][0]);
categoriasDeHobbies[1][2]
console.log(categoriasDeHobbies[1][1]);
