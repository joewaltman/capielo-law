import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PracticeAreaDetail } from '@/components/sections';
import { getPracticeAreaBySlug } from '@/data/practice-areas';

const practiceArea = getPracticeAreaBySlug('trust-administration-probate');

export const metadata: Metadata = {
  title: practiceArea?.title || 'Trust Administration & Probate',
  description: practiceArea?.shortDescription || 'Trust administration and probate services in California.',
};

export default function TrustAdministrationProbatePage() {
  if (!practiceArea) {
    notFound();
  }

  return <PracticeAreaDetail practiceArea={practiceArea} />;
}
