<?php
function removeEveryOther($array) {
  foreach ($array as $pointer => $value) {
    if (is_array($value)) {
      $array[$pointer] = removeEveryOther($value);
    } else {
      if ($pointer%2!=0) {
        unset($array[$pointer]);
      }
    }
  }
  return $array;
}