//  precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

function findPrecio(comp) {
  let precio = 0;
  for (let i = 0; i < precios.length; i++) {
    if (comp === precios[i][0]) {
      precio = precios[i][1];
    }
  }
  return precio;
}

function precioMaquina(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += findPrecio(arr[i]);
  }
  return total;
}

// cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido.

function findComp(comp, arr) {
  let cuenta = 0;
  for (let i = 0; i < 2; i++) {
    if (arr[i] === comp) {
      cuenta++;
    }
  }
  return cuenta;
}

function cantidadVentasComponente(comp) {
  let total = 0;
  for (let i = 0; i < ventas.length; i++) {
    total += findComp(comp, ventas[i][ventas[i].length - 1]);
  }
  return total;
}

// vendedorDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre del vendedor que más vendió en plata en el mes.

// function vendedorDelMes(mes, anio) {
//   let donatello = 0;
//   let leonardo = 0;
//   let michelangelo = 0;
//   let raphael = 0;
//   for (let i = 0; i < ventas.length; i++) {
//     if (
//       mes === ventas[i][1].getMonth(ventas[i][1]) + 1 &&
//       anio === ventas[i][1].getFullYear(ventas[i][1])
//     ) {
//       switch (ventas[i][2]) {
//         case "Donatello":
//           donatello += precioMaquina(ventas[i][4]);
//           break;
//         case "Leoanrdo":
//           leonardo += precioMaquina(ventas[i][4]);
//           break;
//         case "Michelangelo":
//           michelangelo += precioMaquina(ventas[i][4]);
//           break;
//         case "Raphael":
//           raphael += precioMaquina(ventas[i][4]);
//           break;
//       }
//     }
//   }
//   const vendors = [donatello, leonardo, michelangelo, raphael];
//   switch (Math.max.apply(null, vendors)) {
//     case donatello:
//       return "Donatello";
//     case leonardo:
//       return "Leonardo";
//     case michelangelo:
//       return "Michelangelo";
//     case raphael:
//       return "Raphael";
//   }
// }

// ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

// function ventasMes(mes, anio) {
//   total = 0;
//   for (let i = 0; i < ventas.length; i++) {
//     if (
//       mes === ventas[i][1].getMonth(ventas[i][1]) + 1 &&
//       anio === ventas[i][1].getFullYear(ventas[i][1])
//     ) {
//       total += precioMaquina(ventas[i][4]);
//     }
//   }
//   return total;
// }

// ventasVendedor(nombre): Obtener las ventas totales realizadas por un vendedor sin límite de fecha.

// function ventasVendedor(nombre) {
//   let total = 0;
//   for (let i = 0; i < ventas.length; i++) {
//     if (ventas[i][2] === nombre) {
//       total += precioMaquina(ventas[i][4]);
//     }
//   }
//   return total;
// }

// componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente.

function componenteMasVendido() {
  let monGPRS3000 = 0;
  let motherASUS1500 = 0;
  let monASC543 = 0;
  let motherASUS1200 = 0;
  let motherMZI400 = 0;
  let hddToyiva = 0;
  let hddWezter = 0;
  let ramQuinstone = 0;
  let ramQuinstoneFury = 0;
  for (let i = 0; i < ventas.length; i++) {
    for (let j = 0; j < ventas[i][4].length; j++) {
      switch (ventas[i][4][j]) {
        case "Monitor GPRS 3000":
          monGPRS3000++;
          break;
        case "Motherboard ASUS 1500":
          motherASUS1500++;
          break;
        case "Monitor ASC 543":
          monASC543++;
          break;
        case "Motherboard ASUS 1200":
          motherASUS1200++;
          break;
        case "Motherboard MZI":
          motherMZI400++;
          break;
        case "HDD Toyiva":
          hddToyiva++;
          break;
        case "HDD Wezter Dishital":
          hddWezter++;
          break;
        case "RAM Quinston":
          ramQuinstone++;
          break;
        case "RAM Quinston Fury":
          ramQuinstoneFury++;
      }
    }
  }
  let sales = [
    monGPRS3000,
    motherASUS1500,
    monASC543,
    motherASUS1200,
    motherMZI400,
    hddToyiva,
    hddWezter,
    ramQuinstone,
    ramQuinstoneFury,
  ];
  switch (Math.max.apply(null, sales)) {
    case monGPRS3000:
      return "Monitor GPRS 3000";
    case motherASUS1500:
      return "Motherboard ASUS 1500";
    case monASC543:
      return "Monitor ASC 543";
    case motherASUS1200:
      return "Motherboard ASUS 1200";
    case motherMZI400:
      return "Motherboard MZI";
    case hddToyiva:
      return "HDD Toyiva";
    case hddWezter:
      return "HDD Wezter Dishital";
    case ramQuinstone:
      return "RAM Quinston";
    case ramQuinstoneFury:
      return "RAM Quinston Fury";
  }
}

// huboVentas(mes, anio): indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

// function huboVentas(mes, anio) {
//   let hubo = false;
//   for (let i = 0; i < ventas.length; i++) {
//     if (
//       mes === ventas[i][1].getMonth(ventas[i][1]) + 1 &&
//       anio === ventas[i][1].getFullYear(ventas[i][1])
//     ) {
//       hubo = true;
//       break;
//     }
//   }
//   return hubo;
// }

// Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

function ventasSucursal(sucursal) {
  let total = 0;
  for (let i = 0; i < ventas.length; i++) {
    if (ventas[i][3] === sucursal) {
      total += precioMaquina(ventas[i][4]);
    }
  }
  return total;
}

// sucursalDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes.

// function sucursalDelMes(mes, anio) {
//   let centro = 0;
//   let caballito = 0;
//   for (let i = 0; i < ventas.length; i++) {
//     if (
//       mes === ventas[i][1].getMonth(ventas[i][1]) + 1 &&
//       anio === ventas[i][1].getFullYear(ventas[i][1])
//     ) {
//       switch (ventas[i][3]) {
//         case "Centro":
//           centro += precioMaquina(ventas[i][4]);
//           break;
//         case "Caballito":
//           caballito += precioMaquina(ventas[i][4]);
//           break;
//       }
//     }
//   }
//   if (centro > caballito) {
//     return "Centro";
//   } else {
//     return "Caballito";
//   }
// }

//Mejor vendedor

function mejorVendedor() {
  let donatello = 0;
  let leonardo = 0;
  let michelangelo = 0;
  let raphael = 0;
  for (let i = 0; i < ventas.length; i++) {
    switch (ventas[i][2]) {
      case "Donatello":
        donatello += precioMaquina(ventas[i][4]);
        break;
      case "Leonardo":
        leonardo += precioMaquina(ventas[i][4]);
        break;
      case "Michelangelo":
        michelangelo += precioMaquina(ventas[i][4]);
        break;
      case "Raphael":
        raphael += precioMaquina(ventas[i][4]);
        break;
    }
  }
  const vendors = [donatello, leonardo, michelangelo, raphael];
  switch (Math.max.apply(null, vendors)) {
    case donatello:
      return "Donatello";
    case leonardo:
      return "Leonardo";
    case michelangelo:
      return "Michelangelo";
    case raphael:
      return "Raphael";
  }
}

// Recuperar valor de un select no multiple

function getValueFromSelect(id) {
  // return document.getElementById(id)[document.getElementById(id).value].innerHTML
  let sel = document.getElementById(id);
  let value = sel.options[sel.selectedIndex].text;
  return value;
}

// Crea un array con los elementos seleccionados del select multiple de componentes

function getSelectValues(select) {
  var result = [];
  var options = select && select.options;
  var opt;

  for (var i = 0, iLen = options.length; i < iLen; i++) {
    opt = options[i];

    if (opt.selected) {
      result.push(opt.value || opt.text);
    }
  }
  return result;
}

// Crea un array con los elementos seleccionados del select multiple de componentes

function getSelectedComponents() {
  selValues = [];
  let arr = getSelectValues(componente);
  for (let i = 0; i < arr.length; i++) {
    let ele = (document.getElementById("componente")[(arr[i]) - 1]).innerHTML;
    selValues.push(ele);
  }
  return selValues;
}

function getSelectedComponentsFromEdit(componente) {
  selValues = [];
  let arr = getSelectValues(componente);
  for (let i = 0; i < arr.length; i++) {
    let ele = (document.getElementById("componente")[(arr[i]) - 1]).innerHTML;
    selValues.push(ele);
  }
  return selValues;
}

// Devuelve los elementos de un array de a pares

function showComponents(arr) {
  let str = "";
  for (let i = 0; i < arr.length - 1; i++) {
    str += arr[i] + `<br>`;
  }
  str += arr[arr.length - 1];
  return str;
}

// function showComponents(arr) {
//   let str = "";
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (i % 2 === 0) {
//       str += arr[i] + " - ";
//     } else {
//       str += arr[i] + `<br>`;
//     }
//   }
//   str += arr[arr.length - 1];
//   return str;
// }

// Devuelve el precio total de los elementos seleccioandos

function getSelectedComponentsPrice() {
  let price = 0;
  let arr = getSelectedComponents();
  price += precioMaquina(arr);
  return price;
}

// Ordena de menor a mayor (se puede usar .reverse() para ordenar de mayor a menor)

// function ordenarMenor(arr) {
//   arr.sort(function (value1, value2) {
//     if (value1 < value2) {
//       return -1;
//     } else {
//       return 1;
//     }
//   });
// }

// Funciones para formatear la presentación de las fechas

function dateFormatter(i) {
  let day = ventas[i][1].getDate();
  let month = ventas[i][1].getMonth() + 1;
  let year = ventas[i][1].getFullYear();
  return ("0" + day).slice(-2) + "/" + ("0" + month).slice(-2) + "/" + year;
}

function ddmmyyyy(yyyymmdd) {
  return yyyymmdd.split("-").reverse().join("/");
}

// Funcion para llenar la tabla de ventas

function rowFiller(num) {
  for (let i = 0; i < ventas.length; i++) {
    if (ventas[i][0] == num) {
      document.getElementById("tabla-ventas").innerHTML += `<tr id="tr-${(ventas[i][0])}">
    <td id="fecha${ventas[i][0]}">
    ${ddmmyyyy(ventas[i][1])}
    </td>
    <td id="vendedor${ventas[i][0]}">
    ${ventas[i][2]}
    </td>
    <td id="sucursal${ventas[i][0]}">
    ${ventas[i][3]}
    </td>
    <td id="componente${ventas[i][0]}">
    ${showComponents(ventas[i][4])}
    </td>
    <td id="precio${ventas[i][0]}">
    ${precioMaquina(ventas[i][4])}
    </td>
    <td id="acciones">
      <div id="edit${ventas[i][0]}">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#modal-edit${ventas[i][0]}">
      <i class="fas fa-pen"></i>
    </button>
      <!-- Modal -->
<div class="modal fade" id="modal-edit${ventas[i][0]}" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ModalLabel">Editar venta</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- Modal body -->
            <div class="modal-body">
                <!-- Vendedora -->
                <label class="h6">Vendedor</label>
                <select id="edit-vendedor${ventas[i][0]}" class="form-select" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">${vendedores[0]}</option>
                    <option value="2">${vendedores[1]}</option>
                    <option value="3">${vendedores[2]}</option>
                    <option value="3">${vendedores[3]}</option>
                </select>
                <!-- Componentes -->
                <label class="h6">Componentes</label>
                <select id="edit-componente${ventas[i][0]}" class="form-select" multiple="multiple"
                    aria-label="multiple select example">
                    <option value="1">Monitor GPRS 3000</option>
                    <option value="2">Motherboard ASUS 1500</option>
                    <option value="3">Monitor ASC 543</option>
                    <option value="4">Motherboard ASUS 1200</option>
                    <option value="5">Motherboard MZI</option>
                    <option value="6">HDD Toyiva</option>
                    <option value="7">HDD Wezter Dishital</option>
                    <option value="8">RAM Quinston</option>
                    <option value="9">RAM Quinston Fury</option>
                </select>
                <!-- Sucursal -->
                <label class="h6">Sucursal</label>
                <select id="edit-sucursal${ventas[i][0]}" class="form-select" aria-label="Default select example">
                    <option selected></option>
                    <option value="1">Centro</option>
                    <option value="2">Caballito</option>
                </select>
                <!-- Fecha -->
                <label class="h6">Fecha</label>
                <input id="edit-fecha${ventas[i][0]}" type="date" class="input-group">
                <!-- Modal footer -->

            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="editSale(${ventas[i][0]})">Guardar</button>
            </div>
        </div>
    </div>
</div>
<!-- Fin del modal -->
</div>

<div id="delete${ventas[i][0]}">
<!-- Button trigger modal -->
      <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#modal-delete${ventas[i][0]}">
      <i class="fas fa-trash-alt"></i>
    </button>
<!-- Modal -->
<div class="modal fade" id="modal-delete${ventas[i][0]}" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="ModalLabel">Eliminar venta</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- Modal body -->
            <div class="modal-body">
                <!-- Aviso -->
                <h6>De verdad quieres eliminar el registro?</h6>
                <!-- Modal footer -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="deleteSale(${ventas[i][0]})">Si</button>
            </div>
        </div>
    </div>
</div>
<!-- Fin del modal -->
</div>
</td>`;
    }
  }
}

// FUNCIONES SAVE-EDIT-DELETE

// Save sale

function saveSale(num) {
  ventas.push([
    num,
    document.getElementById("fecha").value,
    getValueFromSelect("vendedor"),
    getValueFromSelect("sucursal"),
    getSelectedComponents(),
  ]);

  rowFiller(num);

  salesLen++;

  //Ventas por sucursal
  document.getElementById("centro").innerHTML = ventasSucursal("Centro");
  document.getElementById("caballito").innerHTML = ventasSucursal("Caballito");

  //Reportes
  document.getElementById("top-product").innerHTML = componenteMasVendido();
  document.getElementById("top-vendor").innerHTML = mejorVendedor();
}

// Edit sale

function editSale(num) {
  for (let i = 0; i < ventas.length; i++) {
    if (ventas[i][0] == num) {
      ventas[i][1] = document.getElementById("edit-fecha" + num).value;
      ventas[i][2] = getValueFromSelect("edit-vendedor" + num);
      ventas[i][3] = getValueFromSelect("edit-sucursal" + num);
      ventas[i][4] = getSelectedComponentsFromEdit(document.getElementById("edit-componente" + num));


      document.getElementById("fecha" + num).innerHTML = ddmmyyyy(ventas[i][1]);
      document.getElementById("vendedor" + num).innerHTML = ventas[i][2];
      document.getElementById("sucursal" + num).innerHTML = ventas[i][3];
      document.getElementById("componente" + num).innerHTML = showComponents(ventas[i][4]);
      document.getElementById("precio" + num).innerHTML = precioMaquina(ventas[i][4]);

      //Ventas por sucursal
      document.getElementById("centro").innerHTML = ventasSucursal("Centro");
      document.getElementById("caballito").innerHTML = ventasSucursal("Caballito");

      //Reportes
      document.getElementById("top-product").innerHTML = componenteMasVendido();
      document.getElementById("top-vendor").innerHTML = mejorVendedor();
    }
  }
}

// Delete sale

function deleteSale(num) {
  for (let i = 0; i < ventas.length; i++) {
    if (ventas[i][0] == num) {
      ventas.splice(i, 1);


      document.getElementById("tr-" + num).remove();

      //Ventas por sucursal
      document.getElementById("centro").innerHTML = ventasSucursal("Centro");
      document.getElementById("caballito").innerHTML = ventasSucursal("Caballito");

      //Reportes
      document.getElementById("top-product").innerHTML = componenteMasVendido();
      document.getElementById("top-vendor").innerHTML = mejorVendedor();
    }
  }
}