let studentRecord = [
  { stuId: 123,  name: { first: `Rob`,      last: `Sgrignoli` },        grade: {total: 84,  letter: `A-`} },   // 0
  { stuId: 345,  name: { first: `Xavier`,   last: `Masse` },            grade: {total: 70,  letter: `B-`} },   // 1
  { stuId: 567,  name: { first: `Michelle`, last: `Desgroseilliers` },  grade: {total: 90,  letter: `A+`} }    // 2
];

// Where are we putting this stuff?
let allRecords = document.getElementById('records');

function clearAllRecords() {
  // Clear out all the records
  allRecords.innerHTML = ``;
}
// 1. Add a clear button to the interface to call this above function


function showAllRecord() {
  clearAllRecords();

  // for (var i = 0; i < studentRecord.length; i++) {
  //   allRecords.innerHTML += `<li>${studentRecord[i].name.first} earned ${studentRecord[i].grade.total}% which is an ${studentRecord[i].grade.letter}</li>`;
  // }

  studentRecord.forEach(stdnt => {
    allRecords.innerHTML += `<li>${stdnt.name.first} earned ${stdnt.grade.total}% which is an ${stdnt.grade.letter}</li>`;
  });

}
// 2. Add a refresh button to the interface to call this above function



// Functions we will add:
// addNewStudent()
// deleteStudent()
// showOneStudentRecord()
// updateGrade()



// Will show all records the first time
showAllRecord();
