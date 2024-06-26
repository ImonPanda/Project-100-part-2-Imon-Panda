var firebaseConfig = {
      apiKey: "AIzaSyCYohA7jC_EJQ2gIovHB5ho3b-iPyhsUiE",
      authDomain: "letschatwebapp-af48c.firebaseapp.com",
      databaseURL: "https://letschatwebapp-af48c-default-rtdb.firebaseio.com",
      projectId: "letschatwebapp-af48c",
      storageBucket: "letschatwebapp-af48c.appspot.com",
      messagingSenderId: "534981386491",
      appId: "1:534981386491:web:2e7b033855ccdd657e905e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="chat_room.html";
}

function getData() {firebase.database().ref("/").on('value',
 function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot)
  {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name -"+ Room_names)
   row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_room.html";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";  
      firebase.database().ref(room_name).push({
            nane:user_name,
            message:msg,
            like:0
      });      
}