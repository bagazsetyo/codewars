<?php
function removeEveryOther($array) {
  
  $arr = array_filter($array, function($key) {
     return $key % 2 == 0;
  }, ARRAY_FILTER_USE_KEY);
  
  return $arr;
}