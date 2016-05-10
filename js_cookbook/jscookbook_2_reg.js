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
  //use test method
  for(; i < len; i++){
    alert(cookbookString[i] + " " + pattern.test(cookbookString[i]));
  }
  //1, 3 true; 2, 4 false
}
