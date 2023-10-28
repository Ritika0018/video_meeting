document.addEventListener('DOMContentLoaded', function() {
    const socket = io();
    const roomId = window.location.pathname.split('/room/')[1];
    const localVideo = document.getElementById('localVideo');
    const remoteVideo = document.getElementById('remoteVideo');

    const peer = new SimplePeer({ trickle: false });

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
            localVideo.srcObject = stream;
            peer.addStream(stream);

            socket.emit('join-room', roomId);
        });

    peer.on('signal', (data) => {
        socket.emit('signal', { signal: data, roomId });
    });

    socket.on('user-connected', (peerId) => {
        peer.signal(peerId);
    });

    socket.on('signal', (data) => {
        peer.signal(data.signal);
    });

    peer.on('stream', (stream) => {
        remoteVideo.srcObject = stream;
    });
});
