//Test connectivity per page
console.log('hello world');

$(document).ready(function() {
    // $('.tooltipped').tooltip({delay: 50});
            $('.modal').modal({
                dismissible: true, // Modal can be dismissed by clicking outside of the modal
                opacity: .5, // Opacity of modal background
                in_duration: 300, // Transition in duration
                out_duration: 200, // Transition out duration
                starting_top: '4%', // Starting top style attribute
                ending_top: '10%', // Ending top style attribute
                ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
                    alert("Ready");
                    console.log(modal, trigger);
                },
                complete: function() { alert('Closed'); } // Callback for Modal close
            })
        })
// Features used on the browse page
$(document).on('click', '.card', function() {
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

