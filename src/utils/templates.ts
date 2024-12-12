export const markdownTemplates = {
  header: (name: string, bio: string, profilePicture?: string) => `
<div align="center">

${profilePicture ? `<img src="${profilePicture}" alt="Profile" width="200" height="200" style="border-radius: 50%;" />\n` : ''}
# Hi 👋, I'm ${name}

${bio}
</div>
`,

  languages: (languages: string[]) => `
## 🚀 Languages and Tools

${languages.map(lang => `- ${lang}`).join('\n')}
`,

  projects: (projects: any[]) => `
## 💻 Featured Projects

${projects.map(project => `
### [${project.name}](${project.repo})
${project.description}
${project.tech.length ? `\n**Tech Stack:** ${project.tech.join(', ')}` : ''}
`).join('\n')}
`,

  social: (social: any) => `
## 🌐 Connect with me

${social.github ? `[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](${social.github})` : ''}${social.twitter ? ` [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](${social.twitter})` : ''}${social.linkedin ? ` [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](${social.linkedin})` : ''}${social.website ? ` [![Website](https://img.shields.io/badge/Website-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)](${social.website})` : ''}
`,

  stats: (githubUsername: string) => `
## 📊 GitHub Stats

![](https://github-readme-stats.vercel.app/api?username=${githubUsername}&theme=dark&hide_border=false&include_all_commits=true&count_private=true)
![](https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark&hide_border=false)
![](https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact)
`,

  achievements: (achievements: any[]) => `
## 🏆 Achievements

${achievements.map(achievement => `
### ${achievement.icon} ${achievement.title}
${achievement.description}
`).join('\n')}
`,

  funFact: (fact: string) => `
## ⚡ Fun fact

${fact}
`
};