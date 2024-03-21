import React from 'react';
import ExcelJS from 'exceljs'
import AssignmentModel from '../../../../../Models/AssignmentModel';
import dayjs from 'dayjs';


interface Props {
    assignments: AssignmentModel[]
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>
}

export const ExportButton: React.FC<Props> = ({
    assignments,
    setDisplay
}) => {
    const exportToXLSX = () => {
        const workbook = new ExcelJS.Workbook()
        const sheet = workbook.addWorksheet('income', {
            pageSetup: { paperSize: 9, orientation: 'landscape' },
            headerFooter: { oddFooter: "Page &P of &N", oddHeader: 'דו"ח הכנסות' },
            properties: { tabColor: { argb: 'FFC0000' } }
        })


        sheet.getRow(1).fill = {
            type: 'pattern',
            pattern: 'darkHorizontal',
            fgColor: { argb: 'FFFF00' }
        }

        sheet.getRow(1).font = {
            name: 'Comic Sans MS',
            family: 4,
            size: 15,
            bold: true

        }

        sheet.columns = [
            {
                header: 'מחיר',
                key: 'price',
                width: 10
            },
            {
                header: 'פירוט',
                key: 'description',
                width: 40
            },
            {
                header: 'סוג עבודה',
                key: 'title',
                width: 20
            },
            {
                header: 'תאריך',
                key: 'date',
                width: 10
            }
        ]
        assignments?.map(a => ({ ...a, date: dayjs(a.date).format('DD/MM/YYYY') }))
        assignments?.map(a => {
            sheet.addRow({
                price: a.price !== 0 && !isNaN(a.price) ? a.price.toFixed(2) : 0,
                description: a.description,
                title: a.title,
                date: dayjs(a.date).format('DD/MM/YYYY')
            })
        })

        const sumOfPrices = assignments.reduce((sum, a) => sum + a.price, 0);

        const summaryStartRow = assignments.length + 3;
        sheet.addRow([]);
        sheet.addRow([`₪${sumOfPrices.toFixed(2)}`, 'סך הכל לפני מע"מ']);
        sheet.addRow(['17%', 'מע"מ']);
        sheet.addRow([`₪${(sumOfPrices * 0.17).toFixed(2)}`, 'סך מע"מ']);
        sheet.addRow([`₪${(sumOfPrices * 0.17 + sumOfPrices).toFixed(2)}`, 'סך הכל כולל מע"מ']);

        sheet.getCell(`A${summaryStartRow}`).font = { bold: true };
        sheet.getCell(`B${summaryStartRow}`).font = { bold: true };
        sheet.getCell(`A${summaryStartRow + 1}`).font = { bold: true };
        sheet.getCell(`B${summaryStartRow + 1}`).font = { bold: true };
        sheet.getCell(`A${summaryStartRow + 2}`).font = { bold: true };
        sheet.getCell(`B${summaryStartRow + 2}`).font = { bold: true };
        sheet.getCell(`A${summaryStartRow + 3}`).font = { bold: true };
        sheet.getCell(`B${summaryStartRow + 3}`).font = { bold: true };

        sheet.eachRow(row => {
            row.eachCell(cell => {
                cell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
            });
        });

        const dateColumn = sheet.getColumn(4);
        dateColumn.eachCell(d => {

            if (typeof d.value === 'string' && d.value !== 'תאריך') {
                d.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'ffc247' }
                };
            }
        })

        const priceColumn = sheet.getColumn(1);
        priceColumn.eachCell(p => {
            const cellValue = sheet.getCell(p?.address).value

            if (cellValue === 0)
                sheet.getCell(p?.address).fill = {
                    type: 'pattern',
                    pattern: 'lightDown',
                    fgColor: { argb: 'FF0000' }
                }
        })


        workbook.xlsx.writeBuffer().then(data => {
            const blob = new Blob([data], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheet.sheet"
            });
            const url = window.URL.createObjectURL(blob)
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'download.xlsx';
            anchor.click();
            window.URL.revokeObjectURL(url)
        })
    };

    return <a onClick={() => { exportToXLSX(); setDisplay(false) }} style={{ color: 'black', display: 'inline-flex', gap: 5  }}>
        <span>
            ייצא לקובץ
        </span>
        <span style={{ display: 'flex', flexDirection: 'row-reverse', gap: 2 }}>
            <span>
                (xlsx.)
            </span>
            <span>
                Excel
            </span>
        </span>
    </a>;
};
