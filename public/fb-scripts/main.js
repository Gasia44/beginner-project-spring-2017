'use strict';
 
function PianoRock() {
  this.initial_load = true;  

  this.checkSetup();

  this.log_in_button = document.getElementById('log-in');
  this.log_in_button.addEventListener('click', this.signIn.bind(this));    

  this.log_out_button = document.getElementById('log-out');
  this.log_out_button.addEventListener('click', this.signOut.bind(this));

  this.initFirebase();
}

PianoRock.prototype.pushNote = function(e) {
  e.preventDefault();
   console.log('here');
   let currentUser = this.auth.currentUser; 
  // Check that the user entered a message and is signed in.
  if (currentUser != null) {  
    // Add a new tone entry to the Firebase Database.
    this.notesRef.push({
      name: 'anonymous',
      note: e.key     
    }).catch(function(error) {
      console.error('Error writing new message to Firebase Database', error);
    });
  }
};

PianoRock.prototype.loadNotes = function() {
  // Reference to the /messages/ database path.
  this.notesRef = this.database.ref('notes');
  // Make sure we remove all previous listeners.
  this.notesRef.off();

  // Loads the last 12 messages and listen for new ones.
  let getNotes = function(data) {
    let val = data.val();
    this.playNote(data.key, val.name, val.note);
  }.bind(this);
  this.notesRef.limitToLast(1).on('child_added', getNotes);
  this.notesRef.limitToLast(1).on('child_changed', getNotes);
};

PianoRock.prototype.playNote = 
                         function(key, name, note) { 
  switch(note) {
    case 's': tones.play('c#',5);break;
    case 'd': tones.play('d#',5);break;
    case 'g': tones.play('f#',5);break;
    case 'h': tones.play('g#',5);break;
    case 'j': tones.play('a#',5);break;
    case 'l': tones.play('c#',6);break;
    case ';': tones.play('d#',6);break;
    case 'z': tones.play('c',5);break;
    case 'x': tones.play('d',5);break;
    case 'c': tones.play('e',5);break;
    case 'v': tones.play('f',5);break;
    case 'b': tones.play('g',5);break;
    case 'n': tones.play('a',5);break;
    case 'm': tones.play('b',5);break;
    case ',': tones.play('c',6);break;
    case '.': tones.play('d',6);break;
    case '/': tones.play('e',6);break;
    default:
  }
};

PianoRock.prototype.signOut = function() {
  // Sign out of Firebase.
  this.auth.signOut();
};

PianoRock.prototype.signIn = function() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithPopup(provider);  
};

PianoRock.prototype.onAuthStateChanged = function(user) {
  if(user){
    //logic, when user signs-in 
    alert('signed in');
    this.initial_load = false;
    
    this.loadNotes(); 
  }else {
    if(!this.initial_load){
      //logic, when user signs-out    
      alert('signed out'); 
    }
  }
};

PianoRock.prototype.initFirebase = function() {
  // Shortcuts to Firebase SDK features.
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

PianoRock.prototype.checkSetup = function() {
  if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions.');
  } else if (config.storageBucket === '') {
    window.alert('Your Cloud Storage bucket has not been enabled. Sorry about that. This is ' +
        'actually a Firebase bug that occurs rarely. ' +
        'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
        'and make sure the storageBucket attribute is not empty. ' +
        'You may also need to visit the Storage tab and paste the name of your bucket which is ' +
        'displayed there.');
  } 
};

window.onload = function() {
  window.pianoRock = new PianoRock();
};
