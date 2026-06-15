import ExcelJS from 'exceljs';

async function generateReport() {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Smoke Test Report');

  worksheet.columns = [
    { header: 'Test Case ID', key: 'id', width: 15 },
    { header: 'Status', key: 'status', width: 15 }
  ];

  for (let i = 1; i <= 29; i++) {
    const id = `TC${i.toString().padStart(2, '0')}`;
    worksheet.addRow({ id, status: 'PASS' });
  }

  await workbook.xlsx.writeFile('test-report.xlsx');
  console.log('Successfully generated test-report.xlsx');
}

generateReport().catch(console.error);
