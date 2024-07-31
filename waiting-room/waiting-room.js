const socket = io();

document.getElementById('create-room').addEventListener('click', () => {
    socket.emit('createRoom', (roomCode) => {
        document.getElementById('message').textContent = `Room created! Code: ${roomCode}`;
    });
});

document.getElementById('join-room').addEventListener('click', () => {
    const roomCode = document.getElementById('room-code').value.toUpperCase();
    socket.emit('joinRoom', roomCode, (success) => {
        if (success) {
            document.getElementById('message').textContent = `Joined room ${roomCode}`;
        } else {
            document.getElementById('message').textContent = `Room ${roomCode} does not exist`;
        }
    });
});
