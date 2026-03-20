import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PracticeAreaDetail } from '@/components/sections';
import { getPracticeAreaBySlug } from '@/data/practice-areas';

const practiceArea = getPracticeAreaBySlug('civil-litigation');

export const metadata: Metadata = {
  title: practiceArea?.title || 'Civil Litigation',
  description: practiceArea?.shortDescription || 'Civil litigation services in California.',
};

export default function CivilLitigationPage() {
  if (!practiceArea) {
    notFound();
  }

  return <PracticeAreaDetail practiceArea={practiceArea} />;
}
