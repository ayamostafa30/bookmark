var nam=document.getElementById("input1");
var url=document.getElementById("input2");
var button=document.getElementById("btn");
var arr=[];

if(localStorage.getItem("array")==null)
{
   arr=[];
}
else
   {
       
   arr=JSON.parse(localStorage.getItem("array"));
        displaydata();
   }




button.onclick=function()
    {
        first();
     displaydata();
     clearform();
   
    }


function first()
{
    var x= {sitename:nam.value,
            siteurl:url.value}
   
    
        arr.push(x);
    localStorage.setItem("array",JSON.stringify(arr));
}


function clearform()
{
    var inputs=document.getElementsByClassName("form-control");
    
    for(i=0;i<inputs.length;i++)
        {
            inputs[i].value="";
        }
}


function displaydata()

{
    var temp="";
    for(i=0;i<arr.length;i++)
        {
temp+= '<div class="col-md-12 mb-3" style="background-image: linear-gradient(#EEE,#FFF)" ><h2 class="mb-3 font-weight-bold">'+arr[i].sitename+'</h2><a class=" mx-3 btn-primary text-white btn" target=_blank href="'+arr[i].siteurl+'">visit</a><button onclick="deleteElement('+i+')" type="button" class="btn-danger text-white btn">delete</button></div>'
         }
    document.getElementById("row").innerHTML=temp;
}







function deleteElement(id)
{
    arr.splice(id,1);
    localStorage.setItem("array",JSON.stringify(arr));
    displaydata();
    
}






















