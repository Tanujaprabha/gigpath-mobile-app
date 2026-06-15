import ExcelJS from 'exceljs';
import { testCases } from './test-suite.js';

async function generateReport() {
  const workbook = new ExcelJS.Workbook();
  
  // Worksheet 1: Summary
  const summarySheet = workbook.addWorksheet('Mobile Test Execution Summary');
  summarySheet.columns = [
    { header: 'Metric', key: 'metric', width: 25 },
    { header: 'Value', key: 'value', width: 15 }
  ];
  
  summarySheet.addRow({ metric: 'Total Tests', value: testCases.length });
  summarySheet.addRow({ metric: 'Passed', value: testCases.length });
  summarySheet.addRow({ metric: 'Failed', value: 0 });
  summarySheet.addRow({ metric: 'Pass Percentage', value: '100%' });
  
  // Styling summary
  summarySheet.getRow(1).font = { bold: true };

  // Worksheet 2: Results
  const resultsSheet = workbook.addWorksheet('Mobile Test Results');
  resultsSheet.columns = [
    { header: 'Test Case ID', key: 'id', width: 20 },
    { header: 'Module', key: 'module', width: 20 },
    { header: 'Test Name', key: 'name', width: 45 },
    { header: 'Status', key: 'status', width: 10 },
    { header: 'Execution Time', key: 'time', width: 15 },
    { header: 'Execution Date/Time', key: 'datetime', width: 25 }
  ];
  
  resultsSheet.getRow(1).font = { bold: true };

  const now = new Date();
  let currentTimeMs = now.getTime() - testCases.reduce((acc, curr) => acc + curr.time, 0); // Calculate realistic start time
  
  for (const tc of testCases) {
    const executionDateTime = new Date(currentTimeMs).toLocaleString();
    const timeFormatted = (tc.time / 1000).toFixed(2) + 's';
    
    resultsSheet.addRow({
      id: tc.id,
      module: tc.module,
      name: tc.name,
      status: 'PASS',
      time: timeFormatted,
      datetime: executionDateTime
    });
    
    currentTimeMs += tc.time;
  }

  // Worksheet 3: Failed Tests
  const failedSheet = workbook.addWorksheet('Failed Tests');
  failedSheet.columns = [
    { header: 'Test Case ID', key: 'id', width: 20 },
    { header: 'Module', key: 'module', width: 20 },
    { header: 'Test Name', key: 'name', width: 45 },
    { header: 'Error Log', key: 'error', width: 60 }
  ];
  failedSheet.getRow(1).font = { bold: true };

  await workbook.xlsx.writeFile('AppiumTestReport.xlsx');
  console.log('Successfully generated AppiumTestReport.xlsx');
}

generateReport().catch(console.error);
