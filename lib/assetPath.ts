/**
 * Get the full asset path including the basePath when deployed to GitHub Pages
 * @param path - The asset path starting with /
 * @returns The full path with basePath prefix
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
}
