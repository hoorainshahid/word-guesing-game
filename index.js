// alert("hi")

var userAns = prompt("please enter your word '.");
var arr = ["eye", "make", "cat", "repo", "bad", "are", "cart", "dam", "joy", "mcb", "toy", "pet", "yes", "no", "bus", "ice", "key", "kind" , "log", "see", "too", "job", "dry", "dog", "way", "our"];
var userOpt = userAns.toLowerCase()
var flag = false
for (var i = 0; i < arr.length; i++) {
    if (userOpt == arr[i]) {
        flag = true
    }
}
if (flag) {
    document.write(`<div class="card m-auto mt-5 bg" style="width: 16rem;>' + '< div class= "card-body" ><h5 class="card-title text-center mx-auto">congrates👍</h5></div>`)
} else {
    document.write(`<div class="card m-auto mt-5 bg" style="width: 16rem;>' + '< div class= "card-body" ><h4 class="card-title text-center mx-auto">sorry this word is not available</h4></div>`)
}
