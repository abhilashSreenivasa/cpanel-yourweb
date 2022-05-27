// Function that converts your html table to Excel sheet.

function HtmlTOExcel(type,tableId, fun, dl) {
    var elt = document.getElementById(tableId);
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
        XLSX.writeFile(wb, fun || (`cpanel-${tableId}.` + (type || 'xlsx')));
}