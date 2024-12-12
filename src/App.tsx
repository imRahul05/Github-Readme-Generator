import React, { useCallback, useState } from 'react';
import ReadmeForm from './components/ReadmeForm';
import ReadmePreview from './components/ReadmePreview';
import { generateMarkdown } from './utils/generateMarkdown';
import { Code } from 'lucide-react';
import { FormData } from './types';
import Footer from './components/Footer'
function App() {
  const [markdown, setMarkdown] = useState('');

  const handleFormUpdate = useCallback((data: FormData) => {
    setMarkdown(generateMarkdown(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Code size={40} className="text-blue-400" />
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              GitHub README Generator By Rahul..
            </h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Create a stunning and personalized GitHub profile README with our futuristic generator.
            Fill in your details below and watch the magic happen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="sticky top-8">
              <ReadmeForm onUpdate={handleFormUpdate} />
            </div>
          </div>
          <div>
            <div className="sticky top-8">
              <ReadmePreview markdown={markdown} />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;