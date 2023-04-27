alert(func()) ;

        


function  func () {

    var item1= "salma";
    var item2="saad";
   [f_name,l_name]= [item1,item2];
    var name = `${f_name}${l_name}`;
    return name;


}

////////////////////////2222/////////////////////////
function min_max(...arr){
        alert(`The Max Value is : ${Math.max(...arr)}`);
        alert(`The Min Value is : ${Math.min(...arr)}`);
}

min_max(1,7,10,13,16,19,90);


////////////////////////333333/////////////////////////


var fruits=["apple","strawberry","banana","Orange","mango"];
//a//
function  a_function(arr){
for (var i=0;i<arr.length;i++){
if(typeof arr[i]!="string"){
    return false;
}
}
return true;
}

//b//
function b_function(arr2){
var string="";
for(var item of arr2){
if(item.startsWith("a")){
string+=item;
}
}
return string;
}
//c//                                               
function c_function(arr2){
var string="";
for(var item of arr2){
if(item.startsWith("a")||item.startsWith("b")){
    string+=item;
}
}
return string;
}



alert(`array is  string? : ${ a_function(fruits)}`);
alert(`fruits starts with a : ${ b_function(fruits)}`);
alert(`fruits start with a or b : ${ c_function(fruits)}`);

/////////////////44444//////////////////////////


function getUser(){
    return new Promise( async (resolve,reject)=>{
    
            var result = await fetch("https://jsonplaceholder.typicode.com/users");
       
            var data = await result.json();
            
          
            if(data){
                resolve(data)
            }
            else{
                reject("Error in user name")
            }
  
    })

}



getUser().then((data)=>{

    for(var item in data)
    {
        document.getElementsByTagName("a")[item].innerHTML=data[item].name;

    }
    
}).catch((err)=>{
    console.log(err);
})





// async function userData() {
//     try {
//         var result = await fetch("https://jsonplaceholder.typicode.com/users")
       
//         var data = await result.json()
        
//         console.log(data.name);
//     } catch (e) {
//         console.log("error");
//     }
// }

// userData()