let cbtn = null;
function deleteData(btn) {
  let row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
function clearForm() {
  document.querySelector(".modal-title").innerHTML = "Add New User";
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let role = document.getElementById("role");
  name.value = null;
  email.value = null;
  phone.value = null;
  role.value = null;
}
function updateNewData() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let role = document.getElementById("role");

  cbtn.cells[0].innerHTML = name.value;
  cbtn.cells[1].innerHTML = email.value;
  cbtn.cells[2].innerHTML = phone.value;
  cbtn.cells[6].innerHTML = role.value;
}
function saveForm() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let role = document.getElementById("role");
  let table = document.getElementById("dataTable");
  let row = table.insertRow(-1);
  row.insertCell(0).innerHTML = name.value;
  row.insertCell(1).innerHTML = email.value;
  row.insertCell(2).innerHTML = phone.value;
  row.insertCell(3).innerHTML = Math.floor(Math.random() * 11);
  row.insertCell(4).innerHTML = Math.floor(Math.random() * 11);
  row.insertCell(5).innerHTML = "Active";
  row.insertCell(6).innerHTML = role.value;
  row.insertCell(7).innerHTML = Math.floor(Math.random() * 11) + " minutes ago";
  row.insertCell(8).innerHTML = `<button class="btn" onclick="deleteData(this)">
                <i class="fa fa-trash"></i>
              </button>
              <button
                onclick="editForm(this);btnUpdateUser()"
                class="btn"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                <i class="fa fa-pencil-square-o"></i>
              </button>`;
}
function editForm(btn) {
  document.querySelector(".modal-title").innerHTML = "Edit User Data";
  cbtn = btn.parentNode.parentNode;
  var cData = cbtn.cells;
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let role = document.getElementById("role");
  name.value = cData[0].innerText;
  email.value = cData[1].innerText;
  phone.value = cData[2].innerText;
  role.value = cData[6].innerText;
}

function btnAddUser() {
  document.getElementById("updateBtn").style.display = "none";
  document.getElementById("addUserBtn").style.display = "block";
}
function btnUpdateUser() {
  document.getElementById("addUserBtn").style.display = "none";
  document.getElementById("updateBtn").style.display = "block";
}

var myModal = document.getElementById("myModal");
var myInput = document.getElementById("myInput");
var hdd = document.querySelector(".hdd");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});
