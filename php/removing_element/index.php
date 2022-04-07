<?php 

$arr = ["Keep", "Remove", "Keep", "Remove", "Keep"];
// $s = array_flip($arr);

$arr = array_filter($arr, function($key) {
    return $key % 2 == 0;
}, ARRAY_FILTER_USE_KEY);

echo json_encode($arr);