#!/usr/bin/env node

import fs from 'node:fs/promises';

const README_FILE_NAME = new URL('../README.md', import.meta.url);

async function updateReadmeWithContributors() {
  try {
    const readme = await fs.open(README_FILE_NAME, 'r+');
    try {
      const readme = await readme.readFile();
      const contributors = await getContributors();

      if (contributors.length === 0) {
        console.log('Empty response from githubcontrib. GitHub’s rate limit?');
        return;
      }

      const updatedReadmeContent = insertContributors(readme, contributors);
      await readme.write(updatedReadmeContent, 0, 'utf-8');
    } finally {
      await readme.close();
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

function insertContributors(readmeContent, contributors) {
  const startTag = '<!--contributors-->\n';
  const endTag = '<!--/contributors-->';
  const startIndex = readmeContent.indexOf(startTag) + startTag.length;
  const endIndex = readmeContent.indexOf(endTag);

  return readmeContent.slice(0, startIndex) +
    contributors +
    readmeContent.slice(endIndex);
}

updateReadmeWithContributors();
