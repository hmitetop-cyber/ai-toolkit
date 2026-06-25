'use client';

import { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Copy,
  RotateCcw,
  Trash2,
  Check,
  Loader2,
  Sparkles,
  RefreshCw,
  Clock,
  ArrowRightLeft,
  FileText,
} from 'lucide-react';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';

interface ToolShellProps {
  title: string;
  description: string;
  placeholder?: string;
  actionLabel: string;
  icon: React.ReactNode;
  onProcess: (text: string) => Promise<string>;
}

export default function ToolShell({
  title,
  description,
  placeholder = 'Paste your text here...',
  actionLabel,
  icon,
  onProcess,
}: ToolShellProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const words = input.trim() === '' ? 0 : input.trim().split(/\s+/).length;
    setWordCount(words);
    setCharCount(input.length);
  }, [input]);

  const handleProcess = async () => {
    if (!input.trim()) {
      toast.error('Please enter some text first.');
      return;
    }
    setIsLoading(true);
    try {
      const result = await onProcess(input);
      setOutput(result);
      toast.success('Process completed successfully!');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    toast.info('Cleared all fields.');
  };

  return (
    <div className="py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="rounded-2xl bg-indigo-500/10 p-4 mb-6 ring-1 ring-indigo-500/20">
            {icon}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">{title}</h1>
          <p className="text-slate-400 max-w-2xl text-lg">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <label className="text-sm font-semibold text-slate-300">Input Text</label>
              <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  {wordCount} Words
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {charCount} Characters
                </span>
              </div>
            </div>
            <div className="relative group">
              <Textarea
                placeholder={placeholder}
                className="min-h-[400px] bg-white/[0.03] border-white/10 text-white placeholder:text-slate-600 focus:border-indigo-500/50 rounded-2xl resize-none p-6 text-lg leading-relaxed transition-all scrollbar-hide"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleClear}
                  className="rounded-xl bg-black/50 border-white/10 hover:bg-white/10 text-slate-400"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button
              onClick={handleProcess}
              disabled={isLoading || !input.trim()}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-6 rounded-2xl h-auto text-lg font-bold shadow-lg shadow-indigo-500/20"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>{actionLabel}</>
              )}
            </Button>
          </div>

          {/* Output Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <label className="text-sm font-semibold text-slate-300">AI Result</label>
              {output && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(output)}
                  className="text-xs text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10"
                >
                  <Copy className="mr-1 h-3 w-3" />
                  Copy Text
                </Button>
              )}
            </div>
            <div className="min-h-[400px] bg-indigo-500/[0.02] border border-white/10 rounded-2xl p-6 relative overflow-auto scrollbar-hide">
              {!output && !isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 space-y-4">
                  <Sparkles className="h-12 w-12 opacity-20" />
                  <p className="text-sm">Click "{actionLabel}" to see the magic</p>
                </div>
              )}
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-black/40 backdrop-blur-sm z-10">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full border-t-2 border-indigo-500 animate-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <RefreshCw className="h-6 w-6 text-indigo-500 animate-pulse" />
                    </div>
                  </div>
                  <p className="text-indigo-400 font-medium animate-pulse">Our AI is working...</p>
                </div>
              )}
              {output && (
                <div className="text-white text-lg leading-relaxed whitespace-pre-wrap animate-in fade-in duration-700">
                  {output}
                </div>
              )}
            </div>
            {output && (
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  className="flex-1 bg-white/[0.03] border-white/10 hover:bg-white/10 text-white py-6 rounded-2xl h-auto"
                  onClick={() => setInput(output)}
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  Use as Input
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 bg-white/[0.03] border-white/10 hover:bg-white/10 text-white py-6 rounded-2xl h-auto"
                  onClick={() => handleCopy(output)}
                >
                  <Check className="mr-2 h-4 w-4" />
                  Copy Result
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
