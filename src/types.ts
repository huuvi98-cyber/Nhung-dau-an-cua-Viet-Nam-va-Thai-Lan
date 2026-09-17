export interface Milestone {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  yearHighlight?: string;
}

export interface StatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
  label: string;
  highlightText: string;
  icon: string;
  detail: string;
}

export interface Activity {
  id: string;
  timeframe: string;
  title: string;
  role: string;
  category: 'chinh-tri' | 'van-hoa' | 'giao-duc';
  description: string;
  significance: string;
}

export interface ThreeConnections {
  number: number;
  title: string;
  subtitle: string;
  detail: string;
  color: string;
  icon: string;
}

export interface CooperationPillar {
  id: string;
  category: string;
  title: string;
  icon: string;
  items: string[];
  callout?: {
    label: string;
    value: string;
    subtext: string;
  };
}
