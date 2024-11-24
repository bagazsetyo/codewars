<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!-- <script src="https://cdn.tailwindcss.com"></script> -->

<style>
.tree li {
    margin: 0px 0 !important;
	list-style-type: none !important;
    position: relative !important;
	padding: 20px 5px 0px 5px !important;
}

.tree li::before{
    content: '' !important;
	position: absolute !important; 
    top: 0 !important;
	width: 1px !important; 
    height: 100% !important;
	right: auto !important; 
    left: -20px !important;
	border-left: 1px solid #ccc !important;
    bottom: 50px !important;
}
.tree li::after{
    content: '' !important;
	position: absolute !important; 
    top: 30px !important; 
	width: 25px !important; 
    height: 20px !important;
	right: auto !important; 
    left: -20px !important;
	border-top: 1px solid #ccc !important;
}
.tree li a{
    display: inline-block !important;
	border: 1px solid #ccc !important;
	padding: 5px 10px !important;
	text-decoration: none !important;
	color: #666 !important;
	font-family: arial, verdana, tahoma !important;
	font-size: 11px !important;
    border-radius: 5px !important;
	-webkit-border-radius: 5px !important;
	-moz-border-radius: 5px !important;
}

/*Remove connectors before root*/
.tree > ul > li::before, .tree > ul > li::after{
	border: 0 !important;
}
/*Remove connectors after last child*/
.tree li:last-child::before{ 
      height: 30px !important;
}

/*Time for some hover effects*/
/*We will apply the hover effect the the lineage of the element also*/
.tree li a:hover, .tree li a:hover+ul li a {
	background: #c8e4f8 !important; color: #000 !important; border: 1px solid #94a0b4 !important;
}
/*Connector styles on hover*/
.tree li a:hover+ul li::after, 
.tree li a:hover+ul li::before, 
.tree li a:hover+ul::before, 
.tree li a:hover+ul ul::before{
	border-color:  #94a0b4 !important;
}
</style>
<div class="tree p-20">
	<ul class="list-disc">
        <li>
            <a href="#" class="">php</a>
            <ul>
                <li>
                    <a href="#" class="">login</a>
                    <ul class="">
                        <li>
                            <a href="#" class="preview-file mr-20" id="D:\databagas\belajar\php\login\action_login.php">action_login.php</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#" class="">login</a>
                    <ul class="">
                        <li>
                            <a href="#" class="preview-file mr-20" id="D:\databagas\belajar\php\login\action_login.php">action_login.php</a>
                        </li>
                        <li>
                            <a href="#" class="preview-file mr-20" id="D:\databagas\belajar\php\login\action_login.php">action_login.php</a>
                        </li>
                        <li>
                            <a href="#" class="preview-file mr-20" id="D:\databagas\belajar\php\login\action_login.php">action_login.php</a>
                        </li>
                    </ul>
                </li>
                
                <li>
                    <a href="#" class="">login</a>
                    <ul class="">
                        <li>
                            <a href="#" class="preview-file mr-20" id="D:\databagas\belajar\php\login\action_login.php">action_login.php</a>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </li>
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
