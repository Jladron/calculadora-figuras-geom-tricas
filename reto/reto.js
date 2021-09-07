//introducción de datos en el análisis.

const personas = [];

function introducir(){
    const inputName = document.getElementById("inputName").value;
    const inputSalary = parseInt(document.getElementById("inputSalary").value);
    const inputCountry = document.getElementById("inputCountry").value;
    const inputSex = document.getElementById("inputSex").value;
    
    personas.push({
        name: inputName,
        salary: inputSalary,
        country: inputCountry,
        sex: inputSex,
    });
}

function borrarUltimo(){
    personas.pop();
}

//crear tabla
// function crearTabla(){
//     let canvas = document.getElementById("table");

//     //crear la tabla
//     var table = document.createElement("table");
//     var tblBody = document.createElement("tBody");

//     //crear las celdas

//     for(var i = 0; i < personas.length; i++){
//         var hilera = document.createElement("tr");
        
//         var celda1 = document.createElement("td");
//         var textoCelda1 = document.createTextNode(personas[i].name);
//         var celda2 = document.createElement("td");
//         var textoCelda2 = document.createTextNode(personas[i].salary);
//         var celda3 = document.createElement("td");
//         var textoCelda3 = document.createTextNode(personas[i].country);
//         var celda4 = document.createElement("td");
//         var textoCelda4 = document.createTextNode(personas[i].sex);
    
//         celda1.appendChild(textoCelda1);
//         celda2.appendChild(textoCelda2);
//         celda3.appendChild(textoCelda3);
//         celda4.appendChild(textoCelda4);

//         hilera.appendChild(celda1);
//         hilera.appendChild(celda2);
//         hilera.appendChild(celda3);
//         hilera.appendChild(celda4);
//     }

//     tblBody.appendChild(hilera);

//     table.appendChild(tblBody);
//     canvas.appendChild(table);
// }


//datos de ejemplo

personas.push({
    name: "juan",
    salary: 950,
    country: "españa",
    sex: "male",
});
personas.push({
    name: "pepe",
    salary: 1250,
    country: "españa",
    sex: "male",
});
personas.push({
    name: "francisco",
    salary: 1500,
    country: "españa",
    sex: "male",
});
personas.push({
    name: "Laura",
    salary: 1050,
    country: "españa",
    sex: "woman",
});
personas.push({
    name: "elena",
    salary: 1200,
    country: "españa",
    sex: "woman",
});
personas.push({
    name: "cristina",
    salary: 950,
    country: "españa",
    sex: "woman",
});
personas.push({
    name: "hector",
    salary: 4500,
    country: "mexico",
    sex: "male",
});
personas.push({
    name: "tito",
    salary: 950,
    country: "mexico",
    sex: "male",
});
personas.push({
    name: "cristina",
    salary: 950,
    country: "mexico",
    sex: "woman",
});
// Análisis de datos

let personasPorCiudad = {};

personas.forEach(
    element => {
        if(personasPorCiudad.hasOwnPorperty(element.ciudad)){
            personasPorCiudad[element.ciudad] = {
                ciudad: []
            }
        }

        personasPorCiudad[persona.ciudad].ciudad.push({
            nombre: element.name,
            sueldo: element.salary,
            sexo: element.sex,
        });
    }
);

console.log(personasPorCiudad);