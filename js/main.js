// let thisIsANumber = 123.354;
// let thisIsAString = `dfgdfg`;
// let thisIsABoolean = true;

// Object holds varied information about an entity
// let thisIsAnObject = { property1: `Some value!`, property2: 12345 };

// Array holds a variable amount of information that is identical in type
// let thisIsAnArray = [ 123, 456, 789 ]


let studentRecord = [
  { stuId: `123`,  name: { first: `Rob`,      last: `Sgrignoli` },        grade: {total: 84,  letter: `A-`},  enrolled: true  },   // 0
  { stuId: `345`,  name: { first: `Xavier`,   last: `Masse` },            grade: {total: 40,  letter: `B-`},  enrolled: true },   // 1
  { stuId: `567`,  name: { first: `Michelle`, last: `Desgroseilliers` },  grade: {total: 90,  letter: `A+`},  enrolled: false  }    // 2
];




/*************** */
// APPLICATION STARTS BELOW 
/*************** */

let allRecords = document.getElementById('records');


function clearAllRecords() {
  // Clear out all the records
  allRecords.innerHTML = ``;
}


function showEnrolledStudents() {

  // Remove all student records displayed
  clearAllRecords();

  // Get the entire student records data set:                                 studentRecord
  // Filter the available records to only the students who are enrolled:      [].filter(stdnt => {stdnt.enrolled})
  // For each of the students who pass the filter, create a DOM record (li):  [].forEach(stdnt => {})
  studentRecord.filter(stdnt => stdnt.enrolled).forEach(stdnt => {

    // Create a "record": <li></li>
    let rcrd = document.createElement(`li`);
    // Add some text to the record
    rcrd.innerHTML = `${stdnt.name.first} earned ${stdnt.grade.total}% which is an ${stdnt.grade.letter}</li>`;
    // Add the record to the Records database
    allRecords.appendChild(rcrd);

  });

}




// Will show all records the first time
showAllRecord();
