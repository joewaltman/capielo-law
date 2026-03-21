import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PracticeAreaDetail } from '@/components/sections';
import { getPracticeAreaBySlug } from '@/data/practice-areas';

const practiceArea = getPracticeAreaBySlug('elder-law-litigation');

export const metadata: Metadata = {
  title: practiceArea?.title || 'Elder Law Litigation',
  description: practiceArea?.shortDescription || 'Elder abuse and exploitation litigation services in California.',
};

export default function ElderLawLitigationPage() {
  if (!practiceArea) {
    notFound();
  }

  return <PracticeAreaDetail practiceArea={practiceArea} />;
}
