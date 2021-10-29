function order(words){
  if (words === '') {
    return ''
  } else {
    const arr = words.split(' ');
    const arr2 = [];
    for (let i = 1; i <= arr.length; i++){
      arr.forEach(word => {
        if (word.includes(i.toString())) {
          arr2.push(word);
        }
      });
    }
    return arr2.join(' ');
  }
}