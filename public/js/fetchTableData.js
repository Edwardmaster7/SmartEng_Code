export async function fetchTableData() {
    try {
        const response = await fetch('/data');
        const tableData = await response;
        
        console.log(`response: ${response} \n tableData: ${tableData}`)

        const container = document.getElementById('table-container');
        const table = document.createElement('table');
        table.border = 1;

        tableData.forEach((row, rowIndex) => {
            const tr = document.createElement('tr');
            row.forEach((cell, cellIndex) => {
                const td = rowIndex === 0 ? document.createElement('th') : document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });

        container.appendChild(table);
    } catch (error) {
        console.error('Error fetching table data:', error);
    }
}

