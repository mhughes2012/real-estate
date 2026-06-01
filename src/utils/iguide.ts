const getIguideParts = (url: string | null | undefined): { baseUrl: string; id: string } | null => {
  if (!url || typeof url !== 'string') return null;
  const regExp = /^(https?:\/\/(?:[a-zA-Z0-9-]+\.)?(?:youriguide|iguidephotos|iguideradix)\.com)\/([^/?#]+)/i;
  const match = url.match(regExp);
  return match ? { baseUrl: match[1], id: match[2] } : null;
};

export const getIguideId = (url: string | null | undefined): string | null => {
  return getIguideParts(url)?.id || null;
};

export const getIguidePreviewUrl = (url: string | null | undefined): string | null => {
  const parts = getIguideParts(url);
  if (parts) {
    // The correct path for the preview image as verified via metadata
    // This redirects to the versioned preview image
    return `${parts.baseUrl}/${parts.id}/doc/page_preview.jpg`;
  }
  return null;
};

export const isIguideUrl = (url: string | null | undefined | any): boolean => {
  return !!getIguideParts(url);
};

export const getIguideEmbedUrl = (url: string | null | undefined): string | null => {
  const parts = getIguideParts(url);
  if (parts) {
    // Standard embed URL using the same domain as the original URL
    return `${parts.baseUrl}/${parts.id}/?embed=1`;
  }
  return null;
};
