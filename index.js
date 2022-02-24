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
    //dont need to input the non-default statement because the test already runs it for us
}
   
    
function mondayWork(activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`);
    //dont need to input the non-default statement because the test already runs it for us--> in the case an activity is not inputted by user,
    //the default activity will execute 
    //console.log will not return anything, just spits out the answer inside a function (factory) without doing the work inside it
}

function wrapAdjective(wrap){
    let innerFunction = function (x= "a hard worker"){
        return (`You are ${wrap}${x}${wrap}!`)
    }
    return innerFunction
}





