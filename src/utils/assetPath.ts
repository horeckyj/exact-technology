const EXTERNAL_URL_PATTERN = /^(https?:)?\/\//i;

export const resolveAssetUrl = (path: string): string => {
  if (!path || EXTERNAL_URL_PATTERN.test(path) || path.startsWith('data:')) {
    return path;
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
};
