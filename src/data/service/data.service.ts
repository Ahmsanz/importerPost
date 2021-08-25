import { Injectable } from '@nestjs/common';
import * as csv from 'csv-parser';
import * as fs from 'fs';
@Injectable()
export class DataService {
    public async handleFile(file: File): Promise<any> {
        console.log(file);
        const fileContent = await this.parseCSV(file);

        return fileContent;
    }

    private async parseCSV(file: File) {
        const results = [];
        const files = fs.readdirSync('./files');
        console.log(files);
        fs.createReadStream(`./files/${files[0]}`)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => console.log('parsing ended'))
        
        return results;
    }

    private async seeReport(table: object[]) {
        return table;
    } 
}
