import {
  ClipboardCheck,
  Factory,
  GraduationCap,
  HardHat,
  PencilRuler,
  PackageCheck,
  RefreshCw,
  Wrench,
  CalendarClock,
} from "lucide-react";
import type { ProfileIconKey } from "@/data/profile";
import { cn } from "@/lib/cn";

/**
 * Resolves the profile data's serializable `ProfileIconKey` to a lucide
 * component — the same split as `CategoryIcon` does for the catalog, and for
 * the same reason: keeping component references out of `@/data/profile` is what
 * lets those objects cross the server/client boundary.
 */
const ICONS = {
  design: PencilRuler,
  manufacturing: Factory,
  supply: PackageCheck,
  commissioning: HardHat,
  calibration: ClipboardCheck,
  amc: CalendarClock,
  maintenance: Wrench,
  training: GraduationCap,
  upgrade: RefreshCw,
} as const satisfies Record<ProfileIconKey, unknown>;

interface ProfileIconProps {
  icon: ProfileIconKey;
  className?: string;
}

export function ProfileIcon({ icon, className }: ProfileIconProps) {
  const Icon = ICONS[icon];
  return <Icon className={cn("w-5 h-5", className)} aria-hidden="true" />;
}
