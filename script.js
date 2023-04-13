
function createele(tagname,attname,attvalue,content){
    let ele=document.createElement(tagname);
    ele.setAttribute(attname,attvalue);
    ele.innerHTML=content;
    return ele;
}

function linebreak(tagname){
    let ele=document.createElement(tagname);
    return ele
}
 function inputele(tagname,attname,attvalue,attname1,attvalue1){
    let ele=document.createElement(tagname);
    ele.setAttribute(attname,attvalue);
    ele.setAttribute(attname1,attvalue1);
    return ele;
 }
 function inputele(tagname,attname,attvalue,attname1,attvalue1,Submit){
    let ele=document.createElement(tagname);
    ele.setAttribute(attname,attvalue);
    ele.setAttribute(attname1,attvalue1);
    ele.innerHTML=Submit;
    return ele;
 }
 function foo(){
    let firstname=document.getElementById("firstname").value;
    console.log(`Fistname:${firstname}`);
    let Middlename=document.getElementById("middlename").value;
    console.log(`Middlename:${Middlename}`);
    let lastname=document.getElementById("lastname").value;
    console.log(`Lastname:${lastname}`);
    let mail=document.getElementById("mail").value;
    console.log(`Mail:${mail}`);
    let Address=document.getElementById("state").value;
    console.log(`Address:${Address}`);
}

let firstname=createele("label","for","firstname","Firstname")
let namebreak=linebreak("br")
let fistnameinput=inputele("input","type","text","id","firstname")
let namebreak1=linebreak("br")
document.body.append(firstname,namebreak,fistnameinput,namebreak1)
let Middlename=createele("label","for","middlename","Middlename")
let Mnamebreak=linebreak("br")
let middlenameinput=inputele("input","type","text","id","middlename")
let Mnamebreak1=linebreak("br")
document.body.append(Middlename,Mnamebreak,middlenameinput,Mnamebreak1)
let Lastname=createele("label","for","lastname","Lastname")
let Lnamebreak=linebreak("br")
let Lastnameinput=inputele("input","type","text","id","lastname")
let Lnamebreak1=linebreak("br")
document.body.append(Lastname,Lnamebreak,Lastnameinput,Lnamebreak1)
let Email=createele("label","for","mail","Email")
let emailbreak=linebreak("br")
let emailinput=inputele("input","type","text","id","mail")
let Emailbraek1=linebreak("br")
document.body.append(Email,emailbreak,emailinput,Emailbraek1)
let state=createele("label","for","state","State")
let statebreak=linebreak("br")
let stateinput=inputele("input","type","text","id","state")
let statebreak1=linebreak("br")
document.body.append(state,statebreak,stateinput,statebreak1)
let Buttonbraek=linebreak("br")
let Button=inputele("button","type","button","onclick","foo()","Submit")

document.body.append(Buttonbraek,Button)
