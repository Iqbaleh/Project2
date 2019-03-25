const pageNumbers = document.querySelector(".page");
const studentList = document.getElementsByClassName(student-list)
const showPage = showPage(studentList, pageNumbers) {
  const upperLimit = pageNumbers (∗ 10) - 1;
  const lowerLimt = upperLimit - 9;     }

  for(i = 0;  i < studentList.length; i++) { //So basically we are saying OK, do this to every single on the list.
    if studentList[i] >= lowerLimit && studentList[i] >= upperLimit //[i] is to say, this applies to every one in that list? Also, i get 
    //if the studentList is equal or more than upperLimit, then we display, however i really dont get the point of the lowerLimit.
                         {
    upperLimit.style.display = studentList[i]; // here we say ok upperLimit, you display 10 items of studentList ? couldnt we just say
                           // studentList.style.display = studentList[i] 
}
     else if  {
      studentList[i].style.display = none;


    }
    for(i = 0; i < pageNumbers.length; i++) // here i thought that well, it may be good function when we press the next button.
                                            // essentially take the upperLimit and time it by 2 meaning show the next 10 items
      { upperLimit ∗ 2 && lowerLimit ∗ 2



}
}
}

appendPageLinks{
document.getElementById("pagination").addEventListener("click") => () {
  showPage;
}

}


//

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
