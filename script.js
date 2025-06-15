// function send()
// {
//      var input=document.querySelector(".text").value;
//      if(input==="")
//      {
//         return;
//      }
//      document.querySelector(".text").value="";
//      show(input,"user_message");
//      setTimeout(function()
//     {
//         var bot=response(input);
//         show(bot,"bot_reply");
//     },1000);
// }

// function show(message,message_class)
// {
//     var element=document.createElement("div");
//     element.classList.add("message",message_class);
//     document.querySelector(".chat").appendChild(element);
//      document.querySelector(".chat").scrollTop= document.querySelector(".chat").scrollHeight;
//      document.querySelector(".main_container").scrollTop=document.querySelector(".main_container").scrollHeight;
// }

// function response(user_message)
// {
//     const responses={
//         "hi":"Hi",
//         "hello":"Hi,How can i help you for today!",
//         "how are you":"I am fine, Thanks for asking!",
//         "what's your name":"My name is Lucifer",
//         "what's your age":"I am a coded chatbot so i dont have any age",
//         "bye":"Goodbye!,Have a Great day!"
//     }
//     return responses[user_message.toLowerCase()] || "Sorry! I dont understand what you are trying to say.";
// }



function send() {
    const inputField = document.querySelector(".text");
    const input = inputField.value.trim();

    if (input === "") return;

    inputField.value = "";
    show(input, "user_message");

    setTimeout(function () {
        const bot = response(input);
        show(bot, "bot_reply");
    }, 1000);
}

function show(message, message_class) {
    const element = document.createElement("div");
    element.classList.add("message", message_class);
    element.innerText = message;

    document.querySelector(".chat").appendChild(element);

    // Scroll to bottom of chat
    const chatBox = document.querySelector(".main_container");
    chatBox.scrollTop = chatBox.scrollHeight;
}

function response(user_message) {
    const responses = {
        "hi": "Hi",
        "hello": "Hi, how can I help you today!",
        "how are you": "I am fine, thanks for asking!",
        "what's your name": "My name is Lucifer.",
        "what's your age": "I am a coded chatbot, so I don't have an age.",
        "bye": "Goodbye! Have a great day!"
    };

    return responses[user_message.toLowerCase()] || "Sorry! I don't understand what you are trying to say.";
}
