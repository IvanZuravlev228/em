import { Injectable } from '@angular/core';
import * as XLSX from "xlsx";
import {environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {ExcelFile} from "../model/ExcelFile";

@Injectable({
  providedIn: 'root'
})
export class ExcelReaderService {
  excelFile: ExcelFile = new ExcelFile();

  constructor(private http: HttpClient) { }

  readExcelFile(fileInput: any): void {
    const file: File = fileInput.files[0];

    if (!file) {
      console.error("File was not chosen");
      return;
    }

    if (file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      console.error("Format of file does not correct");
      return;
    }

    const reader: FileReader = new FileReader();

    reader.onload = (e: Event) => {
      try {
        const binaryData = (e.target as FileReader).result;
        const workbook = XLSX.read(binaryData as string, { type: 'binary' });

        for (let i = 0; i < workbook.SheetNames.length; i++) {
          let sheetName = workbook.SheetNames[i];
          const worksheet = workbook.Sheets[sheetName];

          if (sheetName === "company") {
            this.excelFile.companies = XLSX.utils.sheet_to_json(worksheet, { raw: true });
          }

          if (sheetName === "pollutant") {
            this.excelFile.pollutants = XLSX.utils.sheet_to_json(worksheet, { raw: true });
            console.log(this.excelFile.pollutants);
          }
          if (sheetName === "pollution") {
            this.excelFile.pollutions = XLSX.utils.sheet_to_json(worksheet, { raw: true });
          }
        }
        // console.log(this.excelFile);
        this.saveExcelFile(this.excelFile).subscribe({
          next: () => {
            console.log("Data was added");
          },
          error: (error) => {
            console.log(error);
          }
        })
      } catch (error) {
        console.error("Something went wrong: ", error);
      }
    };
    reader.readAsBinaryString(file);
  }

  private saveExcelFile(excelFile: ExcelFile) {
    // console.log("saveExcelFile method was called");
    return this.http.post<void>(environment.backendURL + "/add-excel", excelFile, {
      headers: {
        "Content-Type": "application/json"
      }});
  }
}
