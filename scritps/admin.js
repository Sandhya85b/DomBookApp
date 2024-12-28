let form = document.getElementById("form").addEventListener("submit", () => {
    event.preventDefault()
    function loaddata() {
        const data = JSON.parse(localStorage.getItem("data")) || []
        cont.innerHTML = "";
        if (adminform == adminobj) {

            let title = form.title.value;
            let author = form.author.value;
            let category = form.category.value
            let submit = form.submit.value
            let AvalibilityStatus=form.AvalibilityStatus.value
            let booksobj = { title, author, category, AvalibilityStatus:false }

            fetch("https://elated-splashy-almanac.glitch.me/books", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(booksobj)
            })
                .then(() => {
                    alert("Book Added Successfully")
                })
            
            // to display books in grid 
            function displaybooks(books) {
                const grid = document.getElementById("booksgrid")
                grid.innerHTML = booksobj
                    .map(
                        (booksobj) => `
                             <div class="books">
                             <h3> ${title}</h3 >
                               </div >`)
                    .join("");

}
        } else {
            window.location.href = "index.html";
        }
    })

    //verify button
  const verify=document.getElementById("verify")
   verify.addEventListener("click",()=>{
    alert("Are you sure to Verify..?")
    if(true){
        AvalibilityStatus:true
        button.disabled = true
    }
    })

//disable buttton
const deletecont=document.getElementById("delete");
deletecont.addEventListener("click",()=>{
  alert("Are you sure to Delete..?")
  if(true){
    delete(booksobj)
  }
})