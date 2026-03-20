import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PracticeAreaDetail } from '@/components/sections';
import { getPracticeAreaBySlug } from '@/data/practice-areas';

const practiceArea = getPracticeAreaBySlug('civil-appeals');

export const metadata: Metadata = {
  title: practiceArea?.title || 'Civil Appeals',
  description: practiceArea?.shortDescription || 'Appellate advocacy services in California courts.',
};

export default function CivilAppealsPage() {
  if (!practiceArea) {
    notFound();
  }

  return <PracticeAreaDetail practiceArea={practiceArea} />;
}
