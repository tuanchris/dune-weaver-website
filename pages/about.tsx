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

      <main className="min-h-screen pt-16">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
              About Dune Weaver
            </h1>
            <p className="text-xl text-gray-600">
              Creating mesmerizing art through technology and sand
            </p>
          </div>

          {/* What is Dune Weaver */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Dune Weaver?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
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

          {/* Key Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">
                  Web Control Interface
                </h3>
                <p className="text-gray-700">
                  Control your table remotely with an intuitive web interface for
                  pattern selection, custom designs, and real-time previews.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">
                  3D Printing Friendly
                </h3>
                <p className="text-gray-700">
                  Designed from the ground up to be the most 3D-printing-friendly
                  kinetic sand table on the internet.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">
                  Multiple Versions
                </h3>
                <p className="text-gray-700">
                  Choose from Mini ($27), Standard ($100-150), or Pro versions
                  to fit your budget and space requirements.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-900 mb-3">
                  Open Source
                </h3>
                <p className="text-gray-700">
                  Fully open-source project with active community support,
                  available on GitHub and MakerWorld.
                </p>
              </div>
            </div>
          </section>

          {/* Versions */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Versions</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-amber-600 pl-6 py-2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Dune Weaver Original
                </h3>
                <p className="text-gray-700">
                  The original model measuring 420mm in diameter and 136mm in height.
                  Perfect for those who want a substantial presence on their desk or shelf.
                </p>
              </div>
              <div className="border-l-4 border-amber-600 pl-6 py-2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Mini Dune Weaver
                </h3>
                <p className="text-gray-700">
                  A compact version built from the ground up, costing about $27 to make.
                  Ideal for beginners or those with limited space.
                </p>
              </div>
              <div className="border-l-4 border-amber-600 pl-6 py-2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  Dune Weaver Pro
                </h3>
                <p className="text-gray-700">
                  The premium version costs around $100-150 USD to create—a steal compared
                  to commercial versions that can cost thousands of dollars. Features advanced
                  capabilities and enhanced control options.
                </p>
              </div>
            </div>
          </section>

          {/* About the Creator */}
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet the Creator</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                <span className="font-semibold text-amber-900">Tuan Nguyen</span> is a data
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
              <div className="mt-6 pt-6 border-t border-amber-200">
                <p className="text-sm text-gray-600">
                  Connect with Tuan and the Dune Weaver community on{' '}
                  <a href="https://github.com/tuanchris" className="text-amber-700 hover:text-amber-900 underline">
                    GitHub
                  </a>
                  ,{' '}
                  <a href="https://makerworld.com/en/@tuanchris" className="text-amber-700 hover:text-amber-900 underline">
                    MakerWorld
                  </a>
                  , and{' '}
                  <a href="https://www.patreon.com/DuneWeaver" className="text-amber-700 hover:text-amber-900 underline">
                    Patreon
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Dune Weaver */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Dune Weaver?</h2>
            <div className="bg-white border-2 border-amber-200 rounded-lg p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">✓</span>
                  <span><strong>Affordable:</strong> Build your own for a fraction of the cost of commercial alternatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">✓</span>
                  <span><strong>Open Source:</strong> Full access to designs, code, and community support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">✓</span>
                  <span><strong>Customizable:</strong> Modify and personalize your build to suit your preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">✓</span>
                  <span><strong>Educational:</strong> Learn about electronics, programming, and mechanical design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">✓</span>
                  <span><strong>Community Driven:</strong> Active Discord community for support and inspiration</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Build Your Own?
              </h2>
              <p className="text-gray-700 mb-6">
                Join the community and start creating mesmerizing sand art today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/tuanchris/dune-weaver"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors"
                >
                  View on GitHub
                </a>
                <a
                  href="https://makerworld.com/en/@tuanchris"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-amber-700 font-semibold rounded-lg border-2 border-amber-700 hover:bg-amber-50 transition-colors"
                >
                  Download Files
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
