/*Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.*/

// PART 01
var student = {
  'nome': 'John',
  'cognome': 'Lennon',
  'età': 40
}

for (key in student) {
  $('#part01').append(key, ' : ', student[key], '<br>');
  console.log(key, ' : ', student[key]);
}

// PART 02
var students = [
  {
    'nome': 'John',
    'cognome': 'Lennon',
    'età': 40
  },
  {
    'nome': 'Paul',
    'cognome': 'McCartney',
    'età': 78
  },
  {
    'nome': 'George',
    'cognome': 'Harrison',
    'età': 58
  },
  {
    'nome': 'Ringo',
    'cognome': 'Starr',
    'età': 80
  }
]

$('#allStudents').one('click', function(){
  $('#part01').remove();
  stamp(students, student, '#part02');
});


// PART 03
var newStudent = {
  'nome': undefined,
  'cognome': undefined,
  'età': undefined
}

$('#newStudentBtn').click(function(){
  newStudent.nome = prompt('Nome:');
  newStudent.cognome = prompt('Cognome:');
  newStudent.età = parseInt(prompt('età'));

  students.push(newStudent);
  for (key in newStudent) {
    $('#part02').append(key, ' : ', newStudent[key], '<br>');
    console.log(key, ' : ', student[key]);
    if (key === 'età'){
      $(id).append('<br>');
    }
  }
  console.log(students);
})
