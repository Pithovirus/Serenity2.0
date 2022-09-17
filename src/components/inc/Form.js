import React from "react";


import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
import "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js";
import "https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js";
import "https://www.gstatic.com/firebasejs/8.2.1/firebase-database.js";



function Form() {
    
    return(
        <body class="bo">

    <div class="container">

    </div>
            <div class="chatbox">
                <div class="chatbox__support">
                    <div class="chatbox__header">
                        <div class="chatbox__image--header">
                            <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt=""/>
                        </div>
                        <div class="chatbox__content--header">
                            <h4 class="chatbox__heading--header">Chat support</h4>
                            <p class="chatbox__description--header">Hi. My name is Serenity. How can I help you?</p>
                        </div>
                    </div>
                    <div class="opBtnBg">
                        <button class="oBtn" onclick="openForm()">Open Form</button>
                    </div>
                    <div class="chatbox__messages">
                        <ul id="messages"></ul>
                    </div>
                    <div class="chatbox__footer" >
                       {/*
                        <form id="message-user">
                        </form>
                        */}
                        <input id="message-input" type="text" placeholder="Write a message..." class="uInput"/>
                        <button id="message-btn" class="chatbox__send--footer send__button" type="submit">Send</button>
                    </div>
                </div>
                <div class="chatbox__button">
                    <button class="btn"><img src="/static/images/chatbox-icon.svg" alt= "" /></button>
                </div>
            </div>
        
            <div class="lform-popup" id="popUp">
                <form action="/" method="post" class="lform-container" id="serenityForm">
                    <div class="alert">Your form has been recorded</div>

                    <div class="inputBox">
                        <label for="name" class="flabel">Name</label>
                        <input type="text" class="finput" id="name" name="name" placeholder="Your name...." required/>
                    </div>

                    <div class="inputBox">
                        <label for="age" class="flabel">Age</label>
                        <input type="number" class="finput" id="age" name="age" min="1" max="200" placeholder="Your Age....." required/>
                    </div>


                    <div class="inputBox">
                        <label for="gEnder" class="flabel">Gender</label><br/>
                        <input type="radio" class="finput" id="male" name="gender" value="Male" required/>
                        <label for="male" class="flabel">Male</label><br/>
                        <input type="radio" class="finput" id="female" name="gender" value="Female" required/>
                        <label for="female" class="flabel">Female</label><br/>
                    </div>
        
                    <div class="inputBox">
                        <label for="email" class="flabel">Email</label>
                        <input type="email" class="finput" id="emailid" name="emailid" placeholder="Your Email....." required/>
                    </div>
        
                    <div class="inputBox">
                        <label for="address" class="flabel">Address</label>
                        <input type="text" class="finput" id="address" name="address" placeholder="Your Address...." required/>
                    </div>
        
                    <div class="inputBox">
                        <button type="submit" class="fbtn" name="submitDetails" value="Submit">Submit</button>
                    </div>
                  <button type="button" class="fbtn-cancel" onclick="closeForm()">Close</button>
                </form>
              </div>
       {/*
        <script>
            $SCRIPT_ROOT = {{ request.script_root|tojson }};
    </script>*/}
       
        </body>
        

    );
    
    /*
    function openForm() {
        document.getElementById("popUp").style.display = "block";
    }
    
    function closeForm() {
        document.getElementById("popUp").style.display = "none";
    }
    */
}

export default Form;
