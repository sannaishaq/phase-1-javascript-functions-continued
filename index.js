// function razzle(lawyer = "Billy", target = "'em") {
//     console.log(`${lawyer} razzle-dazzles ${target}!`);
//   }
//   razzle(); //=> Billy razzle-dazzles 'em!
//   razzle("Methuselah", "T'challah"); //=> Methuselah razzle-dazzles T'challah!
 // if(activity != 'roller-skate'){
    //     return activity = 'bathe my dog'
    // }

function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`);
}
   
    
function mondayWork(activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(wrap){
    let innerFunction = function (x= "a hard worker"){
        return (`You are ${wrap}${x}${wrap}!`)
    }
    return innerFunction
}






// let result = wrapAdjective('*')
    // let emphatic = result("a hard worker")
    // if(result = true){
    //     return result+emphatic
    // }else{
    //    let result = wrapAdjective("||")
    //    let emphatic = result("a dedicated programmer")
    //    return result+emphatic

    // }