$('#buttonshow').on("click",function() {
    $('#atv1').toggleClass("hide")
})

$('#buttonshowa').on("click",function() {
    $('#atv2').toggleClass("hide")
})

$('#buttonshowb').on("click",function() {
    $('#atv3').toggleClass("hide")
})


// SQL
function newExp() { 
    $('#myModal').modal('show'); 
}

function fecharModal() {
    $('#myModal').modal('hide');
}

const tableBodyy = document.querySelector("#table-body-toalha");

$.ajax({ 
    url: "http://127.0.0.1:3041/experienciaselect", 
    type: 'GET', 
    success: data => { 
        data.forEach(element => {
            const tr = document.createElement("tr");
        tr.innerHTML = `
        <tr>
                <th scope="row">${element.IDexp}</th> 
                <td>${element.empresa}</td>
                <td><button onclick="viewExp(${element.IDexp})" class="buttonView"><i class="bi bi-eye-fill"></i></button>
                <button onclick="deleteDoacao(${element.IDexp})" class="buttonDelete"><i class="bi bi-trash-fill"></i></button>
                </td>
        </tr>
        `
        tableBodyy.appendChild(tr); 
        });
    }
});

function salvarAss() { 
    const inputEmpresa = document.querySelector("input[name='empresa']").value;
    const inputCargo = document.querySelector("input[name='cargo']").value;
    const inputFuncao = document.querySelector("input[name='funcao']").value;
    const inputInicio = document.querySelector("input[name='inicio']").value;
    const inputSaida = document.querySelector("input[name='saida']").value;


    var settings = { 
        "url": "http://127.0.0.1:3041/experienciainsert",
        "method": "POST",
        "timeout": 0,
        "data": {
            "empresa": inputEmpresa,
            "cargo": inputCargo,
            "funcao": inputFuncao,
            "dataInicio": inputInicio,
            "dataSaida": inputSaida,
        }
      }; 
      
      $.ajax(settings);
}

function deleteDoacao(id) {
    $.ajax({ 
        url: "http://127.0.0.1:3041/experienciaselect",
        type: 'GET',
        success: data => {
            data.forEach(element => {
                const editarDo = `
                <div id="myModal`+ id +`"class="modal customizar">
                <div class="modal-dialog" role="document">
                <div class="modal-content customize">
                    <div class="modal-body">
                    <p>Tem certeza que deseja excluir a toalha com ID ${id}?</p>
                    </div>
                    <div class="modal-footer">
                    <button onclick="deletedoc(${id})" type="button" class="btn btn-primary">Confirmar exclusão</button>
                    <button onclick="fecharModall(${id})" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar exclusão</button>
                    </div>
                </div>
                </div>
            </div>
    ` 
    if(element.IDexp == id){ 
        document.getElementById("modal").innerHTML = editarDo;
        $('#myModal' + id).modal('show'); 
    }
            });
        }
    });
};

function fecharModall(id) {
    $('#myModal' + id).modal('hide'); 
    $('#myModal' + id).remove();
};

function deletedoc(id) { 
        $.ajax({ 
            type: 'POST',
            url: "http://127.0.0.1:3041/experienciadelete",
            data: {IDexp: id},
        })
}

function viewExp(id) {
    $.ajax({
        url: "http://127.0.0.1:3041/experienciaselect",
        type: 'GET',
        success: data => {
            data.forEach(element => {
                const divvv = `
        <div id="myModal`+id+`"class="modal customizar">
        <div class="modal-dialog" role="document">
        <div class="modal-content customize">
            <div class="modal-body">
            <div class="mb-1">
            <label for="exampleInputEmail1" class="form-label"></label>Titulo:
            <p class="textAA">${element.empresa}</p>
          </div>
          <div class="mb-2">
            <label for="exampleInputEmail1" class="form-label"></label>Descrição:
            <p class="textAA">${element.cargo}</p>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"></label>Valor:
            <p class="textAA">${element.funcao}</p>
          </div>
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label"></label>Data:
            <p class="textAA">${element.dataInicio}</p>
          </div>
          <div class="mb-4">
            <label for="exampleInputEmail1" class="form-label"></label>Horário:
            <p class="textAA">${element.dataSaida}</p>
          </div>
            </div>
            <div class="modal-footer">
            <button onclick="fecharform(${id})" type="button" class="btn btn-secondary" data-dismiss="modal">Fechar formulário</button>
            </div>
        </div>
        </div>
    </div>
    `
    if(element.IDexp == id){
        document.getElementById("modal").innerHTML = divvv;
        $('#myModal' + id).modal('show');
    }
            });
        }
    });
};

function fecharform(id) {
    $('#myModal' + id).modal('hide');
    $('#myModal' + id).remove();
};