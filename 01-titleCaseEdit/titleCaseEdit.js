function titleCaseEdit(title) {
  
  newTitle = title.charAt(0).toUpperCase();
  
  for(let i = 1; i < title.length; i++){
    if(title.charAt(i) == " "){
      newTitle += " ";
      newTitle += title.charAt(i + 1).toUpperCase();
      i++;
    } else{
      newTitle += title.charAt(i);
    }
  }

  return newTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;