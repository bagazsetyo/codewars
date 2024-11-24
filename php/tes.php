 
<!-- //   function encrypt_decrypt($string, $action = 'encrypt')
//     {
//         $encrypt_method = "AES-256-CBC";
//         $secret_key = 'Nw+U#vXGRWv$KXYHPhyk';
//         $secret_iv = '3XZGcrU8cC';
//         $key = hash('sha256', $secret_key);
//         $iv = substr(hash('sha256', $secret_iv), 0, 16);
//         if ($action == 'encrypt') {
//             $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
//             $output = base64_encode($output);
//         } else if ($action == 'decrypt') {
//             $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
//         }
//         return $output;
//     }

//     $encrupt = encrypt_decrypt('4059', 'encrypt');

//     echo $encrupt . '<br>';

//     $decrypt = encrypt_decrypt($encrupt, 'decrypt');

//     echo $decrypt; -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" enctype="multipart/form-data">
        <input type="file" name="filess">
        <button type="submit">lala</button>
    </form>

    

    <?php 
        var_dump($GLOBALS);
    ?>
</body>
</html>