'use client';

import ToolShell from '@/components/ToolShell';
import { FileText } from 'lucide-react';

export default function SummarizerPage() {
  const handleSummarize = async (text: string) => {
    // Mocking AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return `Summary Highlights: \n\n• Key Point 1: The provided text discusses critical infrastructure requirements for AI development. \n• Key Point 2: Emphasis on data privacy and security protocols in processing sensitive content. \n• Key Point 3: Future outlook suggests a 40% increase in efficiency for professional writers using these tools. \n\nIn conclusion, the document advocates for the adoption of integrated AI toolkits to streamline creative workflows.`;
  };

  return (
    <ToolShell
      title="AI Summarizer"
      description="Extract the core essence of any text instantly. Perfect for long articles, research papers, and business documents that need quick understanding."
      actionLabel="Summarize Text"
      icon={<FileText className="h-10 w-10 text-indigo-400" />}
      onProcess={handleSummarize}
      placeholder="Paste long articles or documents here. Our AI will identify the most important points and provide a concise summary."
    />
  );
}
