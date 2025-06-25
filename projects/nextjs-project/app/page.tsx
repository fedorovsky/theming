import { PigmentCard } from '@fedorovskyi/ui-kit';
import { ThemeSwitcher } from '@/app/_components/theme-switcher';

export default function Home() {
  return (
    <div>
      <ThemeSwitcher />
      <PigmentCard />
    </div>
  );
}
