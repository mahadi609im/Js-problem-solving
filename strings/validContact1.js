function validContact(contact) {
   let num = '0123456789'
   let output = true

   if (typeof contact !== 'string') {
      output = 'invalid'
   } else {
      if (contact.length === 11 && contact.startsWith('01')) {
         let validNum = '';
         for (let i of contact) {
           if (num.includes(i)) {
             validNum += i;
           }
         } if (validNum === contact) {
           output = true;
         } else {
           output = false;
         }
      } else {
         output =  false
      }
   }

   return output
   
}

let contactNum = '01576445560';
let output = validContact(contactNum)
console.log(output)

