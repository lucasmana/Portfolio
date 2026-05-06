export default function LazyImage({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      onError={(e) => {
        e.target.src = 'https://via.placeholder.com/400x225?text=Projeto';
      }}
    />
  );
}
