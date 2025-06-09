
// 🕒 Display Time and Date
setInterval(() => {
  const now = new Date();
  document.getElementById('time-date').textContent = now.toLocaleTimeString();
}, 1000);

// 💬 Handle Chat Interaction
document.getElementById('send-btn').addEventListener('click', () => {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (msg === '') return;

  const chatLog = document.getElementById('chat-log');
  const userMsg = document.createElement('div');
  userMsg.className = 'user';
  userMsg.textContent = 'User: ' + msg;
  chatLog.appendChild(userMsg);

  const jarvisMsg = document.createElement('div');
  jarvisMsg.className = 'jarvis';
  jarvisMsg.textContent = 'JARVIS: Hello Sir.'; // 🧠 Basic response for V1
  chatLog.appendChild(jarvisMsg);

  input.value = '';
  chatLog.scrollTop = chatLog.scrollHeight;
});
