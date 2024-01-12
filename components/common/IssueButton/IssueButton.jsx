import Link from 'next/link';
import { useContext } from 'react';
import AppContext from '../../../AppContext';
import { useRouter } from 'next/router';

export default function IssueButton() {
  const { theme } = useContext(AppContext);
  const router = useRouter();

  if (router.pathname === '/issues') return null;

  return (
    <Link href="/issues">
      <a
        className={`${
          theme === 'dark' ? 'bg-[#2f3a83]' : 'bg-brand300'
        } font-medium p-2 text-white100 px-6 rounded-l-full rounded-t-full drop-shadow-xl fixed bottom-4 right-4 z-[10000000] flex items-center gap-x-3`}
      >
        🤔 Facing an issue?
      </a>
    </Link>
  );
}
