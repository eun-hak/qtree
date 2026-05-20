import { Category, Post } from '../app/data/mock';

/**
 * Category 타입 가드
 */
export function isCategory(obj: unknown): obj is Category {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof (obj as Category).id === 'string' &&
    typeof (obj as Category).name === 'string' &&
    typeof (obj as Category).slug === 'string' &&
    typeof (obj as Category).description === 'string' &&
    typeof (obj as Category).count === 'number'
  );
}

/**
 * Post 타입 가드
 */
export function isPost(obj: unknown): obj is Post {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    typeof (obj as Post).id === 'string' &&
    typeof (obj as Post).title === 'string' &&
    typeof (obj as Post).summary === 'string' &&
    typeof (obj as Post).content === 'string' &&
    typeof (obj as Post).category === 'string' &&
    typeof (obj as Post).date === 'string' &&
    typeof (obj as Post).slug === 'string' &&
    typeof (obj as Post).views === 'number'
  );
}

/**
 * 문자열이 비어있지 않은지 확인
 */
export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0;
}

/**
 * 유효한 날짜 문자열인지 확인
 */
export function isValidDateString(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  const date = new Date(value);
  return !isNaN(date.getTime());
}
