const basePath = process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES 
  ? '/ada-rodriguez' 
  : '';

export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${basePath}/${cleanPath}`;
}

export { basePath };