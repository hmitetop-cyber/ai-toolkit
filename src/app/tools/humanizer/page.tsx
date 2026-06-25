'use client';

import ToolShell from '@/components/ToolShell';
import { Sparkles } from 'lucide-react';

export default function HumanizerPage() {
  const handleHumanize = async (text: string) => {
    // Mocking AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return `Humanized Version: \n\nI've been thinking about how we can make AI content sound more natural. Honestly, the key is in the rhythm and the little imperfections that make writing feel authentic. Here's a version of your text that feels a lot more personal and less like it was spit out by a machine: \n\n${text.replace(/AI/g, 'our technology').replace(/tool/g, 'companion')}`;
  };

  return (
    <ToolShell
      title="AI Humanizer"
      description="Make AI-generated content sound human. Our tool adds natural rhythm, varied sentence lengths, and contextual nuances to make text truly authentic."
      actionLabel="Humanize Text"
      icon={<Sparkles className="h-10 w-10 text-purple-400" />}
      onProcess={handleHumanize}
      placeholder="Paste AI-generated text here. We'll adjust the tone and structure to make it indistinguishable from human writing."
    />
  );
}
