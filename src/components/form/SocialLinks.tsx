import React from 'react';
import { Github, Twitter, Linkedin, Globe } from 'lucide-react';
import { SocialLinks as SocialLinksType } from '../../types';
import { InputField } from './InputField';

interface SocialLinksProps {
  social: SocialLinksType;
  onChange: (social: SocialLinksType) => void;
}

export function SocialLinks({ social, onChange }: SocialLinksProps) {
  const updateSocial = (field: keyof SocialLinksType, value: string) => {
    onChange({ ...social, [field]: value });
  };

  return (
    <div className="space-y-2">
      <InputField
        icon={<Github size={20} />}
        type="url"
        placeholder="GitHub profile"
        value={social.github}
        onChange={(e) => updateSocial('github', e.target.value)}
      />
      <InputField
        icon={<Twitter size={20} />}
        type="url"
        placeholder="Twitter profile"
        value={social.twitter}
        onChange={(e) => updateSocial('twitter', e.target.value)}
      />
      <InputField
        icon={<Linkedin size={20} />}
        type="url"
        placeholder="LinkedIn profile"
        value={social.linkedin}
        onChange={(e) => updateSocial('linkedin', e.target.value)}
      />
      <InputField
        icon={<Globe size={20} />}
        type="url"
        placeholder="Personal website"
        value={social.website}
        onChange={(e) => updateSocial('website', e.target.value)}
      />
    </div>
  );
}