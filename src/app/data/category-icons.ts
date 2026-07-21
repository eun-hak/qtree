import {
  Flame,
  Bone,
  Moon,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

/** 카테고리 slug → 라인 아이콘 (홈·헤더·풋터·카테고리 페이지 공통) */
export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  inflammation: Flame,
  pain: Bone,
  recovery: Moon,
};

/** 매핑이 없을 때 쓰는 기본 아이콘 */
export function categoryIcon(slug: string): LucideIcon {
  return CATEGORY_ICONS[slug] ?? Stethoscope;
}
