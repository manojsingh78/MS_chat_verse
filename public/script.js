// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const socket = io();   // Initialize Socket.io

    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');    
    const chatMessages = document.getElementById('chat-messages'); 

    sendButton.addEventListener('click', () => {
        const message = messageInput.value;     
        if (message.trim() !== '') {            
            socket.emit('chatMessage', message);
            messageInput.value = '';            
        }
    });

    socket.on('message', (message) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
    });
});
// 