import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { RolesEnum } from 'src/enum/roles.enum';
import { Roles } from 'src/guards/roles.decorator';
import { RolesGuard } from 'src/guards/roles.guard';
import { JwtAuthGuard } from 'src/passport/jwt-auth.guard';
import { CreateTagDto } from './dto/create-tag-dto';
import { UpdateTagDto } from './dto/update-tag-dto';
import { TagsEntity } from './entities/tags.entity';
import { TagService } from './tag.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('tags')
export class TagController {
  constructor(
    private readonly tagsService: TagService,
  ) {}

//   @Roles()
    @Get()
    getTagList(
        @Req() req
    ): Promise<TagsEntity[]> {
        return this.tagsService.getAll();
    }

//   @Roles()
    @Get(':id')
    getTag(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })) id: number
    ): Promise<TagsEntity> {
        return this.tagsService.getOne(id);
    }

    @Post()
    createTag(
      @Body() createTag: CreateTagDto
    ): Promise<TagsEntity> {
      return this.tagsService.addOne(createTag);
    }

//   @Roles(RolesEnum.MASTER, RolesEnum.AUTHOR)
    @Patch(':id')
    updateTag(
        @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })) id: number,
        @Body() upTag: UpdateTagDto
    ): Promise<TagsEntity> {
        return this.tagsService.update(id, upTag);
    }

  //  @Roles(RolesEnum.MASTER, RolesEnum.AUTHOR)
    @Delete(':id')
    removeTag(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_FOUND })) id: number
    ): Promise<any> {
        return this.tagsService.delete(id);
        }
}
