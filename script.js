currentAction='add';
        editInd=-1;

titleObj=document.getElementById("title");
triggerObj=document.getElementById("trigger");

records=[];

function createRecord()
{
    if(currentAction=='add')
    {
       o={title:titleObj.value}
       records.push(o);
       console.log(records);
    }
    else(currentAction=='edit')
    {
        o={title:titleObj.value}
        records[editInd]=o;
        currentAction='add';
        triggerObj.innerHTML='ADD';
    }
    render();
}
function render()
{
    html=''
    for(i=0;i<records.length;i++)
    {
       html+=`<div class='card' onclick='initiateEdit(${i})'>
            <div onclick='deleteRecord(${i})' class='close'>x</div>
            <div class='name'>${records[i].title}</div>
       </div>`
    }
    document.getElementById('demo').innerHTML=html;
}

function deleteRecord(ind)
{
    ans=confirm(`Are you sure want to Delete ${records[ind].title}?`)
    if(ans)
    {
        records.splice(ind,1);
        console.log("After deleting=",records);
        render();
    }
}

function initiateEdit(ind)
{
    obj=records[ind];

    titleObj.value=obj.title;  
            
    triggerObj.innerHTML="Update";
    currentAction="edit";
    editInd=ind;
}