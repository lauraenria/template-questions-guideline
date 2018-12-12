
// Some random data

let kanoQuestions = ["What is the Harry Potter Kano Coding Kit?", 'Welcome to the Harry Potter Kano Coding Kit', 'Pricing & Availability for the Harry Potter Kano Coding Kit', "What's in the Harry Potter Kano Coding Kit?", "How do I install the Harry Potter Kano Coding Kit app?", "How do I use my Coding Wand?"];

// this function is going to create a list of links and append our data
function renderQuestion(questions) {
    let list = document.querySelector(".list");
    console.log(list);
    for (let i = 0; i < questions.length; i++) {
        let li = document.createElement("li");
        let link = document.createElement("a"); 
        link.setAttribute("href", "#");
        li.appendChild(link);
        link.innerText = questions[i];
        list.appendChild(li);
    }
    return list;
}

renderQuestion(kanoQuestions);