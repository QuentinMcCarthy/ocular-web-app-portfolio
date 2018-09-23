
async makeRemoteRequestNotification() {
var backapi = api.Backend_API();
let userId = await AsyncStorage.getItem("userid");
fetch(backapi + "event/notification/" + userId, {
  method: "GET",
}).then((response) => response.json())
  .then((data) => {
   for(let i in data){
       fetch(backapi+"event/eventname/"+data[i].event_id,{
           method:'GET',
       }).then((response)=>response.json())
         .then((data)=>{
             this.state.data.push(data)
             console.log("notification event",this.state.data);
         })
       console.log("created_by",data[i].created_by);
    fetch(backapi+"user/getUserById"+data[i].created_by,{
        method:'GET'
    }).then((response)=>response.json())
    .then((data)=>{
        console.log("username",data);
    })
   }
  //  this.state.data=data;
    console.log("clint",this.state.data);
  })
};
