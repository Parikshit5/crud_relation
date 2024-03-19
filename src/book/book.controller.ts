import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, ParseBoolPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookPipe } from './pipes/book.pipe';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('/add')
  create(@Body(new BookPipe()) createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id',ParseIntPipe) id: number) {
  //   console.log(id,typeof(id))
  //   return this.bookService.findOne(id);
  // }

  @Get(':id')
  findOne(@Param('id',ParseBoolPipe) id) {
    console.log(id,typeof(id))
    return this.bookService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
