const db = require('../utils/database');
const Users        = require('../models/users.model');
const Courses      = require('../models/courses.model');
const UsersCourses = require('../models/users_courses.model');
const Categories   = require('../models/categories.model');
const Videos       = require('../models/videos.model');
const initModels   = require('../models/init.model');

initModels();

const users = [
  { firstName: 'Tom',     lastName: 'Welling', password: 'hY8AXziQ7J6SbJZ', email: 'welling100@gmail.com'  },
  { firstName: 'Laura',   lastName: 'Marano',  password: 'EVBQnfYerbHd0M2', email: 'laurimarano@gmail.com' },
  { firstName: 'Henry',   lastName: 'Azogue',  password: 'KRK0tTqk4zRPgT7', email: 'hnrazogue@gmail.com'   },
  { firstName: 'Kiernan', lastName: 'Shipka',  password: 'a9tEtWV8nBFtL7N', email: 'kiishipka@hotmail.com' },
  { firstName: 'Sarahy',  lastName: 'Messa',   password: 'wXZW4NVvfD9Mww4', email: 'sarymesa@hotmail.com'  }
];

const courses = [
  { //1
    title:       'Causas frecuentes de muerte', 
    description: 'Hemos hablado muchas veces en este curso sobre cómo funciona el cuerpo humano, sobre los miles de procesos simultáneos que ocurren a cada instante: células que se dividen, ADN que se replican, hormonas viajando de un lado al otro del organismo.', 
    instructur:  'Sandra Ortonobes Lara'
  },
  { //2
    title:       'La diabetes mellitus', 
    description: 'La diabetes mellitus es uan enfermedad en la que las células pierden la capacidad de captar y utilizar la glucosa como fuente de energía debido a que el sistema de la INSULINA no funciona correctamente.', 
    instructur:  'Sandra Ortonobes Lara'
  },
  { //3
    title:       'Retoque de fotos Luminar AI',
    description: 'Ponemos a prueba el nuevo programa Luminar AI, sobre retoque fotográfico con inteligencia artificial. Te permite hacer retoques de color automáticos, edición de paisajes con efectos y cambios de cielo gracias a la IA.',
    instructur:  'Kike Arnaiz'
  },
  { //4
    title:       'Tutorial de Lightroom y Photoshop', 
    description: 'Bienvenidos a este tutorial, donde edito vuestras fotografías, que me mandasteis en RAW, veremos técnicas de retoque, mi flujo de trabajo, y hasta un pequeño fotomontaje de sustituir un cielo en una foto.', 
    instructur:  'Kike Arnaiz'
  },
  { //5
    title:       'Roadmap en desarrollo web', 
    description: 'Roadmap o también llamado camino del desarrollo que significa, que debo de estudiar y en que el orden que debo estudiarlo.', 
    instructur:  'Eduardo Fierro'
  },
  { //6
    title:       'Cambia tu metabolismo', 
    description: 'El azucar no ayuda en un aumento de la energia, y caes en un estado de pesades provocando un malestar dentro de la familia.', 
    instructur:  'Lain García Calvo'
  },
  { //7
    title:       'Organización para la universidad', 
    description: 'Hoy os traigo por fin el vídeo de cómo me organizo para la universidad, espero que los tips, trucos y métodos que uso os pueda ayudar a vosotros también a llevar el curso de una manera más organizada.', 
    instructur:  'Carolette Martin'
  },
  { //8
    title:       'Organización y estudio', 
    description: 'En este vídeo te enseño el método de estudio que utilizo en la universidad para sacar todo 10. Támbien te muestro cómo me organizo desde inicio de curso y los trabajos.', 
    instructur:  'Carolette Martin'
  },
  { //9
    title:       'Salud mental', 
    description: '"COMO SI NADIE ESCUCHARA" un runcón en el que estaré compartiendo todo sobre mí: opiniones, ideas, experiencias, consejos y quiero que tu me acompañes.', 
    instructur:  'Cris Blanco'
  },
  { //10
    title:       'Salud mental', 
    description: '"COMO SI NADIE ESCUCHARA" tengo solo 22 años y paso por estas etapas donde de cierta manera quiero encajar con los demas, ser aceptado y formar parte pero no cuadra por el como se comportan los demas o simplemente soy así.', 
    instructur:  'Cris Blanco'
  }
];

const usersCoures = [
  {idUser: 1, idCourse: 1},
  {idUser: 1, idCourse: 2},
  {idUser: 2, idCourse: 3},
  {idUser: 2, idCourse: 4},
  {idUser: 3, idCourse: 5},
  {idUser: 3, idCourse: 6},
  {idUser: 4, idCourse: 7},
  {idUser: 4, idCourse: 8},
  {idUser: 5, idCourse: 9},
  {idUser: 5, idCourse: 10}
];
const categories = [
  { name: 'EL CUERPO HUMANO', idCourse: 1 },
  { name: 'EL CUERPO HUMANO', idCourse: 2 },
  { name: 'FOTOGRAFíA', idCourse: 3 },
  { name: 'FOTOGRAFíA', idCourse: 4 },
  { name: 'DESARROLLO WEB', idCourse: 5 },
  { name: 'DESARROLLO PERSONAL', idCourse: 6 },
  { name: 'SUPERACIÓN', idCourse: 7 },
  { name: 'SUPERACIÓN', idCourse: 8 },
  { name: 'CONOCIMIENTO DE UNO', idCourse: 9 },
  { name: 'CONOCIMIENTO DE UNO', idCourse: 10 },
];
const videos = [
  { 
    title:   'Las 3 CAUSAS de MUERTE más FRECUENTES en TODO el MUNDO',
    url:     'https://www.youtube.com/watch?v=zZ0GgmK1AFQ', 
    idCourse: 1 
  },
  { 
    title:    'Por qué la DIABETES es más COMPLEJA de lo que crees (y hoy vas a ENTENDERLA)',
    url:      'https://www.youtube.com/watch?v=l3xxCR3LGaI', 
    idCourse: 2 
  },
  { 
    title:    'Retoque de fotos con INTELIGENCIA ARTIFICIAL Luminar AI',
    url:      'https://www.youtube.com/watch?v=iC1_9zlC6mE&list=PLyNvsloSbd7MGqYfgBXyi-5i86WvZg3-H&index=1', 
    idCourse: 3 
  },
  { 
    title:   'Descubre cómo MEJORAR TUS FOTOS en pocos pasos >> Tutorial de Lightroom y Photoshop',
    url:     'https://www.youtube.com/watch?v=A-ESItDZui4&list=PLyNvsloSbd7MGqYfgBXyi-5i86WvZg3-H&index=2', 
    idCourse: 4 
  },
  { 
    title:    'ROADMAP para APRENDER PROGRAMACIÓN WEB 2023: Front, Back y JAVASCRIPT Developer',
    url:      'https://www.youtube.com/watch?v=cC44XvWzSh0', 
    idCourse: 5 
  },
  { 
    title:    '¡4 SEMANAZ sin AZUCAR pueden CAMBIAR tu METABOLISMO! INCREIBLES RESULTADOS EN TU SALUD',
    url:      'https://www.youtube.com/watch?v=7H15uB2_0DE', 
    idCourse: 6
  },
  { 
    title:    'Cómo me organizo para la universidad | Carolette Martin',
    url:      'https://www.youtube.com/watch?v=1Qz1yooh0I4', 
    idCourse: 7 
  },
  { 
    title:    'Cómo me ORGANIZO y ESTUDIO para sacar todo 10 |Carolette Martin',
    url:      'https://www.youtube.com/watch?v=wC2hwcZn5ds', 
    idCourse: 8 
  },
  { 
    title:    'No sé qué hacer con mi vida | Como si nadie escuchara #1',
    url:      'https://www.youtube.com/watch?v=YlcTMKajijY', 
    idCourse: 9
  },
  { 
    title:    'Soy joven y siento que no encajo | Como si nadie escuchara #2',
    url:      'https://www.youtube.com/watch?v=vLKXLc9S3aI', 
    idCourse: 10
  },
];

db.sync({ force: true })
  .then( ()=> {
    users.forEach( (user)=> Users.create(user) );

    setTimeout( ()=> {
      courses.forEach( (course)=> Courses.create(course) );
    }, 100);

    setTimeout( ()=> {
      usersCoures.forEach( (userCourse)=> UsersCourses.create(userCourse) );
    }, 200 );

    setTimeout( ()=> {
      categories.forEach( (category)=> Categories.create(category) );
    }, 300 );
    
    setTimeout( ()=> {
      videos.forEach( (video)=> Videos.create(video) );
    }, 400 );
  })
  .catch( (error)=> console.log(error) );