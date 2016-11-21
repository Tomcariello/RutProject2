//Test connectivity per page
console.log('hello world');

// Features used on the browse page
$(document).on('click','.card',function(){
  //kill card
  this.remove();

  //add goal to this user's account
  

  goalsAdded.push(this.id);
   alert( 'you clicked ' + goalsAdded + "!" );
});