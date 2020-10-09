import { RolesBuilder } from 'nest-access-control';
import { RolesEnum } from 'src/enum/roles.enum';

export const roles: RolesBuilder = new RolesBuilder();

roles
  .grant(RolesEnum.READER)
  .readOwn('user', ['!_password'])
  .updateOwn('user', ['!role', '!isBlocked']) // except 'isBlocked' and 'role'
  .read('article/published', )
  .read('article/published')
  .createAny('comment')
  .updateOwn('comment')
  .deleteOwn('comment')
  .readAny('tag')
  .grant(RolesEnum.AUTHOR)
  .extend(RolesEnum.READER)
  .readOwn('article')
  .createAny('article')
  .updateOwn('article/draft') //not published yet + only own
  .deleteOwn('article/draft')
  .grant(RolesEnum.EDITOR)
  .extend(RolesEnum.READER)
  .readAny('user', ['!_password'])
  .updateAny('user', ['role', 'isBlocked']) //only those 2 params
  .update('article/to-review', ['status', 'tag']) // can only modify status of articles 'to review' and 'published' only
  .createAny('tag')
  .updateAny('tag')
  .deleteAny('tag')
  .grant(RolesEnum.MODERATOR)
  .extend(RolesEnum.READER)
  .readAny('comment/to-review')
  .updateAny('comment/to-review', ['status'])
  .deleteAny('comment/to-review')
  .grant(RolesEnum.MASTER)
  .extend([RolesEnum.READER, RolesEnum.AUTHOR, RolesEnum.EDITOR, RolesEnum.MODERATOR])
 

// available crud on : user / article / comment / tag
