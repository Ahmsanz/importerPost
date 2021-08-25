import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DataService } from '../service/data.service';

@Controller('data')
export class DataController {
    constructor(
        private dataService: DataService
    ) {}
    
    @Post()
    @UseInterceptors(FileInterceptor('file', {
        dest: './files',
        preservePath: true
    }))
    async postFile(
        @UploadedFile() file: any
    ): Promise<void> {
       const fileContent = await this.dataService.handleFile(file);
       return fileContent;
    }
}
