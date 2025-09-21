const illustrationEntries = Object.entries(
  import.meta.glob('../assets/illustrations/*.svg', { eager: true, import: 'default' })
);

const illustrationMap: Record<string, string> = Object.fromEntries(
  illustrationEntries.map(([path, mod]) => [path.split('/').pop()!, mod as string])
);

export function getIllustrationUrl(name?: string | null) {
  if (!name) return undefined;
  return illustrationMap[name] ?? undefined;
}
