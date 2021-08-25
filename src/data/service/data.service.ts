import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
    public handleFile(file: File): void {
        console.log(file);
    }
}
