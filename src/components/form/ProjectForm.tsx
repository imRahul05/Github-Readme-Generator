import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { Project } from '../../types';
import { InputField } from './InputField';

interface ProjectFormProps {
  projects: Project[];
  onChange: (projects: Project[]) => void;
}

export function ProjectForm({ projects, onChange }: ProjectFormProps) {
  const addProject = () => {
    onChange([...projects, { name: '', description: '', repo: '', tech: [] }]);
  };

  const removeProject = (index: number) => {
    onChange(projects.filter((_, i) => i !== index));
  };

  const updateProject = (index: number, field: keyof Project, value: string) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], [field]: value };
    onChange(newProjects);
  };

  const updateTech = (index: number, value: string) => {
    const newProjects = [...projects];
    newProjects[index] = { 
      ...newProjects[index], 
      tech: value.split(',').map(t => t.trim()).filter(Boolean) 
    };
    onChange(newProjects);
  };

  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <div key={index} className="relative p-4 bg-gray-800/30 rounded-lg border border-gray-700">
          <button
            onClick={() => removeProject(index)}
            className="absolute top-2 right-2 text-gray-500 hover:text-red-400"
          >
            <Trash2 size={16} />
          </button>
          <div className="space-y-2">
            <InputField
              placeholder="Project name"
              value={project.name}
              onChange={(e) => updateProject(index, 'name', e.target.value)}
            />
            <InputField
              placeholder="Description"
              value={project.description}
              onChange={(e) => updateProject(index, 'description', e.target.value)}
            />
            <InputField
              type="url"
              placeholder="Repository URL"
              value={project.repo}
              onChange={(e) => updateProject(index, 'repo', e.target.value)}
            />
            <InputField
              placeholder="Technologies (comma-separated)"
              value={project.tech.join(', ')}
              onChange={(e) => updateTech(index, e.target.value)}
            />
          </div>
        </div>
      ))}
      <button
        onClick={addProject}
        className="w-full py-2 border-2 border-dashed border-gray-700 rounded-lg text-gray-400 hover:text-gray-300 hover:border-gray-600 transition-colors"
      >
        <Plus className="inline-block mr-2" size={16} /> Add Project
      </button>
    </div>
  );
}