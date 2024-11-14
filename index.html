let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 15 };
let bombs = []; // 存储炸弹的位置
let score = 0;
let direction = { x: 1, y: 0 };
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
let gameInterval;
let isPaused = false; // 游戏暂停状态
let difficulty = 'easy'; // 默认难度

// 添加背景音乐
const backgroundMusic = new Audio('https://freetyst.nf.migu.cn/public/product9th/product44/2021/08/0306/2018%E5%B9%B407%E6%9C%8803%E6%97%A515%E7%82%B910%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E6%A2%A6%E5%93%8D%E5%BC%BA%E9%9F%B3187%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/6404689Z0BW060757.mp3?channelid=02&msisdn=fc689135-8f0a-4ebf-a35f-06bd54ef1995&Tim=1728578042514&Key=ab8acd7d93bb5ee8');
backgroundMusic.loop = true; // 循环播放

// 添加音效
const rainSound = new Audio('https://www.soundjay.com/button/sounds/button-3.mp3');
const eatSound = new Audio('https://www.soundjay.com/button/sounds/button-9.mp3');

// 聊天功能
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const nicknameInput = document.getElementById('nickname');
const sendButton = document.getElementById('sendButton');
const emojiButtons = document.querySelectorAll('.emoji');

sendButton.addEventListener('click', () => {
    const nickname = nicknameInput.value.trim();
    const message = chatInput.value.trim();

    if (nickname && message) {
        const messageElement = document.createElement('div');
        const avatarUrl = `https://api.adorable.io/avatars/40/${nickname}.png`; // 生成头像
        messageElement.innerHTML = `<img src="${avatarUrl}" alt="${nickname}'s avatar" style="width: 40px; height: 40px; border-radius: 50%; vertical-align: middle; margin-right: 5px;"> ${nickname}: ${message}`;
        chatMessages.appendChild(messageElement);

        // 自动删除消息
        setTimeout(() => {
            messageElement.remove();
        }, 10 * 60 * 1000); // 10分钟后删除
    }

    chatInput.value = ''; // 清空输入框
});

// 处理 Emoji 选择
emojiButtons.forEach(button => {
    button.addEventListener('click', () => {
        const emoji = button.getAttribute('data-emoji');
        chatInput.value += emoji; // 将选中的 emoji 添加到输入框
    });
});

// 难度选择
const difficultySelect = document.getElementById('difficulty');
difficultySelect.addEventListener('change', (event) => {
    difficulty = event.target.value;
});

function startGame() {
    score = 0;
    snake = [{ x: 10, y: 10 }];
    direction = { x: 1, y: 0 };
    bombs = []; // 清空炸弹
    drawGame();
    clearInterval(gameInterval);
    gameInterval = setInterval(updateGame, getSpeed()); // 根据难度设置速度
    generateFood();
    generateBombs(); // 生成炸弹
    createRain();
    backgroundMusic.play(); // 播放背景音乐
}

function getSpeed() {
    switch (difficulty) {
        case 'easy':
            return 150; // 简单模式速度
        case 'medium':
            return 100; // 中等模式速度
        case 'hard':
            return 50; // 困难模式速度
        default:
            return 100; // 默认速度
    }
}

function drawGame() {
    gameArea.innerHTML = '';
    snake.forEach((segment, index) => {
        const snakeSegment = document.createElement('div');
        snakeSegment.style.width = '10px';
        snakeSegment.style.height = '10px';
        const hue = (index * 360 / snake.length) % 360;
        snakeSegment.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        snakeSegment.style.position = 'absolute';
        snakeSegment.style.left = segment.x * 10 + 'px';
        snakeSegment.style.top = segment.y * 10 + 'px';
        gameArea.appendChild(snakeSegment);
    });

    const foodElement = document.createElement('div');
    foodElement.style.width = '10px';
    foodElement.style.height = '10px';
    foodElement.style.backgroundColor = 'red';
    foodElement.style.position = 'absolute';
    foodElement.style.left = food.x * 10 + 'px';
    foodElement.style.top = food.y * 10 + 'px';
    gameArea.appendChild(foodElement);

    // 绘制炸弹
    bombs.forEach(bomb => {
        const bombElement = document.createElement('div');
        bombElement.style.width = '10px';
        bombElement.style.height = '10px';
        bombElement.style.backgroundColor = 'black'; // 炸弹颜色
        bombElement.style.position = 'absolute';
        bombElement.style.left = bomb.x * 10 + 'px';
        bombElement.style.top = bomb.y * 10 + 'px';
        gameArea.appendChild(bombElement);
    });

    scoreDisplay.textContent = score;
}

function updateGame() {
    if (isPaused) return; // 如果游戏暂停，直接返回

    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // 检测碰撞
    if (head.x < 0 || head.x >= 60 || head.y < 0 || head.y >= 60 || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        clearInterval(gameInterval);
        alert('游戏结束！得分: ' + score);
        backgroundMusic.pause(); // 停止背景音乐
        return;
    }

    // 检测是否吃到炸弹
    if (bombs.some(bomb => head.x === bomb.x && head.y === bomb.y)) {
        clearInterval(gameInterval);
        alert('游戏结束！你吃到了炸弹！得分: ' + score);
        backgroundMusic.pause(); // 停止背景音乐
        return;
    }

    snake.unshift(head);

    // 检测是否吃到食物
    if (head.x === food.x && head.y === food.y) {
        score++;
        generateFood();
        showRandomEmoji(); // 弹出随机 emoji
        eatSound.currentTime = 0; // 重置音效播放时间
        eatSound.play(); // 播放吃到果子的音效
        generateBombs(); // 每次吃到果子后生成新的炸弹
    } else {
        snake.pop();
    }

    drawGame();
}

function generateFood() {
    do {
        food.x = Math.floor(Math.random() * 60);
        food.y = Math.floor(Math.random() * 60);
    } while (snake.some(segment => segment.x === food.x && segment.y === food.y) || bombs.some(bomb => bomb.x === food.x && bomb.y === food.y)); // 确保食物不与蛇或炸弹重叠
}

// 生成随机数量的炸弹
function generateBombs() {
    const bombCount = Math.floor(Math.random() * 5) + 1; // 随机生成1到5个炸弹
    bombs = []; // 清空之前的炸弹
    for (let i = 0; i < bombCount; i++) {
        let newBomb;
        do {
            newBomb = { x: Math.floor(Math.random() * 60), y: Math.floor(Math.random() * 60) };
        } while (snake.some(segment => segment.x === newBomb.x && segment.y === newBomb.y) || bombs.some(bomb => bomb.x === newBomb.x && bomb.y === newBomb.y)); // 确保炸弹不与蛇或其他炸弹重叠
        bombs.push(newBomb);
    }
}

// 弹出随机 emoji
function showRandomEmoji() {
    const emojis = ['🍎', '🍌', '🍉', '🍇', '🍓', '🍒', '🍍', '🥭', '🍑', '🍋'];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    const emojiElement = document.createElement('div');
    emojiElement.textContent = randomEmoji;
    emojiElement.style.position = 'absolute';
    emojiElement.style.fontSize = '30px';
    emojiElement.style.top = Math.random() * (window.innerHeight - 50) + 'px'; // 随机位置
    emojiElement.style.left = Math.random() * (window.innerWidth - 50) + 'px'; // 随机位置
    emojiElement.style.transition = 'transform 0.5s';
    
    document.body.appendChild(emojiElement);
    
    // 动画效果
    setTimeout(() => {
        emojiElement.style.transform = 'scale(2)';
    }, 10);
    
    // 移除 emoji
    setTimeout(() => {
        emojiElement.remove();
    }, 1000);
}

// 创建雨滴效果
function createRain() {
    const maxRainDrops = 50; // 最大雨滴数量
    let currentRainDrops = 0; // 当前雨滴数量

    setInterval(() => {
        if (currentRainDrops < maxRainDrops) {
            const rainDrop = document.createElement('div');
            rainDrop.className = 'rain';
            rainDrop.style.left = Math.random() * window.innerWidth + 'px'; // 随机位置
            rainDrop.style.animationDuration = Math.random() * 1 + 0.5 + 's'; // 随机持续时间
            document.body.appendChild(rainDrop);
            rainSound.currentTime = 0; // 重置音效播放时间
            rainSound.play(); // 播放雨滴音效

            // 雨滴动画结束后移除
            rainDrop.addEventListener('animationend', () => {
                rainDrop.remove();
                currentRainDrops--; // 减少当前雨滴数量
            });

            currentRainDrops++; // 增加当前雨滴数量
        }
    }, 100); // 每100毫秒生成一个雨滴
}

// 监听键盘事件
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: 1, y: 0 };
            break;
        case ' ': // 空格键暂停
            isPaused = !isPaused; // 切换暂停状态
            if (isPaused) {
                clearInterval(gameInterval); // 暂停游戏
                backgroundMusic.pause(); // 停止背景音乐
            } else {
                gameInterval = setInterval(updateGame, getSpeed()); // 继续游戏
                backgroundMusic.play(); // 播放背景音乐
            }
            break;
    }
});

// 创建摇杆
function createJoystick() {
    const joystick = document.createElement('div');
    joystick.className = 'joystick';
    document.body.appendChild(joystick);

    const directions = [
        { x: 0, y: -1, position: 'up' },
        { x: -1, y: 0, position: 'left' },
        { x: 1, y: 0, position: 'right' },
        { x: 0, y: 1, position: 'down' }
    ];

    directions.forEach(dir => {
        const button = document.createElement('div');
        button.className = 'joystick-button';
        button.addEventListener('click', () => {
            direction = dir;
        });
        joystick.appendChild(button);
    });
}

// 启动游戏
document.getElementById('startButton').addEventListener('click', startGame);
createJoystick(); // 创建摇杆
