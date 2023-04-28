import {
  getAllCategories,
  deleteCategoryByID,
  postCategory,
  editCategoryByID,
} from "./httprequests.js";
let list = document.querySelector(".categories");
let editModal = document.querySelector("#edit-category-modal");
let EditCloseModal = document.querySelector(".close-modal-edit");
let editBtn = document.querySelector(".edit-btn");
let editNameInput = document.querySelector("#edit-name");
let editDescInput = document.querySelector("#edit-desc");

getAllCategories().then((data) => {
  data.forEach((category) => {
    list.innerHTML += `<li data-desc="${category.description}" class="list-group-item d-flex  justify-content-between">
      <span>${category.name}</span>
      <div>
      <button class="btn btn-warning" data-id="${category.id}">Edit</button>
      <button class="btn btn-danger" data-id="${category.id}">Delete</button>
      </div>
      </li>`;
  });
  //delete button click event
  Array.from(list.children).forEach((item) => {
    let deleteButton = item.children[1].children[1];
    let editButton = item.children[1].children[0];
    let categoryName = item.children[0].textContent;
    deleteButton.addEventListener("click", (e) => {
      //sweet alert
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });

      swalWithBootstrapButtons
        .fire({
          title: `Are you sure to delete ${categoryName}?`,
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
            let id = e.target.getAttribute("data-id");
            deleteCategoryByID(id);
            //delete from UI
            e.target.parentElement.parentElement.remove();
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
              "Cancelled",
              "Your imaginary file is safe :)",
              "error"
            );
          }
        });
    });

    //get editing data values
    let nameEdit = categoryName;
    let descEdit = item.getAttribute("data-desc");
    let idEdit = item.children[1].children[0].getAttribute("data-id");
    let editingObj = {
      id: idEdit,
      name: nameEdit,
      description: descEdit,
    };

    //edit button click - modal
    editButton.addEventListener("click", () => {
      document.body.classList.add("modal-body");
      editModal.style.opacity = "1";
      editModal.style.visibility = "visible";
      editModal.style.transform = "translate(-50%,-50%) scale(1)";

     
      editNameInput.value = editingObj.name;
      editDescInput.value = editingObj.description;
    });
    //edit button request
    editBtn.addEventListener("click", (e) => {
      e.preventDefault();
      let newName = editNameInput.value;
      let newDesc = editDescInput.value;
      let updatedCategory = {
        name: newName,
        description: newDesc,
      };
      console.log(updatedCategory);
      editCategoryByID(editingObj.id,updatedCategory);
      EditModalClose();
    });
  });
});

//open modal
let openModal = document.querySelector(".open-modal");
let closeModal = document.querySelector(".close-modal");
let modal = document.querySelector("#add-category-modal");

openModal.addEventListener("click", () => {
  document.body.classList.add("modal-body");
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
  modal.style.transform = "translate(-50%,-50%) scale(1)";
});

closeModal.onclick = function () {
  ModalClose();
};
EditCloseModal.onclick = function () {
  EditModalClose();
};

function ModalClose() {
  document.body.classList.remove("modal-body");
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
  modal.style.transform = "translate(-50%,-50%) scale(0)";
}
function EditModalClose() {
  document.body.classList.remove("modal-body");
  editModal.style.opacity = "0";
  editModal.style.visibility = "hidden";
  editModal.style.transform = "translate(-50%,-50%) scale(0)";
}

//add product
let nameInput = document.querySelector("#name");
let descInput = document.querySelector("#desc");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const category = {
    name: nameInput.value,
    description: descInput.value,
  };
  //reset inputs
  nameInput.value = "";
  descInput.value = "";
  postCategory(category);

  // add product to UI
  list.innerHTML += `<li data-desc="${category.description} class="list-group-item d-flex  justify-content-between">
  <span>${category.name}</span>
  <div>
  <button class="btn btn-warning" data-id="${category.id}">Edit</button>
  <button class="btn btn-danger" data-id="${category.id}">Delete</button>
  </div>
  </li>`;

  //close modal
  ModalClose();
});
