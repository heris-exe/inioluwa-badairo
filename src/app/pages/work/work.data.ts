export type WorkItem = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  role?: string;
  resultPct?: number;
  thumbnailUrl?: string;
  appUrl?: string;
  githubUrl?: string;
};

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: 'spend-ng',
    title: 'Spend NG',
    blurb: 'Track daily expenses in ₦ — no Excel needed. Dashboard with totals, smart insights, and spending charts. Data syncs across devices via Supabase.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'Recharts', 'shadcn/ui'],
    role: 'Solo developer',
    thumbnailUrl: '/spend-ng-dashboard.png',
    appUrl: 'https://spendng.vercel.app/',
    githubUrl: 'https://github.com/heris-exe/Spend-NG'
  }
];
