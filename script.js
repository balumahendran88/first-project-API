fetch('https://fakestoreapi.com/products').then((data)=>{
    return data.json();
}).then ((objectfinaldata)=>{
    console.log(objectfinaldata);
    let tabledata = "";
    console.log(objectfinaldata);
    objectfinaldata.map((values)=>{
        tabledata+=` <tr>
        <td>${values.title}</td>
        <td>${values.description}</td>
        <td>${values.price}</td>
        <td><img src="${values.image}"/></td>
      </tr>`;
    });
    document.getElementById("table_tbody").innerHTML=tabledata;
})