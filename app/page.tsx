import Header from "./components/Header";
import Footer from "./components/Footer";
import PlaceholderImage from "./components/PlaceholderImage";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative bg-warm-cream py-20 lg:py-32 overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blush-pink rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-lavender rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white border border-plum-accent/20 text-plum-accent text-xs font-semibold tracking-wide mb-6 uppercase">
              Grand Rapids • Michigan
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-charcoal mb-6 leading-tight">
              A softer place for <span className="text-plum-accent italic">Grand Rapids moms</span> to connect.
            </h1>
            <p className="text-lg md:text-xl text-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover real stories, parenting support, local resources, family events, and a safe space to share your motherhood journey — with or without your name.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="btn-primary">
                Read the Blog
              </Link>
              <Link href="/community/anonymous" className="btn-secondary">
                Post Anonymously
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-charcoal/50 text-sm font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sage-green rounded-full"></span> Local Support
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sage-green rounded-full"></span> Real Conversations
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-sage-green rounded-full"></span> Moderated Community
              </span>
            </div>
          </div>
        </section>

        {/* FEATURED BLOG SECTION */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Latest Stories</h2>
                <p className="text-charcoal/60">Voices from our local community.</p>
              </div>
              <Link href="/blog" className="text-plum-accent font-medium hover:underline hidden sm:block">View all posts &rarr;</Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Post */}
              <div className="lg:col-span-2 group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden mb-6 h-64 md:h-96">
                  <PlaceholderImage alt="Mother and child in a park" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" color="bg-sage-green/20" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-plum-accent uppercase tracking-wide">
                    Parenting Tips
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-3 group-hover:text-plum-accent transition-colors">
                  5 Calming Routines for Overwhelmed Moms in West Michigan
                </h3>
                <p className="text-charcoal/70 mb-4 line-clamp-2">
                  From quiet coffee spots in Eastown to peaceful nature trails, here’s how local moms are finding moments of peace amidst the chaos.
                </p>
                <div className="flex items-center gap-3 text-sm text-charcoal/50">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <span>Sarah J.</span>
                  <span>•</span>
                  <span>Mar 15, 2026</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </div>

              {/* Secondary Posts */}
              <div className="flex flex-col gap-8">
                {[
                  { title: "Best Free Family Activities for Spring", category: "Local Guide", color: "bg-blush-pink/20" },
                  { title: "Postpartum Support: What I Wish I Knew", category: "Motherhood", color: "bg-lavender/20" },
                  { title: "Review: The New Kid-Friendly Cafe Downtown", category: "Reviews", color: "bg-warm-cream" }
                ].map((post, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer items-start">
                    <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                       <PlaceholderImage alt="Blog thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform" color={post.color} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-plum-accent uppercase mb-1 block">{post.category}</span>
                      <h4 className="font-serif text-lg text-charcoal leading-tight group-hover:text-plum-accent transition-colors mb-2">
                        {post.title}
                      </h4>
                      <span className="text-xs text-charcoal/50">3 min read</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ANONYMOUS SUPPORT SECTION */}
        <section className="py-20 bg-gradient-to-br from-lavender/10 to-blush-pink/10 relative overflow-hidden">
           <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
             <div>
               <div className="inline-block p-3 rounded-2xl bg-white shadow-sm mb-6 transform -rotate-2">
                 <span className="text-2xl">🤫</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">
                 Need support, but want privacy?
               </h2>
               <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
                 Share a question, a win, a worry, or a local ask anonymously. Every post is moderated to help protect this community. It&apos;s a safer way to get the village support you need.
               </p>
               <div className="flex flex-col sm:flex-row gap-4">
                 <Link href="/community/anonymous" className="bg-plum-accent text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg text-center">
                   Post Anonymously
                 </Link>
                 <Link href="/guidelines" className="px-8 py-4 rounded-full font-medium text-plum-accent hover:bg-white/50 transition-all text-center">
                   Read Guidelines
                 </Link>
               </div>
             </div>
             
             {/* Discussion Cards Preview */}
             <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-transparent to-transparent z-10"></div>
               
               <div className="bg-white p-6 rounded-2xl shadow-md border border-light-gray-border mb-4 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                 <div className="flex items-center justify-between mb-3">
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs">🔒</div>
                     <span className="font-bold text-charcoal text-sm">Anonymous Mama</span>
                   </div>
                   <span className="text-xs text-charcoal/40">2h ago</span>
                 </div>
                 <h4 className="font-serif text-lg mb-2">Feeling overwhelmed with two under two...</h4>
                 <p className="text-charcoal/70 text-sm mb-4">Any advice on how to manage the bedtime routine alone? My partner works late and I&apos;m struggling.</p>
                 <div className="flex gap-2">
                   <span className="px-3 py-1 bg-sage-green/10 text-sage-green rounded-full text-xs font-medium">12 Helpful</span>
                   <span className="px-3 py-1 bg-blush-pink/20 text-plum-accent rounded-full text-xs font-medium">8 Hugs</span>
                 </div>
               </div>

               <div className="bg-white p-6 rounded-2xl shadow-md border border-light-gray-border transform -rotate-1 hover:rotate-0 transition-transform duration-300 opacity-90 scale-95 origin-bottom">
                 <div className="flex items-center justify-between mb-3">
                   <div className="flex items-center gap-2">
                     <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs">🔒</div>
                     <span className="font-bold text-charcoal text-sm">Local Mama</span>
                   </div>
                   <span className="text-xs text-charcoal/40">5h ago</span>
                 </div>
                 <h4 className="font-serif text-lg mb-2">Looking for a pediatrician who listens</h4>
                 <p className="text-charcoal/70 text-sm mb-4">We just moved to Heritage Hill and need a doctor who is supportive of...</p>
               </div>
             </div>
           </div>
        </section>

        {/* LOCAL RESOURCES */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Local Resources</h2>
            <p className="text-charcoal/60 max-w-2xl mx-auto">Curated support for families in West Michigan.</p>
          </div>
          
          <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Lactation Support", count: "12 Providers", icon: "🍼" },
              { title: "Mental Wellness", count: "8 Clinics", icon: "🧠" },
              { title: "Family Activities", count: "24 Spots", icon: "🌳" },
              { title: "Childcare & Preschool", count: "15 Centers", icon: "🧸" }
            ].map((resource, i) => (
               <Link href="/resources" key={i} className="group p-6 rounded-2xl border border-light-gray-border hover:border-plum-accent hover:shadow-lg transition-all text-left bg-warm-cream/30">
                 <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{resource.icon}</div>
                 <h3 className="font-bold text-charcoal text-lg mb-1">{resource.title}</h3>
                 <p className="text-sm text-charcoal/50">{resource.count}</p>
               </Link>
            ))}
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section className="py-20 bg-warm-cream">
           <div className="container mx-auto px-4">
             <div className="flex justify-between items-center mb-10">
               <h2 className="text-3xl md:text-4xl font-serif text-charcoal">Upcoming Events</h2>
               <Link href="/events" className="text-plum-accent font-medium hover:underline">See Calendar &rarr;</Link>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: "Moms Morning Coffee", date: "Mar 18 • 10:00 AM", loc: "Madcap Coffee", price: "Free" },
                 { title: "Family Storytime in the Park", date: "Mar 20 • 2:00 PM", loc: "Wilcox Park", price: "Free" },
                 { title: "Postpartum Yoga Workshop", date: "Mar 25 • 6:30 PM", loc: "The Yoga Studio", price: "$15" }
               ].map((event, i) => (
                 <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-light-gray-border">
                   <div className="text-xs font-bold text-plum-accent uppercase mb-2">{event.date}</div>
                   <h3 className="font-serif text-xl text-charcoal mb-2">{event.title}</h3>
                   <div className="flex items-center gap-2 text-sm text-charcoal/60 mb-4">
                     <span>📍 {event.loc}</span>
                   </div>
                   <div className="flex justify-between items-center mt-4 pt-4 border-t border-light-gray-border">
                     <span className="text-xs bg-sage-green/20 text-charcoal px-2 py-1 rounded-md font-medium">{event.price}</span>
                     <button className="text-sm font-medium text-plum-accent hover:text-plum-accent/80">Details</button>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* COMMUNITY VOICES - REAL REVIEWS */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Community Voices</h2>
              <p className="text-charcoal/60">Real stories from Grand Rapids moms.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Melissa H.",
                  quote: "The Facebook group is loaded with information and I interact online with many moms daily... It’s been an amazing experience to share our joys, struggles, and advice.",
                },
                {
                  name: "Jessica B.",
                  quote: "There have been many times my fellow Moms of Multiples have been the experts, the therapy, the relatability, and the friendship that I've needed.",
                },
                {
                  name: "Katie",
                  quote: "As a stay-at-home mom, Moms of Grand Rapids has helped me stay connected with the changing world... The women are very informed about a bazillion things.",
                }
              ].map((review, i) => (
                <div key={i} className="bg-warm-cream/30 p-8 rounded-2xl border border-light-gray-border italic relative">
                   <span className="absolute top-4 right-6 text-4xl text-plum-accent/10 not-italic">&quot;</span>
                   <p className="text-charcoal/80 mb-6 leading-relaxed relative z-10">
                     {review.quote}
                   </p>
                   <div className="flex items-center gap-3 not-italic">
                     <div className="w-8 h-8 bg-plum-accent text-white rounded-full flex items-center justify-center text-xs font-bold">
                       {review.name[0]}
                     </div>
                     <span className="font-bold text-charcoal text-sm">{review.name}</span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEWSLETTER CTA */}
        <section className="py-24 bg-plum-accent text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pattern-dots"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Join the local circle.</h2>
            <p className="text-white/80 mb-8 text-lg">
              Get our weekly roundup of local family events, new blog stories, and community highlights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-full text-charcoal focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-sage-green text-charcoal font-bold px-8 py-4 rounded-full hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
            <p className="text-white/40 text-xs mt-4">We respect your privacy. Unsubscribe anytime.</p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
