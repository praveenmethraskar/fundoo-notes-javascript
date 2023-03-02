
fetch("http://localhost:3000/note")
.then(function (response) {
    return response.json();
})
.then(function (notes) {
    let placeholder = document.querySelector("#data-output");
    let out = "";
    
   
        for (let note of notes) {
            if(note.archieve=="true"){
            out += `
      <div>
         <div class="note" style="background-color:${note.color}">
                <span class="material-icons check-circle">check_circle</span>
                
                <div class="title" id="demo">${note.id} ${note.title}</div>
                <div class="text">${note.discription}</div> 
                <div class="note-footer">
                    <div class="tooltip">
                        <span class="material-icons-outlined hover small-icon">add_alert</span>
                        <span class="tooltip-text">Remind me</span>
                    </div>
                    <div class="tooltip">
                        <span class="material-icons-outlined hover small-icon">person_add</span>
                        <span class="tooltip-text">Collaborator</span>
                    </div>
                    <div class="tooltip dropdown">
                        <span class="material-icons-outlined hover small-icon">palette</span>
                        <span class="tooltip-text">Change Color</span>
                        <div class="dropdown-content">
                        <button class="button-color-pallet" style="background: red;color: red;" id="red" onclick="Colorred(${note.id})"></button>
                        <button class="button-color-pallet" style="background: white;color: white;" id="white" onclick="Colorwhite(${note.id})"></button>
                        <button class="button-color-pallet" style="background: yellow;color: yellow;" onclick="Coloryellow(${note.id})"></button>
                        <button class="button-color-pallet" style="background: blue;color: blue;" onclick="Colorblue(${note.id})"></button>
                        <button class="button-color-pallet" style="background: green;color: green;" onclick="Colorgreen(${note.id})"></button>
                        <button class="button-color-pallet" style="background: wheat;color: wheat;" onclick="Colorwheat(${note.id})"></button>
                        </div>
                    </div>
                    <div class="tooltip">
                        <span class="material-icons-outlined hover small-icon" onclick="Trash(${note.id})">delete</span>
                        <span class="tooltip-text">trash</span>
                    </div>
                    <div class="tooltip ">
                        <span class="material-icons-outlined hover small-icon " onclick="Archieve(${note.id})">archive</span>
                        <span class="tooltip-text">Archive</span>
                    </div>
                    <div class="tooltip dropdown">
                        <span class="material-icons-outlined hover small-icon" id="${note.id}" >more_vert</span>
                        <span class="tooltip-text" >More</span>
    
                        <div class="dropdown-content">
                            <a href="#" style="text-decoration:none;color:black" onclick="Delete(${note.id})">Delete</a>
                        </div>
    
                    </div>
                </div>
            </div>
    
        </div>
      `;
        }
    
    }

    placeholder.innerHTML = out;

});


function Delete(id) {

    console.log(id);
    const data = 'http://localhost:3000/';
    // console.log(url);
    fetch('http://localhost:3000/note/'+id, {
        method: 'DELETE',
        body: JSON.stringify(data.id),
        headers: {
            'Content-Type': 'application/json',
        },
      
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

function Archieve(id){
   fetch('http://localhost:3000/note/'+id, { // note we are going to /1
 method: "PATCH",
 headers: {
     "Content-Type" : "application/json"
   },
 body: JSON.stringify(
   {
       "archieve": "false"          // we are changing the "likes" value to 5
   }
 )
});
}


function Trash(id){
    
    fetch('http://localhost:3000/note/'+id, { // note we are going to /1
  
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(
    {
        "trash": "false"          // we are changing the "likes" value to 5
    }
  )
});
}