

(function() {
    var joinBtn = document.getElementById('Join');
    var dialog = document.getElementById('requirement');
  
    function openCheck(dialog) {
      if(dialog.open) {
        console.log('Dialog open');
      } else {
        console.log('Dialog closed');
      }
    }

    // Update button opens a modal dialog
    joinBtn.addEventListener('click', function() {
      dialog.showModal();
      openCheck(dialog);
    });

    // Form cancel button closes the dialog box
     joinBtn.addEventListener('dblclick', function() {
      dialog.close('no Data');
      openCheck(dialog);
    });

  })();
  

