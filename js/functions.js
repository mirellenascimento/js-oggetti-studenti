/**
 * Lists all objects and insert themin html
 * @param {array} array - array with all objects
 * @param {object} object - objects
 * @param {string} id - html id where to list all objects
 */
 function stamp(array, object, id){
   var i = 0;
   for (var i = 0; i < array.length; i++) {
     for (key in object){
       $(id).append(key, ' : ', array[i][key], '<br>')
       if (key === 'età'){
         $(id).append('<br>');
       }
       console.log(key, ' : ', array[i][key]);
     }
   }
 };
