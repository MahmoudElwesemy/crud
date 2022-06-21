let BookNameInput = document.querySelector("#bookName")
let startTimeInput = document.querySelector("#startTime")
let endTimeInput = document.querySelector("#endTime");
let bookRatingInput = document.querySelector("#bookRating");
let linkInput = document.querySelector("#link");
let booksContainer = []
let addBtn = document.querySelector("#addBook");


if (localStorage.getItem("mybooks") != null) {
    booksContainer = JSON.parse(localStorage.getItem("mybooks"));
    displayBooks()
}

function addBook() {
    let data = {
        BookName: BookNameInput.value,
        startTime: startTimeInput.value,
        endTime: endTimeInput.value,
        bookRating: bookRatingInput.value,
        link: linkInput.value

    }
    booksContainer.push(data)
    localStorage.setItem("mybooks", JSON.stringify(booksContainer))
    displayBooks()
    clearForm()
}
addBtn.addEventListener("click", function() {
    addBook()
})



function displayBooks() {
    let cartoona = ``

    for (let i = 0; i < booksContainer.length; i++) {

        cartoona +=
            `<tr>
                <td> ${i+1}</td>
                <td> ${booksContainer[i].BookName} </td>
                <td> ${booksContainer[i].startTime}</td>
                <td>${booksContainer[i].endTime} </td>
                <td>${booksContainer[i].bookRating} </td>
                <td> <a href ="${booksContainer[i].link}">  ${booksContainer[i].link}</a></td>
                <td> <button class="update" onclick="updateBooks(${i})"> update </button></td>
                <td> <button class="delete" onclick="deletebooks(${i})"> delete </button></td>
             </tr>`
    }

    document.getElementById("tableDisplay").innerHTML = cartoona
}

function clearForm() {
    BookNameInput.value = ""
    startTimeInput.value = ""
    endTimeInput.value = ""
    bookRatingInput.value = ""
    linkInput.value = ""
}

function deletebooks(index) {

    booksContainer.splice(index, 1);
    displayBooks()

    localStorage.setItem("mybooks", JSON.stringify(booksContainer));
}

function updateBooks(index) {
    BookNameInput.value = booksContainer[index].BookName
    startTimeInput.value = booksContainer[index].startTime
    endTimeInput.value = booksContainer[index].endTime
    bookRatingInput.value = booksContainer[index].bookRating
    linkInput.value = booksContainer[index].link
    deletebooks()
}