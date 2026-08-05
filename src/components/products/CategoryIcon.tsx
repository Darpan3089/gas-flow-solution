import {
  Boxes,
  Filter,
  Flame,
  Gauge,
  GitBranch,
  LifeBuoy,
  Radio,
  ShieldCheck,
  ShieldX,
  SlidersHorizontal,
  Waves,
  Zap,
} from "lucide-react";
import type { IconKey } from "@/data/catalog";
import { cn } from "@/lib/cn";

/**
 * Resolves the catalog's serializable `IconKey` to a lucide component. Keeping
 * the map here — rather than component references in the data — is what lets
 * catalog objects cross the server/client boundary.
 */
const ICONS = {
  regulator: SlidersHorizontal,
  filter: Filter,
  solenoid: Zap,
  shutoff: ShieldCheck,
  relief: LifeBuoy,
  slamshut: ShieldX,
  meter: Gauge,
  station: GitBranch,
  train: Waves,
  measurement: Radio,
  accessory: Boxes,
  burner: Flame,
} as const satisfies Record<IconKey, unknown>;

interface CategoryIconProps {
  icon: IconKey;
  className?: string;
}

export function CategoryIcon({ icon, className }: CategoryIconProps) {
  const Icon = ICONS[icon];
  return <Icon className={cn("w-5 h-5", className)} aria-hidden="true" />;
}
