<?php
$image = file_get_contents($_POST['image_base64']);
file_put_contents('imagem.jpg', $image);
?>