import Link from 'next/link';
import { BuildPath as BuildPathType } from '@/lib/docs';

interface BuildPathProps {
  buildPath: BuildPathType;
}

export function BuildPath({ buildPath }: BuildPathProps) {
  return (
    <div className="bg-theme-background-primary border-2 border-theme-primary-500 rounded-lg overflow-hidden shadow-lg">
      {/* Header */}
      <div className="bg-theme-primary-500 text-theme-text-inverse p-6">
        <h3 className="text-2xl font-bold mb-2">{buildPath.title}</h3>
        <p className="text-theme-primary-100">{buildPath.description}</p>
        <div className="mt-3">
          <span className="inline-block px-3 py-1 bg-theme-primary-600 rounded-full text-xs font-semibold uppercase tracking-wide">
            {buildPath.tableType}
          </span>
        </div>
      </div>

      {/* Steps */}
      <div className="p-6">
        <div className="space-y-4">
          {buildPath.steps.map((step, index) => (
            <Link
              key={step.stepNumber}
              href={`/docs/${step.documentSlug}`}
              className="block group"
            >
              <div className="flex items-start gap-4 p-4 rounded-lg border border-theme-border hover:border-theme-primary-500 hover:shadow-md transition-all duration-200">
                {/* Step Number */}
                <div className="flex-shrink-0 w-10 h-10 bg-theme-primary-100 text-theme-primary-700 rounded-full flex items-center justify-center font-bold text-lg group-hover:bg-theme-primary-500 group-hover:text-theme-text-inverse transition-colors duration-200">
                  {step.stepNumber}
                </div>

                {/* Step Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-theme-text-primary mb-1 group-hover:text-theme-primary-600 transition-colors duration-200">
                    {step.title}
                  </h4>
                  <p className="text-theme-text-secondary text-sm">{step.description}</p>
                </div>

                {/* Arrow Icon */}
                <div className="flex-shrink-0 text-theme-text-muted group-hover:text-theme-primary-500 transition-colors duration-200">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              {/* Connector Line (except for last item) */}
              {index < buildPath.steps.length - 1 && (
                <div className="ml-5 w-0.5 h-4 bg-theme-border"></div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
