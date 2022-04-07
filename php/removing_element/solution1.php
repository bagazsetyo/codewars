<?php
function removeEveryOther($array) {
  foreach($array as $k => $v) if($k&1) unset($array[$k]);
  return $array;
}