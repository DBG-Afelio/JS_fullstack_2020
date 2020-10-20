import { Controller, Get, Post, Body, Put, Param, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { RoleGuard } from 'src/guards/role.guard';
import { Roles } from 'src/decorators/role.decorator';
import { RoleEnum } from 'src/user/role.enum';
import { JwtGuard } from 'src/guards/jwt.guard';

@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}
  
  @UseGuards(JwtGuard,RoleGuard)
  @Roles(RoleEnum.USER,RoleEnum.PREMIUM,RoleEnum.ADMIN)
  @Post()
  create(@Body() createIngredientDto: CreateIngredientDto) {
    return this.ingredientService.create(createIngredientDto);
  }

  @Get()
  findAll() {
    return this.ingredientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.ingredientService.findOne(id);
  }

  @UseGuards(JwtGuard,RoleGuard)
  @Roles(RoleEnum.ADMIN)
  @Put(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateIngredientDto: UpdateIngredientDto) {
    return this.ingredientService.update(id, updateIngredientDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.ingredientService.remove(id);
  }
}
