import { Clock } from 'lucide-react';

interface LastUpdatedProps {
  date: string;
  className?: string;
}

export default function LastUpdated({ date, className = '' }: LastUpdatedProps) {
  return (
    <div className={`flex items-center gap-1.5 text-sm text-gray-500 ${className}`}>
      <Clock className="w-3.5 h-3.5" />
      <time dateTime={date}>Last updated: {new Date(date).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })}</time>
    </div>
  );
}
