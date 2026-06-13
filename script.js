function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.trim().toLowerCase();

    if(message === ""){
        return;
    }

    let chatbox = document.getElementById("chatbox");

    let userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.innerText = message;
    chatbox.appendChild(userDiv);

    let botResponse = "";

    if(message.includes("timetable")){
        botResponse =
        "Your class timetable is available on the student portal.";
    }

    else if(message.includes("exam")){
        botResponse =
        "Upcoming exams start from 15 December. Check notice board regularly.";
    }

    else if(message.includes("faculty")){
        botResponse =
        "Faculty information is available through the department office.";
    }

    else if(message.includes("event")){
        botResponse =
        "AI Workshop and Coding Competition will be conducted next Friday.";
    }

    else if(message.includes("resource")){
        botResponse =
        "Recommended resources: NPTEL, Coursera, GeeksforGeeks, W3Schools.";
    }

    else if(message.includes("hello") || message.includes("hi")){
        botResponse =
        "Hello! How can I help you today?";
    }

    else if(message.includes("sdg")){
        botResponse =
        "This project supports SDG 4: Quality Education.";
    }

    else{
        botResponse =
        "Sorry, I couldn't understand your question.";
    }

    let botDiv = document.createElement("div");
    botDiv.className = "bot-message";
    botDiv.innerText = botResponse;
    chatbox.appendChild(botDiv);

    chatbox.scrollTop = chatbox.scrollHeight;

    input.value = "";
}