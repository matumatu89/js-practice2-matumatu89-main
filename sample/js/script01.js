$(function(){
    let txt1 = "おはようございます！";
    let txt2 = "お元気ですか？";
    let num1 =20;
    let num2 =32;

    function sayHellow(){
        $("#content").text("こんにちわ！");
    }

function saySomething(txt){
    $("#content").text(txt);
}    

function samTwo(arg1,arg2){
    $("content").text(arg1 + arg2);
}

$("#button01").on("click",function(){
  sayHollow();
})

$("#button02").on("click",function(){
    saySomething(txt1,txt2);
})

$("#button03").on("click",function(){
    samTwo(txt1,txt2);
})

$("#button04").on("click",function(){
    samTwo(num1,num2)
})

$("#button05").on("click",function(){
    samTwo(txt1,txt2);
    samTwo(num1,num2);
})

})