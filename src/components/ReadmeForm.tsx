import React, { useState, useEffect } from 'react';
import { FormData } from '../types';
import { FormSection } from './form/FormSection';
import { InputField } from './form/InputField';
import { ProjectForm } from './form/ProjectForm';
import { SocialLinks } from './form/SocialLinks';
import { Trophy } from 'lucide-react';

const initialFormData: FormData = {
  name: '',
  bio: '',
  profilePicture: '',
  languages: [],
  projects: [],
  skills: [],
  social: {
    github: '',
    twitter: '',
    linkedin: '',
    website: '',
  },
  funFact: '',
  stats: false,
  achievements: [],
};

export default function ReadmeForm({ onUpdate }: { onUpdate: (data: FormData) => void }) {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // Use useEffect to notify parent of form data changes
  useEffect(() => {
    onUpdate(formData);
  }, [formData, onUpdate]);

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLanguageAdd = (value: string) => {
    if (value.trim()) {
      handleChange('languages', [...formData.languages, value.trim()]);
    }
  };

  const handleLanguageRemove = (index: number) => {
    handleChange('languages', formData.languages.filter((_, i) => i !== index));
  };

  const addAchievement = () => {
    handleChange('achievements', [
      ...formData.achievements,
      { icon: '🏆', title: '', description: '' },
    ]);
  };

  const updateAchievement = (index: number, field: keyof Achievement, value: string) => {
    const newAchievements = [...formData.achievements];
    newAchievements[index] = { ...newAchievements[index], [field]: value };
    handleChange('achievements', newAchievements);
  };

  return (
    <div className="space-y-6 p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800">
      <div className="space-y-4">
        <FormSection title="Basic Information">
          <InputField
            placeholder="Your name"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
          />
          <textarea
            placeholder="Write a short bio"
            value={formData.bio}
            onChange={(e) => handleChange('bio', e.target.value)}
            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={3}
          />
          <InputField
            type="url"
            placeholder="Profile picture URL"
            value={formData.profilePicture}
            onChange={(e) => handleChange('profilePicture', e.target.value)}
          />
        </FormSection>

        <FormSection title="Languages & Skills">
          <InputField
            placeholder="Add languages (comma-separated)"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleLanguageAdd(e.currentTarget.value);
                e.currentTarget.value = '';
              }
            }}
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {formData.languages.map((lang, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm flex items-center gap-2"
              >
                {lang}
                <button
                  onClick={() => handleLanguageRemove(index)}
                  className="hover:text-blue-300"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </FormSection>

        <FormSection title="Projects">
          <ProjectForm
            projects={formData.projects}
            onChange={(projects) => handleChange('projects', projects)}
          />
        </FormSection>

        <FormSection title="Social Links">
          <SocialLinks
            social={formData.social}
            onChange={(social) => handleChange('social', social)}
          />
        </FormSection>

        <FormSection title="GitHub Stats">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.stats}
              onChange={(e) => handleChange('stats', e.target.checked)}
              className="rounded border-gray-700 bg-gray-800/50 text-blue-500 focus:ring-blue-500"
            />
            <span className="text-gray-300">Include GitHub statistics</span>
          </label>
        </FormSection>

        <FormSection title="Achievements">
          <button
            onClick={addAchievement}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
          >
            <Trophy size={16} />
            <span>Add Achievement</span>
          </button>
          <div className="space-y-4 mt-4">
            {formData.achievements.map((achievement, index) => (
              <div key={index} className="p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                <div className="space-y-2">
                  <InputField
                    placeholder="Achievement title"
                    value={achievement.title}
                    onChange={(e) => updateAchievement(index, 'title', e.target.value)}
                  />
                  <textarea
                    placeholder="Achievement description"
                    value={achievement.description}
                    onChange={(e) => updateAchievement(index, 'description', e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-100"
                    rows={2}
                  />
                </div>
              </div>
            ))}
          </div>
        </FormSection>

        <FormSection title="Fun Fact">
          <textarea
            value={formData.funFact}
            onChange={(e) => handleChange('funFact', e.target.value)}
            className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-gray-100"
            rows={2}
          />
        </FormSection>
      </div>
    </div>
  );
}