export function placeholder(width: string, height?: string): string {
  if (!height) height = width;
  return `https://placehold.co/${width}x${height}`;
}
