/*
 * Author: Gavin.wang
 * Date: 2026-01-05 16:10:20
 * LastEditors: Gavin.wang
 * LastEditTime: 2026-01-05 17:14:28
 * FilePath: /react-vite-cli/scripts/excelI18n.js
 * Description:
 */
import XLSX from 'xlsx';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const excelPath = path.resolve(__dirname, '../public/test.xlsx');
const outputDir = path.resolve(__dirname, '../src/locales');

const zhDir = path.join(outputDir, 'zh');
const enDir = path.join(outputDir, 'en');

const zhFile = path.join(zhDir, 'common.json');
const enFile = path.join(enDir, 'common.json');

// ===== 读取 Excel =====
const workbook = XLSX.readFile(excelPath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// 转成 JSON
const rows = XLSX.utils.sheet_to_json(sheet);

const zhJson = {};
const enJson = {};

rows.forEach((row, index) => {
  const zhValue = row['中文字段'];
  const enValue = row['英文对照'];

  if (!zhValue || !enValue) {
    console.warn(`第 ${index + 2} 行数据不完整，已跳过`);
    return;
  }
  zhJson[zhValue] = zhValue;
  enJson[zhValue] = enValue;
});

// ===== 写入文件 =====
fs.ensureDirSync(zhDir);
fs.ensureDirSync(enDir);

fs.writeJsonSync(zhFile, zhJson, { spaces: 2 });
fs.writeJsonSync(enFile, enJson, { spaces: 2 });

console.log('✅ i18n 文件生成完成');
console.log('→', zhFile);
console.log('→', enFile);
