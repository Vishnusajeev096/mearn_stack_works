var text="hello hai hello hai"
 //step 1 split string in to words 

//  var words=text.split(" ")//word="hello","hai","hello","hai"
// console.log(words);

var wordCount={}

// for(let word of words){
//word=hello 2nd itertn word=hai
//     if(word in wordCount){
//         wordCount[word]+=1
//     }
//     else
//     {
//         wordCount[word]=1
//     }
// }
// console.log(wordCount);

text.split(" ").map(word=>word in wordCount?wordCount[word]+=1:wordCount[word]=1)
console.log(wordCount);


//var pattern="ABABBC"
//find  fist reccursive character
