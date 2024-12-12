import { FormData } from '../types';
import { markdownTemplates } from './templates';

export function generateMarkdown(data: FormData): string {
  const {
    name,
    bio,
    profilePicture,
    languages,
    projects,
    social,
    stats,
    achievements,
    funFact,
  } = data;

  const githubUsername = social.github?.split('/').pop() || '';

  let markdown = '';

  // Header
  markdown += markdownTemplates.header(name, bio, profilePicture);

  // Languages
  if (languages.length > 0) {
    markdown += markdownTemplates.languages(languages);
  }

  // Projects
  if (projects.length > 0) {
    markdown += markdownTemplates.projects(projects);
  }

  // Social Links
  markdown += markdownTemplates.social(social);

  // GitHub Stats
  if (stats && githubUsername) {
    markdown += markdownTemplates.stats(githubUsername);
  }

  // Achievements
  if (achievements.length > 0) {
    markdown += markdownTemplates.achievements(achievements);
  }

  // Fun Fact
  if (funFact) {
    markdown += markdownTemplates.funFact(funFact);
  }

  return markdown.trim();
}