const data = [
    {
        name: "abi",
        Maths:"96",
        Physics:"85",
        Chemistry :"90",
        Percentage : "90.3 %"
    },
    {
        name: "som",
        Maths:"70",
        Physics:"80",
        Chemistry : "95",
        Percentage : "81.6 %"
    },
    {
        name: "anu",
        Maths:"100",
        Physics:"75",
        Chemistry : "85",
        Percentage : "86.6 %"
    },
    {
        name: "ram",
        Maths:"90",
        Physics:"75",
        Chemistry : "80",
        Percentage : "81.6 %"

    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<h3>" + "Maths : " + data[i].Maths +"</h3>" + "<h3>" + "Physics : " 
            + data[i].Physics +"</h3>" +"<h3>" + "Chemistry : " + data[i].Chemistry +"</h3>"+
            "Percentage : " +data[i].Percentage + "</h3>"
            return;
        }
    }
    results.innerHTML = "<h3>" + "Information is not available!!!" + "</h3>" 

}) 