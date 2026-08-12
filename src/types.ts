import type { LucideIcon } from 'lucide-react';

export interface CarouselType {
  carouselImage: string;
  serviceType: string;
  service: string;
  alt: string;
}

export interface CounterData {
  id: number;
  icon: LucideIcon;
  label: string;
  target: number;
  suffix?: string;
  duration?: number;
}

export interface PricingData {
  id: number;
  label: string;
  target: number;
  suffix?: string;
  duration?: number;
}

// 1. Define the interface for the props
export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}