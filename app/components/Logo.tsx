export default function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Heart/Pin Icon */}
      <path d="M30 10C24 10 20 15 20 20C20 30 30 40 30 40C30 40 40 30 40 20C40 15 36 10 30 10Z" fill="#F7D6E7" />
      <path d="M30 15C33 15 35 17 35 20C35 25 30 30 30 30C30 30 25 25 25 20C25 17 27 15 30 15Z" fill="#7B4B6A" />
      
      {/* Text */}
      <text x="50" y="38" fontFamily="DM Serif Display, serif" fontSize="32" fill="#2F2A2E">GR Moms</text>
    </svg>
  );
}
