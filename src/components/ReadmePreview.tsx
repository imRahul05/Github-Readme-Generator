import React from 'react';
import { Code2, Copy } from 'lucide-react';

interface PreviewProps {
  markdown: string;
}

export default function ReadmePreview({ markdown }: PreviewProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(markdown);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code2 className="text-blue-400" size={20} />
          <h2 className="text-lg font-semibold text-gray-200">Preview</h2>
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
        >
          <Copy size={16} />
          <span>Copy</span>
        </button>
      </div>
      <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 p-6 overflow-auto">
        <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm">{markdown}</pre>
      </div>
    </div>
  );
}