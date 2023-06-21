
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
  apiKey: "AIzaSyBuKm61ejHlRr1OiA1RR0XNeU-rXcRWcRo",
  authDomain: "classtest-6aee6.firebaseapp.com",
  databaseURL: "https://classtest-6aee6-default-rtdb.firebaseio.com",
  projectId: "classtest-6aee6",
  storageBucket: "classtest-6aee6.appspot.com",
  messagingSenderId: "165934833263",
  appId: "1:165934833263:web:b030fec29bd3928d06779a",
  measurementId: "G-8SX6FV20W6"
};

    firebase.initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(" Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{

  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);

  window.location = "chat_page.html"

}

function redirectToRoomName(name)

{
  console.log(name);
  localStorage.setItem("room_name" , name);
   window.location = "chat_page.html"
}

