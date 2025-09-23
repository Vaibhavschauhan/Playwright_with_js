const ExcelJs=require('exceljs');
const { setUncaughtExceptionCaptureCallback } = require('node:process');
async function writeExcelTest(searchtext,excelpath,sheetName) {

    // Create object for prevention of hardcoding
    const workbook= new ExcelJs.Workbook();
    await workbook.xlsx.readFile(excelpath);
    const worksheet = workbook.getWorksheet(sheetName);


    // This code is used to get all the data of excel file ,each row and each column
    // worksheet.eachRow((row,rowNumber) =>
    // {
    //     row.eachCell((cell,colNumber)=>
    //         {
    //             console.log(cell.value);
    //         })
    //  })
    
    // This code is to get the row number and column number
    // worksheet.eachRow((row,rowNumber) =>
    // {
    //     row.eachCell((cell,colNumber)=>
    //         {
    //             if(cell.value==="Divyam")
    //                 {
    //                     console.log(rowNumber,colNumber);
    //                 }
    //         })
    //  })


    // This code is to put the data to particular cell value
    // const cell=worksheet.getCell(3,2);
    // cell.value="Sachin";
    // await workbook.xlsx.writeFile("C:/Users/Dell/OneDrive/Documents/Playwright/PlaywrightExcel.xlsx");

    // This code is after initializing the row and column globally
    // worksheet.eachRow((row,rowNumber) =>
    // {
    //     row.eachCell((cell,colNumber)=>
    //         {
    //             if(cell.value==="Prashant")
    //                 {
    //                     output.row=rowNumber;
    //                     output.column=colNumber;
    //                 }
    //         })
    //  })

    const output=await readExcel(worksheet, searchtext);

    const cell=worksheet.getCell(output.row,output.column);
    cell.value="Prashant";
    await workbook.xlsx.writeFile("C:/Users/Dell/OneDrive/Documents/Playwright/PlaywrightExcel.xlsx");


}

async function readExcel(worksheet,searchtext) {
        let output = {row:-1,column:-1};

    worksheet.eachRow((row,rowNumber) =>
    {
        row.eachCell((cell,colNumber)=>
            {
                if(cell.value === searchtext)
                    {
                        output.row=rowNumber;
                        output.column=colNumber;
                    }
            })
     })

     return output;
    
    
}

writeExcelTest("Amit","C:/Users/Dell/OneDrive/Documents/Playwright/PlaywrightExcel.xlsx","Sheet1");
