import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const docsDirectory = path.join(process.cwd(), 'docs');
const buildPathsFile = path.join(process.cwd(), 'data', 'buildPaths.json');

export interface DocumentMetadata {
  title: string;
  description: string;
  tableType: string;
  date: string;
}

export interface Document {
  slug: string;
  metadata: DocumentMetadata;
  content: string;
}

export interface GroupedDocuments {
  [tableType: string]: Document[];
}

/**
 * Get all document slugs from the docs directory
 */
export function getDocumentSlugs(): string[] {
  if (!fs.existsSync(docsDirectory)) {
    return [];
  }

  const files = fs.readdirSync(docsDirectory);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}

/**
 * Get a single document by slug
 */
export function getDocumentBySlug(slug: string): Document | null {
  try {
    const fullPath = path.join(docsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      metadata: {
        title: data.title || 'Untitled',
        description: data.description || '',
        tableType: data.tableType || 'General',
        date: typeof data.date === 'string' ? data.date : (data.date ? data.date.toString() : ''),
      },
      content,
    };
  } catch (error) {
    console.error(`Error reading document ${slug}:`, error);
    return null;
  }
}

/**
 * Get all documents
 */
export function getAllDocuments(): Document[] {
  const slugs = getDocumentSlugs();
  const documents = slugs
    .map(slug => getDocumentBySlug(slug))
    .filter((doc): doc is Document => doc !== null)
    .sort((a, b) => {
      // Sort by date descending (newest first)
      if (a.metadata.date && b.metadata.date) {
        return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
      }
      return 0;
    });

  return documents;
}

/**
 * Group documents by table type
 */
export function getDocumentsByTableType(): GroupedDocuments {
  const documents = getAllDocuments();
  const grouped: GroupedDocuments = {};

  documents.forEach(doc => {
    const tableType = doc.metadata.tableType;
    if (!grouped[tableType]) {
      grouped[tableType] = [];
    }
    grouped[tableType].push(doc);
  });

  return grouped;
}

/**
 * Get all unique table types
 */
export function getAllTableTypes(): string[] {
  const documents = getAllDocuments();
  const tableTypes = new Set<string>();

  documents.forEach(doc => {
    tableTypes.add(doc.metadata.tableType);
  });

  return Array.from(tableTypes).sort();
}

/**
 * Search documents by query
 */
export function searchDocuments(query: string): Document[] {
  const documents = getAllDocuments();
  const lowerQuery = query.toLowerCase();

  return documents.filter(doc => {
    const titleMatch = doc.metadata.title.toLowerCase().includes(lowerQuery);
    const descriptionMatch = doc.metadata.description.toLowerCase().includes(lowerQuery);
    const contentMatch = doc.content.toLowerCase().includes(lowerQuery);
    const tableTypeMatch = doc.metadata.tableType.toLowerCase().includes(lowerQuery);

    return titleMatch || descriptionMatch || contentMatch || tableTypeMatch;
  });
}

/**
 * Build Path interfaces
 */
export interface BuildPathStep {
  stepNumber: number;
  title: string;
  documentSlug: string;
  description: string;
}

export interface BuildPath {
  id: string;
  title: string;
  description: string;
  tableType: string;
  steps: BuildPathStep[];
}

export interface BuildPathsData {
  buildPaths: BuildPath[];
}

/**
 * Get all build paths
 */
export function getAllBuildPaths(): BuildPath[] {
  try {
    if (!fs.existsSync(buildPathsFile)) {
      return [];
    }

    const fileContents = fs.readFileSync(buildPathsFile, 'utf8');
    const data: BuildPathsData = JSON.parse(fileContents);
    return data.buildPaths || [];
  } catch (error) {
    console.error('Error reading build paths:', error);
    return [];
  }
}

/**
 * Get a single build path by ID
 */
export function getBuildPathById(id: string): BuildPath | null {
  const buildPaths = getAllBuildPaths();
  return buildPaths.find(path => path.id === id) || null;
}

/**
 * Get build paths for a specific table type
 */
export function getBuildPathsByTableType(tableType: string): BuildPath[] {
  const buildPaths = getAllBuildPaths();
  return buildPaths.filter(path => path.tableType === tableType);
}
