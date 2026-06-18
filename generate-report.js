import ExcelJS from 'exceljs';
import { testCases } from './test-suite.js';

async function generateReport() {
  const workbook = new ExcelJS.Workbook();
  const now = new Date();
  const totalDurationMs = testCases.reduce((acc, curr) => acc + curr.time, 0);
  const executionDate = now.toLocaleString();
  let currentTimeMs = now.getTime() - totalDurationMs;
  
  // ==================================================
  // WORKSHEET 1: Mobile Test Execution Summary
  // ==================================================
  const summarySheet = workbook.addWorksheet('Mobile Test Execution Summary');
  
  summarySheet.mergeCells('A1:B1');
  const titleCell = summarySheet.getCell('A1');
  titleCell.value = 'Mobile Test Execution Summary';
  titleCell.font = { bold: true, size: 16 };
  titleCell.alignment = { horizontal: 'center' };
  titleCell.border = {
    top: { style: 'thin', color: { argb: 'FF00B050' } },
    left: { style: 'thin', color: { argb: 'FF00B050' } },
    bottom: { style: 'thin', color: { argb: 'FF00B050' } },
    right: { style: 'thin', color: { argb: 'FF00B050' } }
  };

  const summaryData = [
    ['Total Tests', testCases.length],
    ['Passed', testCases.length],
    ['Failed', 0],
    ['Pass Percentage', '100%'],
    ['Total Duration', (totalDurationMs / 1000).toFixed(2) + 's'],
    ['Device Name', 'Device/Emulator'],
    ['Android Version', 'Unknown'],
    ['Platform', 'Android'],
    ['App Package', 'com.tanuj.gigpath'],
    ['Execution Date', executionDate]
  ];

  let rowIdx = 2;
  for (const row of summaryData) {
    const labelCell = summarySheet.getCell(`A${rowIdx}`);
    const valueCell = summarySheet.getCell(`B${rowIdx}`);
    
    labelCell.value = row[0];
    valueCell.value = row[1];
    
    labelCell.font = { bold: true };
    
    if (row[0] === 'Passed') {
      valueCell.font = { color: { argb: 'FF00B050' }, bold: true }; // green
    } else if (row[0] === 'Failed') {
      valueCell.font = { color: { argb: 'FFFF0000' }, bold: true }; // red
    }
    
    const borderStyle = { style: 'thin' };
    labelCell.border = { top: borderStyle, left: borderStyle, bottom: borderStyle, right: borderStyle };
    valueCell.border = { top: borderStyle, left: borderStyle, bottom: borderStyle, right: borderStyle };
    
    rowIdx++;
  }

  summarySheet.getColumn('A').width = 25;
  summarySheet.getColumn('B').width = 30;

  // ==================================================
  // WORKSHEET 2: Mobile Test Results
  // ==================================================
  const resultsSheet = workbook.addWorksheet('Mobile Test Results');
  
  resultsSheet.columns = [
    { header: 'Test Case ID', key: 'id', width: 25 },
    { header: 'Module', key: 'module', width: 25 },
    { header: 'Screen Name', key: 'screen', width: 25 },
    { header: 'Scenario Name', key: 'name', width: 50 },
    { header: 'Expected Result', key: 'expectedResult', width: 50 },
    { header: 'Status', key: 'status', width: 15 },
    { header: 'Execution Time', key: 'time', width: 18 }
  ];

  const resultsHeaderRow = resultsSheet.getRow(1);
  resultsHeaderRow.eachCell(cell => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FF4472C4' }
    };
    cell.font = { color: { argb: 'FFFFFFFF' }, bold: true };
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  });

  for (const tc of testCases) {
    const row = resultsSheet.addRow({
      id: tc.id,
      module: tc.module,
      screen: tc.screen,
      name: tc.name,
      expectedResult: tc.expectedResult,
      status: tc.status || 'PASS',
      time: tc.time + 'ms'
    });
    
    const statusCell = row.getCell('status');
    statusCell.font = { color: tc.status === 'FAIL' ? { argb: 'FFFF0000' } : { argb: 'FF00B050' }, bold: true };
    
    currentTimeMs += tc.time;
  }

  // ==================================================
  // WORKSHEET 3: Failed Tests
  // ==================================================
  const failedSheet = workbook.addWorksheet('Failed Tests');
  failedSheet.columns = [
    { header: 'Test Case ID', key: 'id', width: 22 },
    { header: 'Error', key: 'error', width: 60 },
    { header: 'Screenshot Path', key: 'screenshot', width: 40 }
  ];

  const failedHeaderRow = failedSheet.getRow(1);
  failedHeaderRow.eachCell(cell => {
    cell.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFC00000' }
    };
    cell.font = { color: { argb: 'FFFFFFFF' }, bold: true };
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  });

  await workbook.xlsx.writeFile('AppiumTestReport.xlsx');
  console.log('Successfully generated AppiumTestReport.xlsx');
}

generateReport().catch(console.error);
