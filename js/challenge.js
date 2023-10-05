// Code begins here

const commentForm = document.getElementById("comment-form")
commentForm.addEventListener("submit", e => {
    e.preventDefault()
    let input = document.getElementById("comment-input").value
    const commentList = document.querySelector("#list")
    console.log(commentList)
    const commentParagraph = document.createElement("p")
    commentParagraph.textContent = input

    commentList.appendChild(commentParagraph)

    // this will allow the field to be cleared everytime an input is run
    document.getElementById("comment-input").value = ""
    input = "" // this will on ly work if the variable was declared using "let"

})


let counter = 0; // Initialize the counter variable
const counterElement = document.getElementById("counter")
const likesList = document.querySelector(".likes")


let intervalCounter;

function startCounter() {
    intervalCounter = setInterval(() => {
        if (counter <= 100) {
            counterElement.textContent = counter;
            counter++; // Increment the counter
        } else {
            counter = 0;
        }
    }, 1000);
}

startCounter()



const addition = document.getElementById("plus")
addition.addEventListener("click", () => {
    counterElement.textContent = counter++
})

const subtraction = document.getElementById("minus")
subtraction.addEventListener("click", () => {
    counterElement.textContent = counter--
})

const likes = document.getElementById("heart")
likes.addEventListener("click", () => {
    const list = document.createElement("li")
    list.textContent = `You liked counter ${counter - 1}`
    likesList.appendChild(list)
})


const pause = document.getElementById("pause")
pause.addEventListener("click", () => {
    if (pause.textContent === " pause ") {
      addition.disabled = true;
      subtraction.disabled = true;
      likes.disabled = true;
      pause.textContent = " resume ";
      return clearInterval(intervalCounter);
    } else {
      addition.disabled = false;
      subtraction.disabled = false;
      likes.disabled = false;
      pause.textContent = " pause ";
      return startCounter(); // Resume the counter
    }
  });

const restart = document.getElementById("restart")
restart.addEventListener("click", () => {
    counter = 0
    clearInterval(intervalCounter)
    startCounter()
})