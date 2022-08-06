function video(){
    navigator.mediaDevices.getUserMedia({video: true})
        .then(function (mediaStream) {
            const video = document.querySelector('#video');
            video.srcObject = mediaStream;
            video.play();
        })
        .catch(function (err) {
            console.log('Não há permissões para acessar a webcam')
        })
}
function capturar(){
    
    document.querySelector('#capture').addEventListener('click', function (e) {
        var canvas = document.querySelector("#canvas");
        const video = document.querySelector('#video');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.style.width = '70%';
        canvas.style.height = 'auto';
        var context = canvas.getContext('2d');
        context.drawImage(video, 0, 0)
    })
}
function salvar(){
    document.querySelector('#upload').addEventListener('click', function (e) {
    
        var canvas = document.querySelector("#canvas");
    
        canvas.toBlob(function (blob) {
    
            var form = new FormData();
            form.append('image', blob, 'webcam.jpg');
    
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/upload', true);
            xhr.onload = function(e) {
                // upload concluído  
            };
    
            xhr.send(form);  
    
        }, 'image/jpeg');
    })

}