export default function PlaceholderImage({ className, alt, color = "bg-lavender" }: { className?: string, alt: string, color?: string }) {
  return (
    <div className={`flex items-center justify-center text-plum-accent opacity-50 font-medium text-sm p-4 ${color} ${className}`}>
      {alt}
    </div>
  );
}
