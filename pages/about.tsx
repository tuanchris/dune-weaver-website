import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AboutHeroSection } from '@/components/AboutHeroSection';
import { Section } from '@/components/Section';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Dune Weaver</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="min-h-screen pt-16">
        <AboutHeroSection />

        {/* What is Dune Weaver */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-theme-text-primary mb-6">
              What is Dune Weaver?
            </h2>
            <div className="prose prose-lg max-w-none text-theme-text-secondary space-y-4">
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
          </div>
        </Section>

        {/* About the Creator */}
        <Section background="sand">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-theme-text-primary mb-6">
              Meet the Creator
            </h2>
            <div className="space-y-4 text-theme-text-primary">
              <p className="text-lg">
                Hi, I'm{" "}
                <span className="font-semibold text-theme-text-secondary">Tuan</span>—data
                geek by trade, maker at heart. I started Dune Weaver because I
                wanted a kinetic sand table that anyone could actually build:
                printable parts, off-the-shelf hardware, no mystery boxes.
                Beautiful motion, without the scary bill.
              </p>
              <p>
                I design Dune Weaver to be open, affordable, and hackable. The
                files are open-source, the builds are 3D-print-friendly, and the
                software runs locally. I'm constantly refining motion profiles,
                cable routing, and assembly steps so your first build feels
                smooth, not stressful. Along the way, Dune Weaver has been
                featured by places like Tom's Hardware, and—more importantly—by
                a growing community of builders who share patterns, mods, and
                clever fixes.
              </p>
              <p>
                My background is in data and softwarex engineering, but I live
                for hands-on projects—3D printing, electronics, LEDs, the whole
                maker buffet. That mix shows up in Dune Weaver: careful
                engineering where it matters, and plenty of room to customize.
                Whether you pick up the free designs or dive into the Pro
                versions, you'll find clear guides, a friendly Discord, and
                patterns that make the sand look like it's thinking.
              </p>
              <p>
                If you're here, you're probably a tinkerer, a learner, or
                someone who just loves mesmerizing things. Welcome. Grab the
                files, join the community, and build something you'll be proud
                to leave running on the coffee table.
              </p>
              
            </div>
          </div>
        </Section>

        {/* Why Choose Dune Weaver */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-theme-text-primary mb-6">
              Why Choose Dune Weaver?
            </h2>
            <ul className="space-y-4 text-theme-text-secondary">
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
        </Section>

        {/* Design Philosophy */}
        <Section background="sand">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-theme-text-primary mb-6">
              Design Philosophy
            </h2>
            <div className="space-y-6 text-theme-text-secondary">
              <p className="text-lg leading-relaxed">
                I wanted this version to nail a few key things:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-theme-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold text-theme-text-primary mb-2">
                    Printability First
                  </h3>
                  <p>
                    If it could be 3D printed, it should be. No relying on
                    specialty hardware like timing belts or linear rails when a
                    clever printed solution works better.
                  </p>
                </div>

                <div className="border-l-4 border-theme-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold text-theme-text-primary mb-2">
                    Use What's Already Out There
                  </h3>
                  <p>
                    Building around accessible furnitures (IKEA) means you're
                    not hunting down obscure parts or spending a fortune on
                    custom components.
                  </p>
                </div>

                <div className="border-l-4 border-theme-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold text-theme-text-primary mb-2">
                    Pass the Living Room Test
                  </h3>
                  <p>
                    If it looks like a science experiment, it's staying in the
                    garage.
                  </p>
                </div>

                <div className="border-l-4 border-theme-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold text-theme-text-primary mb-2">
                    Keep the Cost Reasonable
                  </h3>
                  <p>
                    Build your own for a fraction of the cost of commercial
                    alternatives
                  </p>
                </div>

                <div className="border-l-4 border-theme-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold text-theme-text-primary mb-2">
                    Silence is Golden
                  </h3>
                  <p>
                    Spent a lot of iteration on making this whisper-quiet. If
                    you build the NEMA 17 version, you won't even know that it's
                    running.
                  </p>
                </div>

                <div className="border-l-4 border-theme-secondary pl-6 py-2">
                  <h3 className="text-xl font-semibold text-theme-text-primary mb-2">
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
          </div>
        </Section>


        {/* Call to Action */}
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-theme-text-primary mb-4">
              Ready to Build Your Own?
            </h2>
            <p className="text-theme-text-secondary mb-6">
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
        </Section>
      </main>

      <Footer />
    </>
  );
}
