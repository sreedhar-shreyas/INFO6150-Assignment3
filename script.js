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
    '<input type="checkbox" onclick="onClickCheckBox(this)" /><br/><br/><img src="./down.png" width="25px" onclick="tableView(this)">';

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
  tableDataAddnewtr.className = "dropDownTextArea";
 
   //broaddclasstoelement

  var tableDataDropdownText = document.createElement("td");
  // tableDataDropdownText.innerHTML = "<style> <td colspan="8">"
  // tableDataDropdownText.colSpan = 8;
  // tableDataDropdownText.setAttribute("colspan", "7");
  tableDataDropdownText.innerHTML = "Advisor:"+(parseInt(lastIndex) + 1)+"<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />";

  

  
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








function tableView(element) {
 

var tbl = element.parentElement.parentElement.nextElementSibling;

if(tbl.style.display === "block"){
  tbl.style.display = "none"
}
else{
  tbl.style.display="block"
}
}
  
let myarray = 0;









function onClickCheckBox(checkBox) {
  console.log(checkBox);
  var table = document.getElementById("myTable"); //gets the full table to table variable
  var selcheckboxrow = checkBox.parentElement.parentElement; //choosing the checkbox
  var getTableHeadingRow = table.lastElementChild.firstChild; //Table->tbody->First Heading
  // var getTableFirstRow = table.firstElementChild.firstChild.nextElementSibling; //Table->tbody->First Heading Row -> First row elements
  // var totalRowCount = table.rows.length;
  // var test2 = table.firstElementChild.firstElementChild.childElementCount; //getsthecount of ths
  // console.log("yo bro" + test2);

  var checkedElms = table.querySelectorAll(":checked").length;
  console.log(checkedElms + "Length of checked boxes");

  if (checkBox.checked == true) {
    console.log(checkedElms);
    selcheckboxrow.style.backgroundColor = "Yellow"; //Changes bgcolor of the checkbox row
    if (checkBox.checked == true && checkedElms <= 1) {
      console.log("inside loop nope");
      var deleteBtnRowHeading = document.createElement("th"); // Add new th to  Btn Heading
      deleteBtnRowHeading.innerHTML = "Delete";
      getTableHeadingRow.appendChild(deleteBtnRowHeading);
      var editBtnRowHeading = document.createElement("th"); //Add new th to edit btn Heading
      editBtnRowHeading.innerHTML = "Edit";
      getTableHeadingRow.appendChild(editBtnRowHeading);
    } else if (checkBox.checked == false && checkedElms > 1) {
      console.log("else loop");
    }

    var deleteButton = document.createElement("td"); //Add new td

    deleteButton.innerHTML =
      '<button id="deleted" type="button" onClick="onDeleteRow(this)" >Delete</button>';

    selcheckboxrow.appendChild(deleteButton);

    var editButton = document.createElement("td"); //Add new teable Data to table?

    editButton.innerHTML =
      '<button id="edited" type="button" onClick="onEditRow(this)" >Edit</button>';

    selcheckboxrow.appendChild(editButton);

    console.log("Checkbox should be delete" + selcheckboxrow);
    console.log("Edit should be edit" + getTableHeadingRow);
  } else {
    selcheckboxrow.style.backgroundColor = "White";

    selcheckboxrow.deleteCell(9);
    getTableHeadingRow.deleteCell(9);
    console.log("shreyas")

    console.log("def working");
    
    selcheckboxrow.deleteCell(8);
    getTableHeadingRow.deleteCell(8);

    console.log("maybeworking");
  }

  if (checkedElms >= 1) {
    document.querySelector("#button").disabled = false;
  } else {
    document.querySelector("#button").disabled = true;
  }
}









function onDeleteRow(deleteButtonRef) {
  var table = document.getElementById("myTable");
  var getTableHeadingRow = table.lastElementChild.firstChild; //Table->tbody->First Heading
  myarray += 1;

  var selectedRow = deleteButtonRef.parentElement.parentElement;
  var index = selectedRow.rowIndex;
  var index2 = selectedRow.firstElementChild.nextElementSibling.innerHTML;

  if(confirm("Do you really want to delete Row "+selectedRow.rowIndex+" ?")){
    document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
    var index3 = table.querySelectorAll(":checked").length;
    if(index3 ==0){
    getTableHeadingRow.deleteCell(-1);
    getTableHeadingRow.deleteCell(-1);
    alert("Sucessfully deleted");
  }
  

  console.log("def working");

  if (index3 == 0) {
    document.querySelector("#button").disabled = true;
    
  } else if (index3>1) {
    document.querySelector("#button").disabled = false;
  }
}
}










function onEditRow(editButtonRef) {
  var table = document.getElementById("myTable");
  var getTableHeadingRow = table.lastElementChild.firstChild; //Table->tbody->First Heading

  var selectedRow = editButtonRef.parentElement.parentElement;
  var index = selectedRow.firstElementChild.nextElementSibling.innerHTML;

  prompt("Edit " + index + " Details:");

  if (prompt != null) {
    alert("Edited Successfully");
  }
}

