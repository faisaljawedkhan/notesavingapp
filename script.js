
let submitBtn = document.getElementById("submitBtn");


const noteSavingData = (e) => {
    e.preventDefault();
    let addToCart = document.getElementById("addToCart");
    let notes = localStorage.getItem("notes");
    if (notes === null) {
        notesArray = [];
    } else {
        notesArray = JSON.parse(notes)
    }
    notesArray.push(addToCart.value);
    localStorage.setItem("notes", JSON.stringify(notesArray));
    addToCart.value = ""
    dispalyNotesArray();
}

const dispalyNotesArray = () => {
    let notes = localStorage.getItem("notes")
    if (notes === null) {
        notesArray = [];
    } else {
        notesArray = JSON.parse(notes);
    }
    let liValue = ""
    notesArray.forEach((newElement, index) => {
        liValue += `
                <li key=${index + 1}>
                    <h5>${newElement}</h5>
                    <button class="deleteBtn" onClick="deleteNotes(${index})">Delete</button>
                </li>
        `
    })
    let elementDiv = document.getElementById("notes");
    if (notesArray.length !== 0) {
        elementDiv.innerHTML = liValue;
      } else {
        elementDiv.innerHTML = `<h4>Nothing to show! Use "Add a Note" section above to add notes.</h4>`;
      }
}

function deleteNotes (index) {
    let notes = localStorage.getItem("notes");
    if (notes === null) {
        notesArray = [];
    } else {
        notesArray = JSON.parse(notes)
    }
    notesArray.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesArray));
    dispalyNotesArray();
}

dispalyNotesArray();
submitBtn.addEventListener("click", noteSavingData);