// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Comment, ShortUrls } = initSchema(schema);

export {
  Post,
  Comment,
  ShortUrls
};