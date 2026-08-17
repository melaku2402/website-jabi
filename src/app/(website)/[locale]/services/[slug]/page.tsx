import Link from "next/link";
import { notFound } from "next/navigation";
import {
  PiggyBank,
  HandCoins,
  Wallet,
  Send,
  GraduationCap,
  MoreHorizontal,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { homeServices } from "@/data/services";

const icons = {
  savings: PiggyBank,
  loans: HandCoins,
  fixedDeposit: Wallet,
  moneyTransfer: Send,
  financialEducation: GraduationCap,
  other: MoreHorizontal,
};

const iconStyles: Record<keyof typeof icons, { bg: string; text: string }> = {
  savings: { bg: "bg-emerald-50", text: "text-emerald-600" },
  loans: { bg: "bg-orange-50", text: "text-orange-500" },
  fixedDeposit: { bg: "bg-emerald-50", text: "text-emerald-600" },
  moneyTransfer: { bg: "bg-blue-50", text: "text-blue-600" },
  financialEducation: { bg: "bg-emerald-50", text: "text-emerald-600" },
  other: { bg: "bg-blue-50", text: "text-blue-600" },
};

interface ServiceDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  // params-ን await በማድረግ slug-ን መውሰድ
  const { slug } = await params;

  const service = homeServices.find(
    (item) => item.href.endsWith(slug) || item.id === slug
  );

  if (!service) {
    notFound();
  }
  const Icon = icons[service.icon] || MoreHorizontal;
  const style = iconStyles[service.icon] || {
    bg: "bg-blue-50",
    text: "text-blue-600",
  };

  const otherServices = homeServices
    .filter((item) => item.id !== service.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50/50 py-10 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Navigation / Back Button */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#022777] transition-colors hover:text-emerald-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to All Services
        </Link>

        {/* Hero Section */}
        <div className="mt-6 overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm lg:p-12">
          <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <span
                className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl ${style.bg} ${style.text}`}
              >
                <Icon className="h-10 w-10" strokeWidth={1.75} />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                  Financial Solution
                </span>
                <h1 className="mt-1 text-3xl font-extrabold text-[#022777] sm:text-4xl">
                  {service.title}
                </h1>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#022777] px-6 py-3 text-xs font-extrabold text-white transition-all hover:bg-emerald-600 hover:shadow-lg active:scale-[0.98]"
            >
              Apply / Inquire Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 text-base font-medium leading-relaxed text-gray-600 sm:text-lg">
            {service.description}
          </p>

          <hr className="my-8 border-gray-100" />

          {/* Details & Features Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-[#022777]">
                Key Features & Benefits
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "Competitive interest rates tailored for member growth",
                  "Flexible payment plans and transparent terms",
                  "Dedicated support from financial advisors",
                  "Seamless online and branch access",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-8 text-xl font-bold text-[#022777]">
                How It Works
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Our process is designed to be simple, efficient, and
                user-friendly. Members can get started by visiting any of our
                local branches or contacting our support team directly.
              </p>
            </div>

            {/* Sidebar Card */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
                <div className="flex items-center gap-3 text-emerald-700">
                  <ShieldCheck className="h-6 w-6" />
                  <h3 className="font-bold">Member Protection</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-emerald-800/80">
                  All services are backed by standard regulatory guidelines and
                  member security protocols.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <div className="flex items-center gap-3 text-[#022777]">
                  <HelpCircle className="h-6 w-6" />
                  <h3 className="font-bold">Need Assistance?</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-gray-600">
                  Have questions regarding eligibility or documentation
                  requirements?
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#022777] hover:text-emerald-600"
                >
                  Contact Support <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-extrabold text-[#022777]">
            Explore Other Services
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherServices.map((item) => {
              const ItemIcon = icons[item.icon] || MoreHorizontal;
              const itemStyle = iconStyles[item.icon] || {
                bg: "bg-blue-50",
                text: "text-blue-600",
              };

              return (
                <Card
                  key={item.id}
                  className="group relative flex flex-col items-start gap-3 border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${itemStyle.bg} ${itemStyle.text}`}
                  >
                    <ItemIcon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-base font-bold text-[#022777] group-hover:text-emerald-600">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#022777] after:absolute after:inset-0 hover:text-emerald-600"
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
