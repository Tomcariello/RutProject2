//Test connectivity per page
console.log('hello world!');

//You can't do this without triggering this script on every page
$(document).ready(function() {
    // $('.tooltipped').tooltip({delay: 50});
    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .8, // Opacity of modal background
        in_duration: 300, // Transition in duration
        out_duration: 200, // Transition out duration
        starting_top: '4%', // Starting top style attribute
        ending_top: '10%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            // alert("Ready");
            // console.log(modal, trigger);
        },
        complete: function() { } // Callback for Modal close
    })
});

//**************************************
// Features used on the browse page
//Remove card from DOM when user selects it
$(document).on('click', '.card', function() {
    //kill card
    this.remove();
});
