//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

function addrecord() {


  var table = document.getElementById("myTable");
  console.log(table);
  var tbody = document.getElementsByTagName("tbody")[0];
  

  // var studentName = table.lastElementChild.lastElementChild?.firstElementChild?.nextElementSibling?.innerHTML || "Student 0"
  var studentName = table.lastElementChild.lastElementChild?.previousElementSibling?.firstElementChild?.nextElementSibling.innerHTML || "doesnt work"
  console.log(studentName); 
  var lastIndex = studentName.split(" ")[1]; 
   var tableRow = document.createElement("tr");
   var tdCheckBoxNode = document.createElement("td");
   tdCheckBoxNode.innerHTML = '<input type="checkbox" onclick="onClickCheckBox(this)" />'  
   var tableDataStudent = document.createElement("td");
   tableDataStudent.innerHTML = 'Student '+(parseInt(lastIndex)+1)
   var tableDataTeacher = document.createElement("td");
   tableDataTeacher.innerHTML = 'Teacher '+(parseInt(lastIndex)+1)
   var tableDataStatus = document.createElement("td");
   tableDataStatus.innerHTML = 'Approved'
  var tableDataTerm = document.createElement("td");
  tableDataTerm.innerHTML = 'Fall'
  var tableDataType = document.createElement("td");
  tableDataType.innerHTML = 'TA'
  var tableDataBudget = document.createElement("td");
  tableDataBudget.innerHTML = '12344'
  var tableDataPercentage = document.createElement("td");
  tableDataPercentage.innerHTML = '100%'
  var tableDataDelete = document.createElement("td");
  tableDataDelete.innerHTML = '<button>Delete</button>'
  var trNode = document.createElement("tr");
  var tdAuthor9 = document.createElement("td");
  tdAuthor9.innerHTML = 'Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />'

  


   tableRow.appendChild(tdCheckBoxNode);
   tableRow.appendChild(tableDataStudent);

   tableRow.appendChild(tableDataTeacher);

   tableRow.appendChild(tableDataStatus);

   tableRow.appendChild(tableDataTerm);
   tableRow.appendChild(tableDataType);

   tableRow.appendChild(tableDataBudget);

   tableRow.appendChild(tableDataPercentage);

   tableRow.appendChild(tableDataDelete);
   tbody.appendChild(tableRow);
   
   trNode.appendChild(tdAuthor9);
   

   tbody.appendChild(trNode);
  
  

  

}

// function addrecord2(){
//   var tableRow1 = document.createElement("tr");
//   var tdCheckBoxNode1 = document.createElement("td");
//   tdCheckBoxNode1.innerHTML = '<input type="checkbox" onclick="onClickCheckBox(this)" />'  

//   tableRow.appendChild(tdCheckBoxNode1);

//   tbody.appendChild(tableRow1);
// }
