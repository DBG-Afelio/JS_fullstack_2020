import { Controller, Get, Post, Body, Put, Param, Delete, Req, UseGuards, ParseIntPipe } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { JwtGuard } from 'src/guards/jwt.guard';
import { RoleGuard } from 'src/guards/role.guard';
import { RoleEnum } from 'src/user/role.enum';
import { Roles } from 'src/decorators/role.decorator';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}
  
  @UseGuards(JwtGuard,RoleGuard)
  @Roles(RoleEnum.USER,RoleEnum.PREMIUM,RoleEnum.ADMIN)
  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto, @Req()request) {
    return this.recipeService.create(createRecipeDto,request.user.userLogin);
  }

  @Get()
  findAll() {
    return this.recipeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
    return this.recipeService.findOne(id);
  }

  @Put(':id')
  update(@Param('id',ParseIntPipe) id: number, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipeService.update(id, updateRecipeDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe) id: number) {
    return this.recipeService.remove(id);
  }
}
