import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PracticeAreaDetail } from '@/components/sections';
import { getPracticeAreaBySlug } from '@/data/practice-areas';

const practiceArea = getPracticeAreaBySlug('trust-estate-planning');

export const metadata: Metadata = {
  title: practiceArea?.title || 'Trust & Estate Planning',
  description: practiceArea?.shortDescription || 'Comprehensive estate planning services in California.',
};

export default function TrustEstatePlanningPage() {
  if (!practiceArea) {
    notFound();
  }

  return <PracticeAreaDetail practiceArea={practiceArea} />;
}
