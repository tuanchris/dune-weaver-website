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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is Dune Weaver?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                Dune Weaver is a web-controlled kinetic sand table that creates
                mesmerizing patterns in sand using a steel ball guided by
                magnets beneath the surface. It's a motorized sand table that
                creates stunning, intricate patterns in sand using a steel ball
                guided by hidden magnets, powered by a raspbery pi and a micro
                controller (ESP32 or DLC32).
              </p>
              <p>
                The project seamlessly integrates hardware control with a modern
                web interface, featuring real-time pattern execution, playlist
                management, and synchronized lighting effects. With the
                microcontroller connected to a Raspberry Pi or computer, you can
                control the table via a web interface, selecting patterns,
                uploading custom designs, or previewing the ball's motion.
              </p>
            </div>
          </section>

          {/* Why Choose Dune Weaver */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Dune Weaver?
            </h2>
            <div className="bg-white border-2 border-amber-200 rounded-lg p-8">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">✓</span>
                  <span>
                    <strong>Affordable:</strong> Build your own for a fraction
                    of the cost of commercial alternatives
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">✓</span>
                  <span>
                    <strong>Open Source:</strong> Full access to designs, code,
                    and community support
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">✓</span>
                  <span>
                    <strong>Customizable:</strong> Modify and personalize your
                    build to suit your preferences
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">✓</span>
                  <span>
                    <strong>Educational:</strong> Learn about electronics,
                    programming, and mechanical design
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-3 text-xl">✓</span>
                  <span>
                    <strong>Community Driven:</strong> Active Discord community
                    for support and inspiration
                  </span>
                </li>
              </ul>
            </div>
          </section>
          {/* Design Philosophy */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Design Philosophy
            </h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                I wanted this version to nail a few key things:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-amber-600 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Printability First
                  </h3>
                  <p>
                    If it could be 3D printed, it should be. No relying on
                    specialty hardware like timing belts or linear rails when a
                    clever printed solution works better.
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Use What's Already Out There
                  </h3>
                  <p>
                    Building around accessible furnitures (IKEA) means you're
                    not hunting down obscure parts or spending a fortune on
                    custom components.
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Pass the Living Room Test
                  </h3>
                  <p>
                    If it looks like a science experiment, it's staying in the
                    garage.
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Keep the Cost Reasonable
                  </h3>
                  <p>
                    Build your own for a fraction of the cost of commercial
                    alternatives
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Silence is Golden
                  </h3>
                  <p>
                    Spent a lot of iteration on making this whisper-quiet. If
                    you build the NEMA 17 version, you won't even know that it's
                    running.
                  </p>
                </div>

                <div className="border-l-4 border-amber-600 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Build on What Worked
                  </h3>
                  <p>
                    Took everything I learned from previous Dune Weavers and
                    refined the mechanics, electronics integration, and added
                    tons of software features.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Experience */}
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Experience
            </h2>
            <div className="text-gray-700 space-y-4">
              <p className="text-lg">
                This isn't just a print-and-forget project. It becomes a
                presence in your space. People stop by your desk at work asking
                about it. Kids are transfixed. You'll find yourself spacing out
                while watching new patterns emerge. It's genuinely
                meditative—and makes an unforgettable gift.
              </p>
            </div>
          </section>

          {/* Why Build Instead of Buying */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Build Instead of Buying?
            </h2>
            <div className="bg-white border-2 border-amber-200 rounded-lg p-8">
              <div className="text-gray-700 space-y-4">
                <p className="text-lg">
                  When you build the Dune Weaver, you get the satisfaction of
                  creating something with your own hands. You understand exactly
                  how it works (so you can fix or modify anything), and you're
                  building on an open platform that you truly own.
                </p>
                <p>
                  <strong className="text-amber-900">
                    No cloud dependencies. No subscription fees. No planned
                    obsolescence.
                  </strong>
                </p>
                <p>
                  Plus, the build itself is genuinely enjoyable—there's
                  something special about watching it come to life piece by
                  piece.
                </p>
              </div>
            </div>
          </section>

          {/* About the Creator */}
          <section className="mb-16 bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Meet the Creator
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Hi, I'm{" "}
                <span className="font-semibold text-amber-900">Tuan</span>—data
                geek by trade, maker at heart. I started Dune Weaver because I
                wanted a kinetic sand table that anyone could actually build:
                printable parts, off-the-shelf hardware, no mystery boxes.
                Beautiful motion, without the scary bill.
              </p>
              <p>
                I design Dune Weaver to be open, affordable, and hackable. The
                files are open-source, the builds are 3D-print-friendly, and the
                software runs locally. I’m constantly refining motion profiles,
                cable routing, and assembly steps so your first build feels
                smooth, not stressful. Along the way, Dune Weaver has been
                featured by places like Tom’s Hardware, and—more importantly—by
                a growing community of builders who share patterns, mods, and
                clever fixes.
              </p>
              <p>
                My background is in data and softwarex engineering, but I live
                for hands-on projects—3D printing, electronics, LEDs, the whole
                maker buffet. That mix shows up in Dune Weaver: careful
                engineering where it matters, and plenty of room to customize.
                Whether you pick up the free designs or dive into the Pro
                versions, you’ll find clear guides, a friendly Discord, and
                patterns that make the sand look like it’s thinking.
              </p>
              <p>
                If you’re here, you’re probably a tinkerer, a learner, or
                someone who just loves mesmerizing things. Welcome. Grab the
                files, join the community, and build something you’ll be proud
                to leave running on the coffee table.
              </p>
              <div className="mt-6 pt-6 border-t border-amber-200">
                <p className="text-sm text-gray-600">
                  Connect with Tuan and the Dune Weaver community on{" "}
                  <a
                    href="https://github.com/tuanchris"
                    className="text-amber-700 hover:text-amber-900 underline"
                  >
                    GitHub
                  </a>
                  ,{" "}
                  <a
                    href="https://makerworld.com/en/@tuanchris"
                    className="text-amber-700 hover:text-amber-900 underline"
                  >
                    MakerWorld
                  </a>
                  , and{" "}
                  <a
                    href="https://www.patreon.com/DuneWeaver"
                    className="text-amber-700 hover:text-amber-900 underline"
                  >
                    Patreon
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Build Your Own?
              </h2>
              <p className="text-gray-700 mb-6">
                Explore the different versions and find the perfect Dune Weaver
                for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#products"
                  className="inline-flex items-center justify-center px-6 py-3 bg-amber-700 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors"
                >
                  View Products
                </a>
                <a
                  href="/#community"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-amber-700 font-semibold rounded-lg border-2 border-amber-700 hover:bg-amber-50 transition-colors"
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
