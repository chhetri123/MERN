const apiKey = "Your Key"; // Replace with your API key

const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("user-input");
const form = document.getElementById("form");
const alert = document.getElementById("alert");

async function sendMessage(message) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }],
        }),
      }
    );

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (err) {
    return err.message;
  }
}

form.addEventListener("submit", submitHandler);

async function submitHandler(e) {
  e.preventDefault();
  try {
    const message = userInput.value.trim();
    if (userInput.value) {
      appendMessage("user", message);
      userInput.value = "";
      appendMessage("chatgpt", "Thinking...");
      const response = await sendMessage(message);
      chatContainer.removeChild(chatContainer.lastChild);
      appendMessage("chatgpt", response, true);
    }
  } catch (err) {
    console.log(err.message);
    chatContainer.removeChild(chatContainer.lastChild);
    appendMessage(
      "chatgpt",
      "Sorry, there was an error processing your request."
    );
  }
}

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert.classList.add("show");

      setTimeout(() => {
        alert.classList.remove("show");
      }, 3000);
    })

    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}

function appendMessage(sender, message, isMark = false) {
  const messageElement = document.createElement("div");
  messageElement.classList.add(
    "message",
    sender === "user" ? "user-message" : "chatgpt-message"
  );
  let userName = `<strong>${sender === "user" ? "You" : "ChatGPT"}:</strong> `;
  let copyClipIcon = `
    <i class="fas fa-copy copy-icon" title="Copy to clipboard"></i>
  `;

  messageElement.innerHTML = isMark
    ? marked.parse(userName + message)
    : userName + message;
  messageElement.innerHTML += copyClipIcon;

  const copyIcon = messageElement.querySelector(".copy-icon");
  copyIcon.addEventListener("click", () => copyToClipboard(message));

  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
