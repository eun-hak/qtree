import {
  CookingPot,
  ShowerHead,
  Shirt,
  Plug,
  Sofa,
  FlaskConical,
  Tag,
  type LucideIcon,
} from "lucide-react";

/** 카테고리 slug → 라인 아이콘 (홈·헤더·풋터·카테고리 페이지 공통) */
export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  kitchen: CookingPot,
  bathroom: ShowerHead,
  laundry: Shirt,
  appliance: Plug,
  living: Sofa,
  safety: FlaskConical,
};

/** 매핑이 없을 때 쓰는 기본 아이콘 */
export function categoryIcon(slug: string): LucideIcon {
  return CATEGORY_ICONS[slug] ?? Tag;
}
