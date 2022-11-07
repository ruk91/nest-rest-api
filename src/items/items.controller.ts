import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items') // A Decorator. Basically use for metadata
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Get all items';
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name}, Desc: ${createItemDto.description}`;
    }
}
