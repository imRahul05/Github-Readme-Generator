import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-300 mb-1">{title}</label>
      {children}
    </div>
  );
}