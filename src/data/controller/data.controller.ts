import { Controller, Inject, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DataService } from '../service/data.service';

@Controller('data')
export class DataController {
    constructor(
        private dataService: DataService
    ) {}
    
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    async postFile(
        @UploadedFile() file: any
    ): Promise<void> {
       this.dataService.handleFile(file);
    }
}
