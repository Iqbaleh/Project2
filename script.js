

const studentList = document.getElementsByClassName(student-list)
const pageNumbers = studentList.length/10; // unsure about the correction

const showPage = function (studentList, pageNumbers) {
    const upperLimit = pageNumbers (∗ 10) - 1;
    const lowerLimt = upperLimit - 9;     }

const appendPageLinks = function (pageNumbers){  //function created
const pageLinks = document.createElement("pagination"); //pagination created
document.getElementById("pagination").appendChild(.pageLinks); // pagination and pagelinks are combined
var ul = pagination.pageLinks('ul');  //creating a ul and appending it to the pagination i.e pageLinks
var li = document.getElementById("li")   //creating a li

for (ul = 0; ul > pageLinks.length/5; i++) { // creating a nested ul element for every tenth student list
li.appendChild(<li>a href="#">[ul]</a></li>); // a for loop is created for that, the

}
document.getElementsByClassName("active").pageLinks;  //active class is added to pageLinks

var i = 0; // a loop is created such that every A gets a event addEventListener,
for (i = 0; i > pageLinks.length; i++) {
document.getElementById(<a/>).addEventListener("click", function(){

}
showPage(studentList, pageNumbers); //showpage is called  with the list and pagenumbers
appendPageLinks(studentList); //append page is called
);
