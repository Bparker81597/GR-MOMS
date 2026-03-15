import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-light-gray-border py-12 mt-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-serif text-2xl text-plum-accent mb-4">GR Moms</h3>
          <p className="text-charcoal/80 mb-4 text-sm leading-relaxed">
            A softer place for Grand Rapids moms to connect, share stories, and find support. Rooted in motherhood. Built for community.
          </p>
          <div className="flex gap-4">
             {/* Social Placeholders */}
             <div className="w-8 h-8 bg-blush-pink rounded-full flex items-center justify-center text-plum-accent text-xs">IG</div>
             <div className="w-8 h-8 bg-blush-pink rounded-full flex items-center justify-center text-plum-accent text-xs">FB</div>
             <div className="w-8 h-8 bg-blush-pink rounded-full flex items-center justify-center text-plum-accent text-xs">PT</div>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-charcoal mb-4">Community</h4>
          <ul className="space-y-2 text-sm text-charcoal/80">
            <li><Link href="/community" className="hover:text-plum-accent">Discussion Board</Link></li>
            <li><Link href="/community/anonymous" className="hover:text-plum-accent">Anonymous Posting</Link></li>
            <li><Link href="/events" className="hover:text-plum-accent">Local Events</Link></li>
            <li><Link href="/guidelines" className="hover:text-plum-accent">Community Guidelines</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-charcoal mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-charcoal/80">
            <li><Link href="/resources" className="hover:text-plum-accent">Local Support Directory</Link></li>
            <li><Link href="/blog" className="hover:text-plum-accent">Parenting Blog</Link></li>
            <li><Link href="/about" className="hover:text-plum-accent">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-plum-accent">Contact Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-charcoal mb-4">Stay Connected</h4>
          <p className="text-xs text-charcoal/60 mb-4">Get the latest local stories and event updates.</p>
          <form className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 rounded-full border border-light-gray-border flex-1 text-sm focus:outline-none focus:border-plum-accent"
            />
            <button className="bg-plum-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90">
              Join
            </button>
          </form>
          <p className="text-[10px] text-charcoal/40 mt-2">
            By joining, you agree to our Terms & Privacy Policy.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-light-gray-border text-center text-xs text-charcoal/50">
        © 2026 GR Moms. All rights reserved. Made with ♡ in Grand Rapids.
      </div>
    </footer>
  );
}
