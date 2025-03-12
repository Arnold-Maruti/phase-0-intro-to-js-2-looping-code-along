function countDown(number){
    let count=number
    while(count>=0){
        console.log(count);
        count--;
    }
}

function writeCards(array,event){
    let message=[]
    for(let i=0;i<array.length;i++){
           message.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
          }
    return message;
}