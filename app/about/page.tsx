"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PlaceholderImage from "../components/PlaceholderImage";

export default function About() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-warm-cream py-20 border-b border-light-gray-border">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-charcoal mb-6">
              Supporting mothers of multiples in <span className="text-plum-accent italic">Grand Rapids</span>.
            </h1>
            <p className="text-lg text-charcoal/80 leading-relaxed">
              Grand Rapids Mothers of Multiples (GRMoMs) is a 501(c)(3) non-profit organization dedicated to supporting and assisting women who have, or are expecting, multiples in the Greater Grand Rapids area.
            </p>
          </div>
        </section>

        {/* MISSION & VALUES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] relative">
               <img 
                 src="/mission-photo.jpg" 
                 alt="GR Moms Community Mission" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-charcoal mb-6">Our Mission</h2>
              <p className="text-charcoal/70 mb-8 leading-relaxed">
                Our mission is to provide a supportive, fun, and empowering environment for moms through connection, encouragement, and shared experience. Whether you are expecting twins, or have school-aged triplets, we are here to walk with you through every stage of the journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                   <div className="w-12 h-12 bg-sage-green/20 rounded-2xl flex items-center justify-center shrink-0">🤝</div>
                   <div>
                     <h4 className="font-bold text-charcoal">Real Connection</h4>
                     <p className="text-sm text-charcoal/60">Moving beyond social media to build lasting local friendships.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-12 h-12 bg-lavender/20 rounded-2xl flex items-center justify-center shrink-0">💡</div>
                   <div>
                     <h4 className="font-bold text-charcoal">Shared Wisdom</h4>
                     <p className="text-sm text-charcoal/60">Access to a deep archive of advice from moms who have &quot;been there.&quot;</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-12 h-12 bg-blush-pink/20 rounded-2xl flex items-center justify-center shrink-0">🏠</div>
                   <div>
                     <h4 className="font-bold text-charcoal">Locally Rooted</h4>
                     <p className="text-sm text-charcoal/60">Focused entirely on families in the Greater Grand Rapids and West Michigan area.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS / REAL REVIEWS */}
        <section className="py-20 bg-warm-cream">
          <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">What Our Moms Say</h2>
            <p className="text-charcoal/60">Real stories from the GR Moms community.</p>
          </div>
          
          <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Melissa H.",
                quote: "The Facebook group is loaded with information and I interact online with many moms daily... It’s been an amazing experience to share our joys, struggles, and advice.",
                tag: "Member"
              },
              {
                name: "Jessica B.",
                quote: "There have been many times my fellow Moms of Multiples have been the experts, the therapy, the relatability, and the friendship that I've needed.",
                tag: "Expectant Mom"
              },
              {
                name: "Katie",
                quote: "As a stay-at-home mom, Moms of Grand Rapids has helped me stay connected with the changing world... The women are very informed about a bazillion things.",
                tag: "Member for 9 years"
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-light-gray-border flex flex-col justify-between italic">
                 <p className="text-charcoal/80 mb-6 leading-relaxed">&quot;{review.quote}&quot;</p>
                 <div className="flex items-center gap-4 not-italic">
                   <div className="w-10 h-10 bg-plum-accent/10 rounded-full flex items-center justify-center font-bold text-plum-accent">{review.name[0]}</div>
                   <div>
                     <h4 className="font-bold text-charcoal text-sm">{review.name}</h4>
                     <span className="text-xs text-charcoal/40">{review.tag}</span>
                   </div>
                 </div>
              </div>
            ))}
          </div>
        </section>

        {/* HISTORY & NON-PROFIT STATUS */}
        <section className="py-20 bg-white">
           <div className="container mx-auto px-4 max-w-4xl">
             <div className="text-center mb-12">
               <h2 className="text-3xl font-serif text-charcoal mb-6">Our Story</h2>
               <p className="text-charcoal/70 leading-relaxed mb-6">
                 Founded to serve the unique needs of mothers of multiples, GRMoMs has grown into a vital resource for West Michigan families. As a 501(c)(3) non-profit, we are committed to providing low-barrier support, including our popular semi-annual sales and community events.
               </p>
             </div>
             
             <div className="grid sm:grid-cols-3 gap-8 text-center">
                <div className="p-6 bg-warm-cream/30 rounded-2xl">
                  <div className="text-3xl font-serif text-plum-accent mb-2">501(c)(3)</div>
                  <div className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">Non-Profit Status</div>
                </div>
                <div className="p-6 bg-warm-cream/30 rounded-2xl">
                  <div className="text-3xl font-serif text-plum-accent mb-2">3rd Tuesday</div>
                  <div className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">Monthly Meetings</div>
                </div>
                <div className="p-6 bg-warm-cream/30 rounded-2xl">
                  <div className="text-3xl font-serif text-plum-accent mb-2">2x / Year</div>
                  <div className="text-xs font-bold text-charcoal/40 uppercase tracking-widest">Resale Events</div>
                </div>
             </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
