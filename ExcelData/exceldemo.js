const ExcelJs=require('exceljs');
const { setUncaughtExceptionCaptureCallback } = require('node:process');
async function ExcelTest() {
    const workbook= new ExcelJs.Workbook();
     workbook.xlsx.readFile('C:\Users\Dell\OneDrive\Documents\Playwright\PlaywrightExcel.xlsx');
     const worksheet = workbook.getWorksheet('Sheet1');
     worksheet.eachRow((row,rowNumber) =>{

        row.eachCell((cell,colNumber)=>{
            console.log(cell.value);
        })
     })
}

ExcelTest();