let dataArray = [
    {
        id:0,
        name:'shamim',
        status: '1'
    },
    {
        id:1,
        name:'mota',
        status: '0'
    }
]

printArrayToTable()
document.getElementById('reset').onclick = resetArray
document.getElementById('add').onclick = addDataToArray

function resetArray() {
    dataArray = []
    printArrayToTable()
}

function editArrayData(id) {
    console.log('edit-',id)
    printArrayToTable()
}

function deleteArrayData(id) {
    console.log('delete-',id)
    printArrayToTable()
}

function addDataToArray() {
    let id = dataArray.length
    let name = document.getElementById('name').value
    let status = document.getElementById('status').value
    dataArray.push({
        id:id,
        name:name,
        status: status
    })
    printArrayToTable()
}

function printArrayToTable() {
    let tbody = document.getElementById('tbody')
    if (dataArray.length!==0) {
        tbody.innerHTML=''
        for (let i=0; i<dataArray.length; i++) {
            // row
            let row = document.createElement('tr')
            // cell-0 : serial
            let cell0 = document.createElement('td')
            cell0.appendChild(document.createTextNode(i+1))
            // cell-1 : id
            let cell1 = document.createElement('td')
            cell1.appendChild(document.createTextNode(dataArray[i].id))
            // cell-2 : name
            let cell2 = document.createElement('td')
            cell2.appendChild(document.createTextNode(dataArray[i].name))
            // cell-3 : status
            let status = () => {
                if (dataArray[i].status === '0') return 'Offline'
                else if (dataArray[i].status === '1') return 'Online'
                else return 'Busy'
            }
            let cell3 = document.createElement('td')
            cell3.appendChild(document.createTextNode(status()))
            // cell-4 : operations
            let cell4 = document.createElement('td')
            let editButton = document.createElement('button')
            editButton.className = 'fa fa-edit btn btn-sm text-warning'
            editButton.onclick = editArrayData.bind(null,dataArray[i].id)
            let deleteButton = document.createElement('button')
            deleteButton.className = 'fa fa-trash-alt btn btn-sm text-danger'
            deleteButton.onclick = deleteArrayData.bind(null,dataArray[i].id)
            cell4.appendChild(editButton)
            cell4.appendChild(document.createTextNode(' - '))
            cell4.appendChild(deleteButton)
            // append cells
            row.appendChild(cell0)
            row.appendChild(cell1)
            row.appendChild(cell2)
            row.appendChild(cell3)
            row.appendChild(cell4)
            tbody.appendChild(row)
        }
    } else {
        tbody.innerHTML='<tr><td colspan="5"> - No Data Available - </td></tr>'
    }
}