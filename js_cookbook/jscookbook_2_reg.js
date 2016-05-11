/**
 * 2016-05-10
 * Chapter 2.Using Regular Expressions
 * Regular Expression can be both a literal and an object
 */
function introduction() {
  //Regexp literal
  var re1 = /Shelley\s+Powers/;
  //正则表达式中'\'加大写字母或小写字母，所表达的含义正好相反，如：
  var re2_1 = /\d/;             //匹配一个数字字符
  var re2_2 = /\D/;             //匹配一个非数字字符
  //Regexp object
  var re3 = new RegExp("Shelley\s+Powers");
}

//2.1(☆☆) Testing Whether a Substring Exists
function reg_2_1() {
  var cookbookString = new Array();
  cookbookString[0] = "Joe's Cooking Book";
  cookbookString[1] = "Sam's Cookbook";
  cookbookString[2] = "JavaScript CookBook";
  cookbookString[3] = "JavaScript BookCook";
  //search pattern
  var pattern = /Cook.*Book/;

  var i = 0,
    len = cookbookString.length;
  //use RegExp test method
  for(; i < len; i++){
    alert(cookbookString[i] + " " + pattern.test(cookbookString[i]));
  }
  //1, 3 true; 2, 4 false
}

//2.2(☆☆☆) Testing for Case-Insensitive Substring Matches
function reg_2_2() {
  //use regular expression flag(i), ignores case
  var pattern1 = /Cook.*Book/i;
  var pattern2 = new RegExp("Cook.*Book", "i");
  //g:Global match:matches across entire string, rather than stopping at first match
  //m:Applies begin and end line special characters(^ and $, respectively) to each
  //  line in a multiline string
}

//2.3(☆☆) Validating a Social Security number
function reg_2_3() {
  var ssn = document.getElementById("pattern").value;
  var pattern = /\d{3}-?\d{2}-?\d{4}/;
  //use String match method
  //equal with pattern.test(ssn)
  if (ssn.match(pattern)) {
    alert("true");
  }else{
    alert("false");
  }
}












function paddingbottom() {

}
