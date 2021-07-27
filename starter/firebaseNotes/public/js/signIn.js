console.log("Sign in code loaded");

// create a signIn function 
const signIn = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();

    //asynchrous action, pop up window 
    firebase.auth()
        .signInWithPopup(provider)
        //we encounter a promise holding the eventual result.. if login proceeds then run this code
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log("user");
            //this proceeds the user to a new window
            window.location="writeNote.html"
            // if error/ faileds run this code
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
            console.log("THINGS BROKE!")
        });
    //console.log("Sign in function called" )
}

// create the button (links functionality )
const signInBtn = document.querySelector("#signInBtn");
// here we create an event that happens everytime the button is clicked
signInBtn.addEventListener("click", signIn);