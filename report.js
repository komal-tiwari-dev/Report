// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
document.querySelector("form").addEventListener("submit",report)

function report(){
    event.preventDefault()
    var img1 = document.querySelector("#image").value
    var name1 = document.querySelector("#name").value
    var batch1 = document.querySelector("#batch").value
    var dsa1 = document.querySelector("#dsa").value
    var skill1 = document.querySelector("#cs").value
    var coding1 = document.querySelector("#coding").value

    var row=document.createElement("tr")
    var person=document.createElement("td")
    var photo=document.createElement("img")
    photo.src=img1
    person.append(photo)
    var pname=document.createElement("td")
    pname.innerText=name1;
    var pbatch = document.createElement("td")
    pbatch.innerText = batch1;
    var pdsa = document.createElement("td")
    pdsa.innerText = dsa1;
    var pskill = document.createElement("td")
    pskill.innerText = skill1;
    var pcoding = document.createElement("td")
    pcoding.innerText = coding1;
    var d=Number(dsa1)
    var s=Number(skill1)
    var c=Number(coding1)
    percent=((d+s+c)/30)*100
    percent=parseInt(percent)
    var ppercent=document.createElement("td")
    ppercent.innerText=percent;
    var pstatus=document.createElement("td")
    if(percent>=50){
        pstatus.innerText ="Regular"
        pstatus.style.backgroundColor="green"
    }
    else{
        pstatus.innerText = "Async"
        pstatus.style.backgroundColor = "red"
    }
    row.append(person,pname,pbatch,pdsa,pskill,pcoding,ppercent,pstatus)
    document.querySelector("tbody").append(row)
}
