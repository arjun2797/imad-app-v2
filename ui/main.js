console.log('Loaded!');
var button= document.getElementById("counter");
var counter=0;
button.onClick= function(){

    var req=new XMLHttpRequest(); 
    
    req.onreadystatechange = function()
    {
        if (req.readystate === XMLHttpRequest.DONE)
        {
            if(req.status === 200)
            {
                var counter= req.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
                
            }
        }
    };
    
    req.open('GET','http://arjun2797.cloud.imad.hasura.io/counter',true);
    req.send(null);
   
};