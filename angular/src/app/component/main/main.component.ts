import { Component } from '@angular/core';
import {ExcelReaderService} from "../../service/excel-reader.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private excelReaderService: ExcelReaderService) {
  }

  readExcelFile(fileInput: any): void {
    this.excelReaderService.readExcelFile(fileInput);
  }
}
