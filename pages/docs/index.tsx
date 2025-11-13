import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllDocuments, getDocumentsByTableType, Document, GroupedDocuments } from '@/lib/docs';
import { Section } from '@/components/Section';
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface DocsPageProps {
  groupedDocuments: GroupedDocuments;
  allDocuments: Document[];
}

export default function DocsPage({ groupedDocuments, allDocuments }: DocsPageProps) {
  // Define the order of table types
  const tableTypeOrder = ['General', 'Dune Weaver Pro', 'Dune Weaver Mini Pro'];
  const sortedTableTypes = tableTypeOrder.filter(type => groupedDocuments[type]);

  return (
    <>
      <Head>
        <title>Documentation - Dune Weaver</title>
        <meta name="description" content="Everything you need to know about building, configuring, and using your Dune Weaver kinetic sand table." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Section background="white">
        <div className="text-center py-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about building, configuring, and using your Dune Weaver kinetic sand table.
          </p>
          <div className="mt-6">
            <Button href="/" variant="outline">
              ← Back to Home
            </Button>
          </div>
        </div>
      </Section>

      {/* All Documents */}
      <Section background="gray">
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allDocuments.map((doc) => (
              <DocumentCard key={doc.slug} document={doc} />
            ))}
          </div>
        </div>
      </Section>

      {/* Documents by Table Type */}
      <Section background="white">
        <div className="py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by Table Type</h2>

          {sortedTableTypes.map((tableType) => (
            <div key={tableType} className="mb-12">
              <div className="flex items-center mb-6">
                <span className="inline-block px-4 py-2 bg-sand-500 text-white rounded-full text-sm font-semibold uppercase tracking-wide">
                  {tableType}
                </span>
                <div className="flex-1 h-px bg-gray-300 ml-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedDocuments[tableType].map((doc) => (
                  <DocumentCard key={`${tableType}-${doc.slug}`} document={doc} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      </div>

      <Footer />
    </>
  );
}

interface DocumentCardProps {
  document: Document;
}

function DocumentCard({ document }: DocumentCardProps) {
  return (
    <Link
      href={`/docs/${document.slug}`}
      className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 hover:border-sand-500"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {document.metadata.title}
      </h3>

      <p className="text-gray-600 mb-4 line-clamp-2">
        {document.metadata.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        <span className="inline-block px-3 py-1 bg-sand-100 text-sand-800 rounded-full text-xs font-medium">
          {document.metadata.tableType}
        </span>
      </div>

      {document.metadata.date && (
        <p className="text-sm text-gray-500">
          {new Date(document.metadata.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      )}
    </Link>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const groupedDocuments = getDocumentsByTableType();
  const allDocuments = getAllDocuments();

  return {
    props: {
      groupedDocuments,
      allDocuments,
    },
  };
};
