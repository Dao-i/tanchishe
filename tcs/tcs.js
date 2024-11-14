let snake = [{ x: 10, y: 10 }];
let food = { x: 15, y: 15 };
let score = 0;
let direction = { x: 1, y: 0 };
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
let gameInterval;

// 添加背景音乐
const backgroundMusic = new Audio('https://freetyst.nf.migu.cn/public/product9th/product44/2021/08/0306/2018%E5%B9%B407%E6%9C%8803%E6%97%A515%E7%82%B910%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E6%A2%A6%E5%93%8D%E5%BC%BA%E9%9F%B3187%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/6404689Z0BW060757.mp3?channelid=02&msisdn=fc689135-8f0a-4ebf-a35f-06bd54ef1995&Tim=1728578042514&Key=ab8acd7d93bb5ee8'); // 替换为实际的音乐文件链接
backgroundMusic.loop = true; // 循环播放

// 添加音效
const rainSound = new Audio('https://www.soundjay.com/button/sounds/button-3.mp3');
const eatSound = new Audio('https://www.soundjay.com/button/sounds/button-9.mp3');

function startGame() {
    score = 0;
    snake = [{ x: 10, y: 10 }];
    direction = { x: 1, y: 0 };
    drawGame();
    clearInterval(gameInterval);
    gameInterval = setInterval(updateGame, 100);
    generateFood();
    createRain();
    backgroundMusic.play(); // 播放背景音乐
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

    scoreDisplay.textContent = score;
}

function updateGame() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // 检测碰撞
    if (head.x < 0 || head.x >= 60 || head.y < 0 || head.y >= 60 || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        clearInterval(gameInterval);
        alert('游戏结束！得分: ' + score);
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
    } else {
        snake.pop();
    }

    drawGame();
}

function generateFood() {
    do {
        food.x = Math.floor(Math.random() * 60);
        food.y = Math.floor(Math.random() * 60);
    } while (snake.some(segment => segment.x === food.x && segment.y === food.y));
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
    setInterval(() => {
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
        });
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
