import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Dune Weaver</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="min-h-screen pt-16 bg-sand-900">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-sand-200 mb-4">
              About Dune Weaver
            </h1>
            <p className="text-xl text-sand-200">
              Creating mesmerizing art through technology and sand
            </p>
          </div>

          {/* What is Dune Weaver */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-sand-50 mb-6">What is Dune Weaver?</h2>
            <div className="prose prose-lg max-w-none text-sand-200 space-y-4">
              <p>
                Dune Weaver is a web-controlled kinetic sand table that creates mesmerizing patterns
                in sand using a steel ball guided by magnets beneath the surface. It's a motorized
                sand table that creates stunning, intricate patterns in sand using a steel ball
                guided by hidden magnets, powered by an Arduino and a CNC shield.
              </p>
              <p>
                The project seamlessly integrates hardware control with a modern web interface,
                featuring real-time pattern execution, playlist management, and synchronized
                lighting effects. With the Arduino connected to a Raspberry Pi or computer,
                you can control the table via a web interface, selecting patterns, uploading
                custom designs, or previewing the ball's motion.
              </p>
            </div>
          </section>

          {/* Design Philosophy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-sand-50 mb-6">Design Philosophy</h2>
            <div className="space-y-6 text-sand-200">
              <p className="text-lg leading-relaxed">
                I wanted this version to nail a few key things:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-sand-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-sand-50 mb-2">
                    Printability First
                  </h3>
                  <p>
                    If it could be 3D printed, it should be. No relying on specialty hardware
                    like timing belts or linear rails when a clever printed solution works better.
                  </p>
                </div>

                <div className="border-l-4 border-sand-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-sand-50 mb-2">
                    Use What's Already Out There
                  </h3>
                  <p>
                    Building around an IKEA BLANDA bowl means you're not hunting down obscure
                    parts or spending a fortune on custom components.
                  </p>
                </div>

                <div className="border-l-4 border-sand-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-sand-50 mb-2">
                    Pass the Living Room Test
                  </h3>
                  <p>
                    If it looks like a science experiment, it's staying in the garage.
                  </p>
                </div>

                <div className="border-l-4 border-sand-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-sand-50 mb-2">
                    Keep the Cost Reasonable
                  </h3>
                  <p>
                    Commercial options start at $130, use cheap motors, and go way up from there.
                    This whole build comes in around $100-$150 (cheaper if you have a lot of
                    parts on hand or build in bulk).
                  </p>
                </div>

                <div className="border-l-4 border-sand-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-sand-50 mb-2">
                    Silence is Golden
                  </h3>
                  <p>
                    Spent a lot of iteration on making this whisper-quiet. If you build the
                    NEMA 17 version, you won't even know that it's running.
                  </p>
                </div>

                <div className="border-l-4 border-sand-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-sand-50 mb-2">
                    Build on What Worked
                  </h3>
                  <p>
                    Took everything I learned from previous Dune Weavers and refined the mechanics,
                    electronics integration, and added tons of software features.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Experience */}
          <section className="mb-16 bg-gradient-to-br from-sand-900 to-sand-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-sand-50 mb-6">The Experience</h2>
            <div className="text-sand-200 space-y-4">
              <p className="text-lg">
                This isn't just a print-and-forget project. It becomes a presence in your space.
                People stop by your desk at work asking about it. Kids are transfixed. You'll
                find yourself spacing out while watching new patterns emerge. It's genuinely
                meditative—and makes an unforgettable gift.
              </p>
            </div>
          </section>

          {/* Why Build Instead of Buying */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-sand-50 mb-6">Why Build Instead of Buying?</h2>
            <div className="bg-sand-900 border-2 border-sand-700 rounded-lg p-8">
              <div className="text-sand-200 space-y-4">
                <p className="text-lg">
                  When you build the Dune Weaver, you get the satisfaction of creating something
                  with your own hands. You understand exactly how it works (so you can fix or
                  modify anything), and you're building on an open platform that you truly own.
                </p>
                <p>
                  <strong className="text-sand-200">No cloud dependencies. No subscription fees.
                  No planned obsolescence.</strong>
                </p>
                <p>
                  Plus, the build itself is genuinely enjoyable—there's something special about
                  watching it come to life piece by piece.
                </p>
              </div>
            </div>
          </section>

          {/* About the Creator */}
          <section className="mb-16 bg-gradient-to-br from-sand-900 to-sand-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-sand-50 mb-6">Meet the Creator</h2>
            <div className="space-y-4 text-sand-200">
              <p className="text-lg">
                <span className="font-semibold text-sand-200">Tuan Nguyen</span> is a data
                professional with a passion for STEM and making. As the creator of Dune Weaver,
                Tuan has combined his technical expertise with creative vision to bring this
                mesmerizing kinetic art project to the maker community.
              </p>
              <p>
                Tuan's work on Dune Weaver has gained recognition across the maker community,
                with features in publications like Tom's Hardware. His commitment to making
                advanced kinetic art accessible to everyone is evident in the project's
                open-source nature and focus on affordability.
              </p>
              <p>
                Through careful design and engineering, Tuan has created what is arguably the
                most 3D-printing-friendly kinetic sand table available, making it possible
                for makers worldwide to create their own mesmerizing sand art installations
                at a fraction of the cost of commercial alternatives.
              </p>
              <div className="mt-6 pt-6 border-t border-sand-700">
                <p className="text-sm text-sand-200">
                  Connect with Tuan and the Dune Weaver community on{' '}
                  <a href="https://github.com/tuanchris" className="text-sand-300 hover:text-sand-200 underline">
                    GitHub
                  </a>
                  ,{' '}
                  <a href="https://makerworld.com/en/@tuanchris" className="text-sand-300 hover:text-sand-200 underline">
                    MakerWorld
                  </a>
                  , and{' '}
                  <a href="https://www.patreon.com/DuneWeaver" className="text-sand-300 hover:text-sand-200 underline">
                    Patreon
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Dune Weaver */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-sand-50 mb-6">Why Choose Dune Weaver?</h2>
            <div className="bg-sand-900 border-2 border-sand-700 rounded-lg p-8">
              <ul className="space-y-4 text-sand-200">
                <li className="flex items-start">
                  <span className="text-sand-300 mr-3 text-xl">✓</span>
                  <span><strong>Affordable:</strong> Build your own for a fraction of the cost of commercial alternatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand-300 mr-3 text-xl">✓</span>
                  <span><strong>Open Source:</strong> Full access to designs, code, and community support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand-300 mr-3 text-xl">✓</span>
                  <span><strong>Customizable:</strong> Modify and personalize your build to suit your preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand-300 mr-3 text-xl">✓</span>
                  <span><strong>Educational:</strong> Learn about electronics, programming, and mechanical design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sand-300 mr-3 text-xl">✓</span>
                  <span><strong>Community Driven:</strong> Active Discord community for support and inspiration</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-sand-800 to-sand-700 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-sand-50 mb-4">
                Ready to Build Your Own?
              </h2>
              <p className="text-sand-200 mb-6">
                Explore the different versions and find the perfect Dune Weaver for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#products"
                  className="inline-flex items-center justify-center px-6 py-3 bg-sand-600 text-white font-semibold rounded-lg hover:bg-sand-700 transition-colors"
                >
                  View Products
                </a>
                <a
                  href="/#community"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-sand-300 font-semibold rounded-lg border-2 border-sand-500 hover:bg-sand-900 transition-colors"
                >
                  Join Community
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
