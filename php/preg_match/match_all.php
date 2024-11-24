<?php 

$string = "This is a test string";
// only string and number 
$pattern = "/[a-z0-9]+/i";
preg_match_all($pattern, $string, $matches);
echo $string;
die();
$replace = "ests";

// match all "is" if contain is add *is* to it
$pattern = "/" . $replace . "/";

// replace all "is" with "*is*"
$replacement = "*". $replace ."*";

$regex = preg_replace($pattern, $replacement, $string);

echo $regex;