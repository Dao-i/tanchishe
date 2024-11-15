body {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
    background-image: url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0');
    background-size: cover;
    height: 100vh;
    margin: 0;
    overflow: hidden;
}

#gameArea {
    width: 600px;
    height: 600px;
    border: 2px solid #000;
    position: relative;
    background-color: rgba(240, 240, 240, 0.8);
    margin-bottom: 20px;
}

#scoreBoard {
    margin: 10px;
    font-size: 20px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 10px;
}

button:hover {
    background-color: #0056b3;
}

#chatContainer {
    position: fixed;
    left: 20px;
    bottom: 20px;
    width: 300px;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #000;
    padding: 10px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.5);
}

#chatMessages {
    max-height: 200px;
    overflow-y: auto;
    margin-bottom: 10px;
}

#chatInput, #nickname {
    width: 70%;
    padding: 5px;
    margin-right: 5px;
}

#sendButton {
    padding: 5px 10px;
}

#emojiPicker {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;
}

.emoji {
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
    margin: 2px;
}

.joystick {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 120px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.joystick-button {
    width: 50px;
    height: 50px;
    background: rgba(0, 123, 255, 0.8);
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s;
}

.joystick-button:hover {
    background: rgba(0, 123, 255, 1);
}

.rain {
    position: absolute;
    top: -10px;
    width: 2px;
    height: 10px;
    background: rgba(255, 255, 255, 0.6);
    animation: fall linear infinite;
}

@keyframes fall {
    to {
        transform: translateY(100vh);
    }
}
