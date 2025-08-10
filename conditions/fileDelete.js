/******* Problem 04 - (Delete / Store) ******/
var fileName = 'pdfData.jpg';

//write your code here
if (
  fileName.endsWith('docx') ||
  fileName.endsWith('pdf') ||
  fileName.startsWith('#')
) {
  console.log('Store');
} else {
  console.log('Delete');
}
