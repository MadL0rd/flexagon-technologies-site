const illustrationEntries = Object.entries(
  import.meta.glob('../assets/illustrations/*.svg', { eager: true, import: 'default' })
);

const illustrationMap: Record<string, string> = Object.fromEntries(
  illustrationEntries.map(([path, mod]) => {
    const filename = path.split('/').pop()!;
    if (typeof mod === 'string') {
      return [filename, mod];
    }
    if (typeof mod === 'object' && mod && 'src' in mod) {
      return [filename, (mod as { src: string }).src];
    }
    return [filename, ''];
  })
);

export function getIllustrationUrl(name?: string | null) {
  if (!name) return undefined;
  return illustrationMap[name] ?? undefined;
}
