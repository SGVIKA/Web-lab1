import type { IPicture } from "./picture.interface";

export function Picture({ srcUrl, webpUrl, alt, className }: IPicture) {
  return (
    <picture className={className}>
      <source srcSet={webpUrl} type="image/webp" />
      <img src={srcUrl} alt={alt} />
    </picture>
  );
}
