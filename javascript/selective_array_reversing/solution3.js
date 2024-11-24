const selReverse=(arr,l)=>l ? Array.from({length:Math.ceil(arr.length/l)},(a,i)=>arr.slice(i*l,i*l+l).reverse()).reduce((a,b)=>a.concat(b),[]) : arr;
