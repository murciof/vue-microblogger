import type { Post } from '@/types/content'
import { LOREM_IPSUM_1 } from './text'

export const POST_MAXIMUM_LENGTH = 140

export const POSTS = [
  {
    id: 1,
    userId: 1,
    text: 'Bem-vindo ao vue-microblogger!',
  },
  {
    id: 2,
    userId: 1,
    text: 'Isto é um teste',
  },
  {
    id: 3,
    userId: 1,
    text: LOREM_IPSUM_1,
  },
  {
    id: 4,
    userId: 2,
    text: 'Isto é outro teste',
  },
] as Post[]
