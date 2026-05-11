export const getYoutubeId = (url: string | null | undefined): string | null => {
  if (!url || typeof url !== 'string') return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export const getYoutubeThumbnail = (url: string | null | undefined): string | null => {
  const videoId = getYoutubeId(url);
  if (videoId) {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }
  return null;
};

export const isYoutubeUrl = (url: string | null | undefined | any): boolean => {
  if (typeof url !== 'string') return false;
  return !!getYoutubeId(url);
};

export const getYoutubeEmbedUrl = (url: string | null | undefined): string | null => {
  const videoId = getYoutubeId(url);
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  }
  return null;
};
