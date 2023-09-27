//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
};

var socialMedia = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  flickr: "http://flickr.com",
  youtube: "http://youtube.com",
};

var t = new Title("CONNECT WITH ME!");

function addrecord() {
  var table = document.getElementById("myTable");
  console.log(table);
  var tbody = document.getElementsByTagName("tbody")[0];

  var studentName =
    table.lastElementChild.lastElementChild?.previousElementSibling
      ?.firstElementChild?.nextElementSibling?.innerHTML || "Student 0"; //gets the last student name
  console.log(studentName);

  var lastIndex = studentName.split(" ")[1]; //splitsthestudentname to two parts

  var tableRow = document.createElement("tr");

  var tdCheckBoxNode = document.createElement("td");
  tdCheckBoxNode.innerHTML =
    '<input type="checkbox" onclick="onClickCheckBox(this)" /><br/><br/><img src="./down.png" width="25px" onclick="tableView()">';

  var tableDataStudent = document.createElement("td");
  tableDataStudent.innerHTML = "Student " + (parseInt(lastIndex) + 1);

  var tableDataTeacher = document.createElement("td");
  tableDataTeacher.innerHTML = "Teacher " + (parseInt(lastIndex) + 1);

  var tableDataStatus = document.createElement("td");
  tableDataStatus.innerHTML = "Approved";

  var tableDataTerm = document.createElement("td");
  tableDataTerm.innerHTML = "Fall";

  var tableDataType = document.createElement("td");
  tableDataType.innerHTML = "TA";

  var tableDataBudget = document.createElement("td");
  tableDataBudget.innerHTML = "12344";

  var tableDataPercentage = document.createElement("td");
  tableDataPercentage.innerHTML = "100%";

  var tableDataAddnewtr = document.createElement("tr");
  tableDataAddnewtr.className = "dropDownTextArea"; //broaddclasstoelement

  var tableDataDropdownText = document.createElement("td");
  tableDataDropdownText.innerHTML =
    "Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />";

  tableRow.appendChild(tdCheckBoxNode);
  tableRow.appendChild(tableDataStudent);

  tableRow.appendChild(tableDataTeacher);
  tableRow.appendChild(tableDataStatus);

  tableRow.appendChild(tableDataTerm);
  tableRow.appendChild(tableDataType);

  tableRow.appendChild(tableDataBudget);
  tableRow.appendChild(tableDataPercentage);

  tbody.appendChild(tableRow);
  tableDataAddnewtr.appendChild(tableDataDropdownText);
  tbody.appendChild(tableDataAddnewtr);

  // Pop up check if Student is added properly
  if (studentName === null) {
    alert("Failed to add row");
  } else {
    alert(tableDataStudent.innerHTML + " Added Succesfully");
  }
}

function tableView() {
  var tbl = document.getElementsByClassName("dropDownTextArea");
  console.log("tbl variable got the data");
  Array.from(tbl).forEach((x) => {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      console.log("in the else condition");
      x.style.display = "block";
    }
  });
}

let myarray = 0;
//checkbox condition
//Issue - Adds edit to the first child, should be active child row - Resolved by changeing gettablefirstrow to selchceckboxrow for adding edit button
// document.querySelector('#button').disabled = true;
function onClickCheckBox(checkBox) {
  
  console.log(checkBox);

    //    selcheckboxrow.deleteCell(9);
    // getTableHeadingRow.deleteCell(9);
    // console.log("def working");
    // selcheckboxrow.deleteCell(8);
    // getTableHeadingRow.deleteCell(8);
    // console.log("maybeworking");
  
  // btncolor(checkBox);
  // document.querySelector('#button').disabled = false;
  var table = document.getElementById("myTable"); //gets the full table to table variable

  var selcheckboxrow = checkBox.parentElement.parentElement; //choosing the checkbox

  var getTableHeadingRow = table.lastElementChild.firstChild; //Table->tbody->First Heading
  var getTableFirstRow = table.firstElementChild.firstChild.nextElementSibling; //Table->tbody->First Heading Row -> First row elements

  var totalRowCount = table.rows.length;
  var test2 = table.firstElementChild.firstElementChild.childElementCount; //getsthecount of ths
  console.log("yo bro" + test2); // m-x 1-
  //Checkbox bg color change and adding new elements

  // Basavaraj Patil changes -- Discard

  // if(checkBox.checked){
  //   myarray +=1
  // }else{
  //   myarray -=1
  // }



  var checkedElms = table.querySelectorAll(":checked").length;
  console.log(checkedElms + "hahahahah");

  if (checkedElms >= 1) {
    document.querySelector("#button").disabled = false;
    
  } else {
    document.querySelector("#button").disabled = true;
  }

  
  // do {
  //   var deleteBtnRowHeading = document.createElement("th"); // Add new th to delete Btn Heading
  //   deleteBtnRowHeading.innerHTML = "Delete";
  //   getTableHeadingRow.appendChild(deleteBtnRowHeading);
  //   var editBtnRowHeading = document.createElement("th"); //Add new th to edit btn Heading
  //   editBtnRowHeading.innerHTML = "Edit";
  //   getTableHeadingRow.appendChild(editBtnRowHeading);
  // } while (checkedElms!=0)


  if (checkBox.checked == true) {
    myarray +=1;
    selcheckboxrow.style.backgroundColor = "Yellow"; //Changes bgcolor of the checkbox row
    // document.querySelector('#button').disabled = false;

    var deleteButton = document.createElement("td"); //Add new td
    var deleteBtnRowHeading = document.createElement("th"); // Add new th to delete Btn Heading
    deleteBtnRowHeading.innerHTML = 'Delete';
    deleteButton.innerHTML =
      '<button id="deleted" type="button" onClick="onDeleteRow(this)" >Delete</button>';
    getTableHeadingRow.appendChild(deleteBtnRowHeading);
    selcheckboxrow.appendChild(deleteButton);

    var editButton = document.createElement("td"); //Add new teable Data to table?
    var editBtnRowHeading = document.createElement("th"); //Add new th to edit btn Heading
    editBtnRowHeading.innerHTML = 'Edit';
    editButton.innerHTML =
      '<button id="edited" type="button" onClick="onEditRow(this)" >Edit</button>';
    getTableHeadingRow.appendChild(editBtnRowHeading);
    selcheckboxrow.appendChild(editButton);

    console.log("Checkbox should be delete" + selcheckboxrow);
    console.log("Edit should be edit" + getTableHeadingRow);
  } else {
    // myarray -=1
    selcheckboxrow.style.backgroundColor = "White";
    if (checkBox.checked == true){
      console.log("do nothing")
    } else{

    
    selcheckboxrow.deleteCell(9);
    getTableHeadingRow.deleteCell(9);
    console.log("def working");
    selcheckboxrow.deleteCell(8);
    getTableHeadingRow.deleteCell(8);
    console.log("maybeworking");
  }
  }
//   if(selcheckboxrow.style.backgroundColor = "White" ) {

 
//  selcheckboxrow.deleteCell(9);
//     getTableHeadingRow.deleteCell(9);
//     console.log("def working");
//     selcheckboxrow.deleteCell(8);
//     getTableHeadingRow.deleteCell(8);
//     console.log("maybeworking");
//   }




  // if(checkBox.checked == false){
  //   document.querySelector('#button').disabled = true;
  // }
  // else{
  //   document.querySelector('#button').disabled = false;
  // }
  // var form = document.table[0]; // your form element (whatever)

  if (myarray) {
    console.log(myarray+"defefdefdf working");
}
}

function onDeleteRow(deleteButtonRef) {
  var table = document.getElementById("myTable");
  var getTableHeadingRow = table.lastElementChild.firstChild; //Table->tbody->First Heading

  var selectedRow = deleteButtonRef.parentElement.parentElement;
  var index = selectedRow.rowIndex;
  document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
  alert("Row " + index + " Sucessfully been deleted");

  getTableHeadingRow.deleteCell(-1);
  getTableHeadingRow.deleteCell(-1);
  // document.querySelector('#button').disabled = true;

  console.log("def working");
}

function onEditRow(editButtonRef) {
  var table = document.getElementById("myTable");
  var getTableHeadingRow = table.lastElementChild.firstChild; //Table->tbody->First Heading

  var selectedRow = editButtonRef.parentElement.parentElement;
  var index = selectedRow.firstElementChild.nextElementSibling.innerHTML;
  prompt("Edit " + index + " Details:");
}
