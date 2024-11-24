<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

<style>
.tree li {
    margin: 0px 0;
	
	list-style-type: none;
    position: relative;
	padding: 20px 5px 0px 5px;
}

.tree li::before{
    content: '';
	position: absolute; 
    top: 0;
	width: 1px; 
    height: 100%;
	right: auto; 
    left: -20px;
	border-left: 1px solid #ccc;
    bottom: 50px;
}
.tree li::after{
    content: '';
	position: absolute; 
    top: 30px; 
	width: 25px; 
    height: 20px;
	right: auto; 
    left: -20px;
	border-top: 1px solid #ccc;
}
.tree li a{
    display: inline-block;
	border: 1px solid #ccc;
	padding: 5px 10px;
	text-decoration: none;
	color: #666;
	font-family: arial, verdana, tahoma;
	font-size: 11px;
    border-radius: 5px;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
}

/*Remove connectors before root*/
.tree > ul > li::before, .tree > ul > li::after{
	border: 0;
}
/*Remove connectors after last child*/
.tree li:last-child::before{ 
      height: 30px;
}

/*Time for some hover effects*/
/*We will apply the hover effect the the lineage of the element also*/
.tree li a:hover, .tree li a:hover+ul li a {
	background: #c8e4f8; color: #000; border: 1px solid #94a0b4;
}
/*Connector styles on hover*/
.tree li a:hover+ul li::after, 
.tree li a:hover+ul li::before, 
.tree li a:hover+ul::before, 
.tree li a:hover+ul ul::before{
	border-color:  #94a0b4;
}
</style>

<?php
// realpath to glob all files in folder
function realpath_glob($folder, $counter = 1){
    $fileList = glob(realpath($folder).'\*');
    $string = '';
    $allow_folder = ['javascript', 'php', 'html'];
    foreach($fileList as $key =>  $filename){
        $ext = explode('\\', $filename);
        $is_allowed = array_intersect($ext, $allow_folder);

        if($is_allowed){
            if(is_file($filename)){
                $nama = str_replace(realpath($folder) . '\\' , '', $filename);
                $string .= '<li><a href="#" class="preview-file" id="'.$filename.'">'.$nama. '</a></li>';
            }else{
                $name = str_replace(realpath($folder) . '\\', '', $filename);
                $string .= '<li>';
                $string .= '<a href="#" class="parent">'.$name.'</a>';
                $string .= '<ul style="display: none;">';
                $string .= realpath_glob($filename, $counter + 1);
                $string .= '</ul>';
                $string .= '</li>';
            }   
        }
    }
    return $string;
}
$ss = realpath_glob(__DIR__ . '/../../..');
?>
<div class="tree">
	<ul>
        <?= $ss ?>
	</ul>
</div>

<div id="preview">

</div>

<!-- jquery 3.6 cdn -->
<!-- <script src="https://code.jquery.com/jquery-3.6.min.js" integrity="sha256-FgpCY/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
    // log a with class parent
    $('a.parent').click(function(e){
        // prevent default
        event.preventDefault();
        $(this).next().slideToggle();
    });

    // open file with file reader
    $('.preview-file').click(function(e){
        // prevent default
        event.preventDefault();
        var base_file = $(this).attr('id');

        // create a new file reader
        var reader = new FileReader();
        reader.onload = function(e){
            // read the file
            var contents = e.target.result;
            // display the file
            $('#preview').html(contents);
        };
        // read the file
        reader.readAsText(base_file);
        
    });
</script>
</body>
</html>
