import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-warm-cream/90 backdrop-blur-md border-b border-light-gray-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
           <svg viewBox="0 0 200 50" className="h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25 10C19 10 15 15 15 20C15 30 25 40 25 40C25 40 35 30 35 20C35 15 31 10 25 10Z" fill="#F7D6E7" />
              <path d="M25 15C28 15 30 17 30 20C30 25 25 30 25 30C25 30 20 25 20 20C20 17 22 15 25 15Z" fill="#7B4B6A" />
              <text x="45" y="35" fontFamily="serif" fontSize="28" fontWeight="bold" fill="#2F2A2E">GR Moms</text>
            </svg>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-charcoal">
          <Link href="/" className="hover:text-plum-accent transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-plum-accent transition-colors">Blog</Link>
          <Link href="/community" className="hover:text-plum-accent transition-colors">Community</Link>
          <Link href="/resources" className="hover:text-plum-accent transition-colors">Resources</Link>
          <Link href="/events" className="hover:text-plum-accent transition-colors">Events</Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-plum-accent font-medium hover:underline">Sign In</button>
          <Link href="/community/anonymous" className="bg-plum-accent text-white px-5 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-sm flex items-center gap-2 text-sm">
            <span>✨ Post Anonymously</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-charcoal p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
