'use client';

import ToolShell from '@/components/ToolShell';
import { ArrowRightLeft } from 'lucide-react';

export default function ParaphraserPage() {
  const handleParaphrase = async (text: string) => {
    // Mocking AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return `AI Paraphrased Version: \n\nIn the realm of advanced content creation, our specialized toolkit offers unparalleled precision. By leveraging sophisticated language models, we transform your initial concepts into refined, professional narratives while preserving every nuance of your original message. \n\n${text.split('.').reverse().join('. ')}`;
  };

  return (
    <ToolShell
      title="AI Paraphraser"
      description="Rewrite your content professionally. Maintains original meaning while enhancing flow, vocabulary, and sentence structure for maximum impact."
      actionLabel="Paraphrase Now"
      icon={<ArrowRightLeft className="h-10 w-10 text-blue-400" />}
      onProcess={handleParaphrase}
      placeholder="Paste the text you want to rewrite here. Our AI will analyze the context and provide a fresh, professional version."
    />
  );
}
