import type { CounterData }  from '../../types.ts';
import { Drill, GlobeCheck, Users } from 'lucide-react';

export const counterMetrics: CounterData[] = [
  { id: 1, icon: Drill, label: "Maintenance Projects", target: 80, suffix: "+" },
  { id: 2, icon: GlobeCheck, label: "Success Rate", target: 99, suffix: "%" },
  { id: 3, icon: Users, label: "Active Customers", target: 120, suffix: "+" }
];


// const counterMetrics: CounterData[] = [
//   { id: 1, label: "Projects Completed", target: 80, suffix: "+" },
//   { id: 2, label: "Happy Clients", target: 150 },
//   { id: 3, label: "Success Rate", target: 99, suffix: "%" },
//   { id: 4, label: "Years Experience", target: 5, duration: 1500 }
// ];