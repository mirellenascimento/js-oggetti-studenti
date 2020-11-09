/**
 * Lists all objects and insert themin html
 * @param {array} array - array with all objects
 * @param {object} object - objects in array
 * @param {string} id - html id where to list all objects
 */
 function studentList(array, object, id){
   var i = 0;
   for (var i = 0; i < array.length; i++) {
     for (key in object){
       $(id).append(key, ' : ', array[i][key], '<br>')
       if (key === 'età'){
         $(id).append('<br>');
       }
     }
   }
 };


 /**
  * Lists all objects and insert themin html
  * @param {object} newObject - object to add into the list
  * @param {string} id - html id where to list all objects
  */
function newStudentList(newObject, id){
  for (key in newObject) {
    $(id).append(key, ' : ', newObject[key], '<br>');
    if (key === 'età'){
      $(id).append('<br>');
    }
  }
};
