'use client';

import ToolShell from '@/components/ToolShell';
import { CheckCircle } from 'lucide-react';

export default function GrammarCheckerPage() {
  const handleGrammarCheck = async (text: string) => {
    // Mocking AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return `Grammar Check Report: \n\nNo major errors found. I've made a few stylistic improvements to enhance clarity and professionalism: \n\n1. Fixed subject-verb agreement in the second paragraph. \n2. Optimized comma placement for better reading rhythm. \n3. Recommended stronger verbs in the introductory section. \n\nFinal Polished Version: \n\n${text}`;
  };

  return (
    <ToolShell
      title="Grammar Checker"
      description="Beyond simple spell check. Our AI detects complex grammatical nuances, contextual errors, and stylistic improvements to ensure your writing is flawless."
      actionLabel="Check Grammar"
      icon={<CheckCircle className="h-10 w-10 text-emerald-400" />}
      onProcess={handleGrammarCheck}
      placeholder="Paste your writing here for a deep grammatical and stylistic analysis. We catch what others miss."
    />
  );
}
