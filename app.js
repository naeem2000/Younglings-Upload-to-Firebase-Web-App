// Firebase API

var firebaseConfig = {
    apiKey: "AIzaSyDugRjE_5TjfrWI5bmpEUuZ9ghXZEYc3TU",
    authDomain: "younglingsdb-d48d3.firebaseapp.com",
    projectId: "younglingsdb-d48d3",
    storageBucket: "younglingsdb-d48d3.appspot.com",
    messagingSenderId: "7464349163",
    appId: "1:7464349163:web:bd985788bd51c3745cbdae"
    };

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
console.log(firebase);

// drag and drop upload section
$(document).ready(function(){
  $('form input').change(function () {
    $('form p').text(this.files.length + " file(s) selected");
  });
});

// Upload Function
function uploadImage() {
      const ref = firebase.storage().ref();
      const file = document.querySelector("#photo").files[0];
      const name = +new Date() + "-" + file.name;
      const metadata = {
      contentType: file.type
      };
      const task = ref.child(name).put(file, metadata);
      task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
      console.log(url);
      document.querySelector("#image").src = url;
      })
      .catch(console.error);
      }

const errorMsgElement = document.querySelector('span#errorMsg');

function myFunction() {
    alert("Your file has been uploaded");
    }

// Load init
init();