//Clase constructura para objetos (Discos de musica)
class Disco {
    constructor(id, artista, nombre, genero, pais, año, precio, img, url) {
      this.id = id;
      this.artista = artista;
      this.nombre = nombre;
      this.genero = genero;
      this.pais = pais;
      this.año = año;
      this.precio = precio;
      this.img = img;
      this.url = url
    }
  }
  
  //Arrays Discografia Charly Garcia
  let charly1 = new Disco(1, "Charly Garcia", "Clics modernos", "New wave", "Argentina", 1983, 6200, "assets/img/albumes/album2.jpg");
  let charly2 = new Disco(2, "Charly Garcia", "Piano Bar", "New wave", "Argentina", 1984, 4500, "assets/img/albumes/album3.jpg");
  let charly3 = new Disco(3, "Charly Garcia", "Filosofía barata y zapatos de goma", "New wave", "Argentina", 1990, 7000, "assets/img/albumes/album6.jpg");
  
  //Arrays Discografia Spinetta
  let spinetta1 = new Disco(4, "Luis Alberto Spinetta", "Peluson of Milk", "Rock psicodelico", "Argentina", 1991, 5900, "assets/img/albumes/1.jpg");
  let spinetta2 = new Disco(5, "Luis Alberto Spinetta", "Para los arboles", "Rock psicodelico", "Argentina", 2003, 6200, "assets/img/albumes/2.jpg");
  let spinetta3 = new Disco(6, "Luis Alberto Spinetta", "Artaud", "Rock psicodelico", "Argentina", 1973, 4500, "assets/img/albumes/3.jpg");
  
  //Arrays Discos de Gorillaz
  let gorillaz1 = new Disco(7, "Gorillaz", "Gorillaz", "Rock Alternativo", "Inglaterra", 2001, 8600, "assets/img/albumes/gorillaz-2001.jpg");
  let gorillaz2 = new Disco(8, "Gorillaz", "Demon Days", "Rock Alternativo", "Inglaterra", 2005, 8600, "assets/img/albumes/demon-days.jpg");
  let gorillaz3 = new Disco(9, "Gorillaz", "Plastic Beach", "Rock Alternativo", "Inglaterra", 2010, 8600, "assets/img/albumes/plastic-beach.jpg");
  
  let redhot1 = new Disco(10, "Red Hot Chili Peppers", "Blood Sugar Sex Magic", "Funk", "USA", 1991, 8600, "assets/img/albumes/blood-sugar.jpg");
  let redhot2 = new Disco(11, "Red Hot Chili Peppers", "Stadium Arcadium", "Funk", "USA", 2006, 8600, "assets/img/albumes/stadium-arcadium.jpg");
  
  let daftpunk1 = new Disco(12, "Daft Punk", "Random Access Memories", "Funk", "Francia", 2013, 8600, "assets/img/albumes/ram.webp");
  let massiveattack1 = new Disco(13, "Massive Attack", "Mezzanine", "Trip-Hop", "Inglaterra", 1998, 8600, "assets/img/albumes/mezzanine.jpg");
  let prodigy1 = new Disco(14, "Prodigy", "The Fat of the Land", "Rock Alternativo", "Inglaterra", 1997, 8600, "assets/img/albumes/fat-of-the-land.jpg");
  let rageagainst1 = new Disco(15, "Rage Against the Machine", "Evil Empire", "Funk metal", "USA", 1996, 8600, "assets/img/albumes/evil-empire.jpg");
  
  let radiohead1 = new Disco(16, "Radiohead", "Kid A", "Rock Alternativo", "Inglaterra", 2000, 8600, "assets/img/albumes/kid-a.jpg");
  let radiohead2 = new Disco(17, "Radiohead", "In Rainbows", "Rock Alternativo", "Inglaterra", 2007, 8600, "assets/img/albumes/in-rainbows.jpg");
  
  let racounters1 = new Disco(18, "The Racounters", "Broken Boy Soldiers", "Rock Alternativo", "USA", 2006, 8600, "assets/img/albumes/broken-boy-soldiers.jpg");
  let whitestripes1 = new Disco(19, "White Stripes", "Elephant", "Rock Alternativo", "USA", 2003, 8600, "assets/img/albumes/elephant.jpg");
  
  let articmonkeys1 = new Disco(20, "Artic Monkeys", "Favourite Worst Nightmare", "Rock Alternativo", "USA", 2007, 8600, "assets/img/albumes/favourite-worst-nightmare.jpg");
  let articmonkeys2 = new Disco(21, "Artic Monkeys", "AM", "Rock Alternativo", "USA", 2013, 8600, "assets/img/albumes/am.jpg");
  
  
  
  //metodo push (agregamos las arrays, a nuestra variable vacia "discos")
  discos.push(gorillaz1, gorillaz2, gorillaz3, redhot1, redhot2, daftpunk1, massiveattack1, prodigy1, rageagainst1, radiohead1, radiohead2, racounters1, whitestripes1, articmonkeys1, articmonkeys2, charly1, charly2, charly3, spinetta1, spinetta2, spinetta3);
  