function Colorred(id){
   
    fetch('http://localhost:3000/note/'+id, { // note we are going to /1
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(
    {
        "color": "red"          // we are changing the "likes" value to 5
    }
  )
});
}

function Colorwhite(id){
   
    fetch('http://localhost:3000/note/'+id, { // note we are going to /1
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(
    {
        "color": "white"          // we are changing the "likes" value to 5
    }
  )
});
}

function Coloryellow(id){
   
    fetch('http://localhost:3000/note/'+id, { // note we are going to /1
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(
    {
        "color": "yellow"          // we are changing the "likes" value to 5
    }
  )
});
}



function Colorblue(id){
   
    fetch('http://localhost:3000/note/'+id, { // note we are going to /1
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(
    {
        "color": "blue"          // we are changing the "likes" value to 5
    }
  )
});
}

function Colorgreen(id){
   
    fetch('http://localhost:3000/note/'+id, { // note we are going to /1
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(
    {
        "color": "green"          // we are changing the "likes" value to 5
    }
  )
});
}

function Colorwheat(id){
   
    fetch('http://localhost:3000/note/'+id, { // note we are going to /1
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(
    {
        "color": "wheat"          // we are changing the "likes" value to 5
    }
  )
});
}