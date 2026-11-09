import {
  Target,
  TrendingUp,
  Settings,
  BarChart3,
  Cpu,
  Globe,
  Rocket,
  CalendarCheck,
  Building2,
  Factory,
  ShoppingCart,
  Code,
  GraduationCap,
  Truck,
  Briefcase,
  Network,
  Landmark,
  CheckCircle,
  MessageSquare,
  Handshake,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Clock,
  Calendar,
  Send,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Users,
  Lightbulb,
  FileText,
  Quote,
  Shield,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';

import type { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<{ className?: string; size?: number | string }>> = {
  Target,
  TrendingUp,
  Settings,
  BarChart3,
  Cpu,
  Globe,
  Rocket,
  CalendarCheck,
  Building2,
  Factory,
  ShoppingCart,
  Code,
  GraduationCap,
  Truck,
  Briefcase,
  Network,
  Landmark,
  CheckCircle,
  MessageSquare,
  Handshake,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Clock,
  Calendar,
  Send,
  AlertCircle,
  CheckCircle2,
  Sparkles,
  Users,
  Lightbulb,
  FileText,
  Quote,
  Shield,
  ExternalLink,
  MessageCircle,
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.176.2-.351.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.678-1.632-.929-2.235-.245-.588-.494-.508-.678-.518-.176-.009-.376-.011-.577-.011-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.51 0 1.48 1.079 2.909 1.23 3.11.15.2 2.124 3.243 5.145 4.548.719.311 1.28.497 1.718.636.722.23 1.378.198 1.897.12.578-.087 1.78-.727 2.031-1.43.251-.703.251-1.306.176-1.43-.075-.124-.276-.2-.577-.35zM12.04 2C6.518 2 2.03 6.488 2.03 12.01c0 1.98.583 3.824 1.589 5.378L2.003 22l4.78-1.57A9.97 9.97 0 0012.04 22c5.522 0 10.01-4.488 10.01-10.01C22.05 6.488 17.562 2 12.04 2zm0 18.232c-1.637 0-3.155-.49-4.43-1.328l-.317-.208-3.284 1.078 1.096-3.203-.227-.333A8.17 8.17 0 013.82 12.01c0-4.53 3.69-8.217 8.22-8.217 4.53 0 8.22 3.687 8.22 8.217 0 4.53-3.69 8.232-8.22 8.232z" />
    </svg>
  );
}

iconMap.WhatsApp = WhatsAppIcon;
iconMap.whatsapp = WhatsAppIcon;

export function Icon({
  name,
  className = 'w-6 h-6',
}: {
  name: string;
  className?: string;
}) {
  const Cmp = iconMap[name] ?? Target;
  return <Cmp className={className} />;
}
