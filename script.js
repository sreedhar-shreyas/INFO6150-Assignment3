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
  var studentName = table.lastElementChild.lastElementChild?.previousElementSibling?.firstElementChild?.nextElementSibling.innerHTML || "Student 0"
  console.log(studentName); 
  
  var lastIndex = studentName.split(" ")[1]; 
   var tableRow = document.createElement("tr");
   var tdCheckBoxNode = document.createElement("td");
   tdCheckBoxNode.innerHTML = '<input type="checkbox" onclick="onClickCheckBox(this)" /><br/><br/><img src="./down.png" width="25px" onclick="tableView()">'  
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
  // var tableDataDelete = document.createElement("td");
  // tableDataDelete.innerHTML = '<button>Delete</button>'
  var trNode = document.createElement("tr");
  trNode.className = "dropDownTextArea";  //broaddclasstoelement
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

  //  tableRow.appendChild(tableDataDelete);
   tbody.appendChild(tableRow);
   
   trNode.appendChild(tdAuthor9);
   

   tbody.appendChild(trNode);
  
  // alert(tableDataStudent.innerHTML+" Added Succesfully");
// checkData();
// var tblds=addrecord.studentName;
// tbl3 = addrecord.tableDataStudent;
if (studentName === null) {
  alert( "Failed to add row");
} else {
    alert(tableDataStudent.innerHTML+" Added Succesfully");
}

}

// function addrecord2(){
//   var tableRow1 = document.createElement("tr");
//   var tdCheckBoxNode1 = document.createElement("td");
//   tdCheckBoxNode1.innerHTML = '<input type="checkbox" onclick="onClickCheckBox(this)" />'  

//   tableRow.appendChild(tdCheckBoxNode1);

//   tbody.appendChild(tableRow1);
// }

function checkData() {
 
}
function tableView() {
  var tbl = document.getElementsByClassName("dropDownTextArea");
  console.log("first");
  Array.from(tbl).forEach((x) => {
    if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    console.log("broosecond");
    x.style.display = "block";
  }
})
};
// function tableView() {
// tabletoggle = document .querySelector (".dropDownTextArea");

//   tabletoggle.classList.toggle("hide");
// }
function onClickCheckBox(checkBox){
  console.log(checkBox);
  var table = document.getElementById("myTable");
  
  var adddelcol = table.firstElementChild.firstElementChild.lastElementChild;
  var selcheckboxrow = checkBox.parentElement.parentElement;
  if(checkBox.checked == true)
  {
    selcheckboxrow.style.backgroundColor="Yellow";
    var deleteButtonHeader = document.createElement("th");
    deleteButtonHeader.innerHTML = 'Delete'
    adddelcol.appendChild(deleteButtonHeader);
    var deleteButton = document.createElement("td");
    deleteButton.innerHTML = '<button id="deleted" type="button" onClick="onDelete(this)" >Delete</button>'
    
    selcheckboxrow.appendChild(deleteButton);
  }
  else{
    selcheckboxrow.style.backgroundColor="White";
    selcheckboxrow.deleteCell(8)
    // selcheckboxrow.deleteColumn(8)
  }

}
