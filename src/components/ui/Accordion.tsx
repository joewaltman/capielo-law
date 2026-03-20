'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  allowMultiple?: boolean;
}

export default function Accordion({
  items,
  className,
  allowMultiple = false,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('divide-y divide-cream-200', className)}>
      {items.map((item) => (
        <AccordionItemComponent
          key={item.id}
          item={item}
          isOpen={openItems.includes(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
}

interface AccordionItemComponentProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItemComponent({
  item,
  isOpen,
  onToggle,
}: AccordionItemComponentProps) {
  return (
    <div className="py-4">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-start justify-between w-full text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg font-medium text-primary group-hover:text-accent-500 transition-colors pr-4">
          {item.question}
        </span>
        <span
          className={cn(
            'flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-cream-200 flex items-center justify-center transition-colors',
            isOpen && 'bg-accent text-white'
          )}
        >
          <svg
            className={cn(
              'w-4 h-4 transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
        )}
      >
        <p className="text-text-muted leading-relaxed pr-10">{item.answer}</p>
      </div>
    </div>
  );
}
