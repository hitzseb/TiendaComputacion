// CARGA INICIAL DE DATOS TOMADOS DE "dat.js"

//Ventas por sucursal
document.getElementById("centro").innerHTML = ventasSucursal("Centro");
document.getElementById("caballito").innerHTML = ventasSucursal("Caballito");

//Reportes
document.getElementById("top-product").innerHTML = componenteMasVendido();
document.getElementById("top-vendor").innerHTML = mejorVendedor();

//Ventas
for (let i = 0; i < ventas.length; i++) {

    document.getElementById("tabla-ventas").innerHTML += `<tr id="tr-${ventas[i][0]}">
      <td id="fecha${ventas[i][0]}">
      ${dateFormatter(i)}
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
                <!-- Vendedor -->
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
                <button type="button" class="btn btn-primary" onclick="editSale(${ventas[i][0]})">Guardar</button>
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
