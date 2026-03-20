import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PracticeAreaDetail } from '@/components/sections';
import { getPracticeAreaBySlug } from '@/data/practice-areas';

const practiceArea = getPracticeAreaBySlug('trust-estate-litigation');

export const metadata: Metadata = {
  title: practiceArea?.title || 'Trust & Estate Litigation',
  description: practiceArea?.shortDescription || 'Trust and estate litigation services in California.',
};

export default function TrustEstateLitigationPage() {
  if (!practiceArea) {
    notFound();
  }

  return <PracticeAreaDetail practiceArea={practiceArea} />;
}
