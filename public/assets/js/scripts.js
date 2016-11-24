//Test connectivity per page
console.log('hello world');

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });
// Features used on the browse page
$(document).on('click','.card',function(){
  //kill card
  this.remove();

  //add goal to this user's account
  //I'm assuming user #1 since user auth is not yet in place
  // models.Users.findOne({where: {id: 1} })
  // // with .then, we can work with this an instance and add a goal
  // .then(function(user){
  //   return user.addGoals(this.id);
  // })

  // goalsAdded.push(this.id);
  //  alert( 'you clicked ' + goalsAdded + "!" );
});