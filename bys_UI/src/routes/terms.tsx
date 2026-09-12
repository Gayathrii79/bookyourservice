import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, FileText, ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — BookYourService" },
      { name: "description", content: "BookYourService Master Terms and Conditions. Please read these terms carefully before using our platform." },
      { property: "og:title", content: "Terms & Conditions — BookYourService" },
      { property: "og:description", content: "BookYourService Master Terms and Conditions." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="bg-background min-h-screen py-12 md:py-20">
      <div className="container-x max-w-4xl">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        {/* Header Banner */}
        <div className="rounded-2xl border border-border bg-surface p-8 md:p-10 shadow-soft mb-10">
          <div className="flex items-center gap-3 text-primary mb-3">
            <ShieldCheck size={28} />
            <span className="text-xs font-semibold uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">Legal Agreement</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            BOOKYOURSERVICE
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mt-1">
            MASTER TERMS AND CONDITIONS
          </h2>
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-border text-xs text-muted-foreground">
            <div>
              <span className="font-semibold text-foreground">Effective Date:</span> [3/8/2026]
            </div>
            <div>
              <span className="font-semibold text-foreground">Last Updated:</span> [3/8/2026]
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="rounded-2xl border border-border bg-surface p-8 md:p-12 shadow-soft space-y-8 text-foreground text-sm leading-relaxed">
          <section className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              BOOKYOURSERVICE
            </p>
            <p className="text-muted-foreground leading-relaxed">
              MASTER TERMS AND CONDITIONS
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Effective Date: [3/8/2026]
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Last Updated: [3/8/2026]
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions (&ldquo;Terms&ldquo;) govern the access to and use of the BookYourService platform, including its website, mobile application, software, communication channels and related services (collectively, the &ldquo;Platform&ldquo;).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By creating an account, accessing, browsing or using the Platform, you acknowledge that you have read, understood and agreed to be legally bound by these Terms, our Privacy Policy and any other policies published on the Platform.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 1 â€“ DEFINITIONS
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Unless the context otherwise requires, the following words shall have the meanings assigned below.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.1 &ldquo;BookYourService&ldquo;, &ldquo;Company&ldquo;, &ldquo;Platform&ldquo;, &ldquo;We&ldquo;, &ldquo;Us&ldquo; or &ldquo;Our&ldquo;
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              means BookYourService, the owner and operator of the online technology platform that connects Customers with independent Service Providers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService acts solely as a technology platform and intermediary and is not the provider of any listed service.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.2 Customer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A person, company or legal entity using the Platform to locate, compare, request or book services.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.3 Service Provider
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Any independent individual, partnership, sole proprietor, company or other legal entity registered on the Platform for the purpose of offering services to Customers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A Service Provider is not an employee, representative, franchisee, partner or agent of BookYourService.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.4 User
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Any individual or entity accessing or using the Platform, including Customers, Providers and visitors.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.5 Booking
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A confirmed service request created through the Platform after a Customer and Provider have been successfully connected.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.6 Lead
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Any enquiry, request or potential business opportunity generated through BookYourService and shared with a Service Provider.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.7 Commission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The fee payable to BookYourService by a Service Provider in accordance with the Commission Policy.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.8 Content
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              All information, photographs, videos, logos, trademarks, software, reviews, ratings, graphics, text, databases and other material available on the Platform.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.9 Account
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A registered user profile created for accessing Platform services.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.10 Applicable Law
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              All applicable laws of India including statutes, rules, regulations, notifications, government directions and judicial decisions.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.11 Business Day
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Any day except Saturday, Sunday and officially declared public holidays in India.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.12 Intellectual Property
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              All copyrights, trademarks, service marks, trade names, patents, trade secrets, software, databases, designs and other proprietary rights belonging to BookYourService.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.13 Personal Data
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Any information relating to an identified or identifiable individual collected through the Platform.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.14 Platform Fee
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Any fee charged directly by BookYourService for services offered through the Platform.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              1.15 Force Majeure Event
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              An event beyond reasonable control including natural disasters, flood, earthquake, war, terrorism, epidemic, pandemic, internet outage, cyberattack, government restrictions, labour strike, power failure or other events preventing normal operations.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 2 â€“ ELIGIBILITY
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              2.1 Minimum Age
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Users must be at least eighteen (18) years of age.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Any account created by a minor may be suspended or permanently terminated.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              2.2 Legal Capacity
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Users must have the legal capacity to enter into binding contracts under Indian law.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              2.3 Business Registration
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Where required by law, Service Providers shall possess all necessary registrations, licences, permits and approvals required for the services they offer.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              2.4 Accurate Information
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Users shall provide accurate, complete and up-to-date information during registration and throughout their use of the Platform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Providing false information may result in suspension or permanent termination.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              2.5 Right to Refuse Registration
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService reserves the absolute right to approve, reject, suspend or terminate any registration without obligation to provide reasons, to the extent permitted by applicable law.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 3 â€“ NATURE OF THE PLATFORM
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService is an online technology marketplace.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The Platform only introduces Customers and independent Service Providers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	does not employ Service Providers;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	does not supervise or control the manner in which services are performed;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	does not guarantee service quality or outcomes;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	is not a party to the contract formed between the Customer and the Provider unless expressly stated.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each Provider remains solely responsible for the services they perform, including compliance with applicable laws, taxes, licences and professional standards. This builds on the intermediary role described in your current draft.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Great. Continuing exactly where the previous part ended.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 4 â€“ ACCOUNT REGISTRATION
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              4.1 Registration
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To access certain features of the Platform, Users must create an account by providing accurate, complete and current information.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService may require identity verification, business verification or document verification before activating any account.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              4.2 Account Security
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Each User is solely responsible for:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Maintaining the confidentiality of login credentials.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Preventing unauthorized access to their account.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	All activities occurring through their account.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService shall not be liable for losses resulting from a User&rsquo;s failure to maintain account security.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              4.3 One Account Policy
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Unless expressly approved in writing, Users shall not create multiple accounts to bypass Platform restrictions or obtain unfair advantages.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService may merge, suspend or permanently terminate duplicate accounts.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              4.4 Verification
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService may request:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Government-issued identity proof
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	PAN Card
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Aadhaar (where lawfully permitted)
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	GST Registration (if applicable)
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Business Registration Certificate
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Professional Licences
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Address Proof
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Bank Account Verification
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Mobile Number Verification
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Email Verification
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Failure to provide requested documents may result in suspension or rejection of registration.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Verification by BookYourService confirms only that documents have been reviewed. It does not constitute a guarantee of a Provider&rsquo;s competence, qualifications, honesty, financial standing, safety, or service quality.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              4.5 Right to Reject Registration
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService reserves the right to reject or terminate any registration where:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	False information is submitted.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Fraud is suspected.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Required documents are not provided.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Applicable laws or these Terms are violated.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Continued access may create legal, financial or reputational risks for the Platform.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 5 â€“ CUSTOMER RESPONSIBILITIES
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Each Customer agrees to:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Provide accurate information regarding the requested service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Cooperate reasonably with the selected Service Provider.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Ensure access to the service location where required.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Make payments as agreed with the Provider unless the Platform specifies otherwise.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Treat Providers respectfully and lawfully.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Comply with all applicable laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Customers shall not:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Submit false or misleading bookings.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Harass, threaten or abuse Providers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Demand unlawful services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Attempt to manipulate ratings or reviews.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Impersonate another person.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Use stolen payment methods.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Interfere with Platform operations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Circumvent the Platform to help avoid commission obligations where such obligations apply under the Platform&rsquo;s policies.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 6 â€“ SERVICE PROVIDER RESPONSIBILITIES
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Every Service Provider represents and warrants that:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	They possess the legal authority to provide their listed services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	All licences, permits and registrations required by law are valid and maintained.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Information submitted to BookYourService is accurate.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Services will be provided professionally, safely and in compliance with applicable laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Pricing communicated to Customers will be honest and transparent.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	They will pay Platform commissions in accordance with the Commission Policy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Service Providers remain solely responsible for:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Service quality.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Workmanship.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Materials supplied.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Employees or subcontractors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Taxes applicable to their business.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Insurance required by law or prudent business practice.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Customer warranties or guarantees offered by the Provider.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              Provider Conduct
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Providers shall not:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Misrepresent qualifications.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Submit forged documents.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Engage in fraud.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Use abusive language.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Discriminate unlawfully.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Offer illegal services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Use another person&rsquo;s identity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Attempt to hack or disrupt the Platform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Purchase fake reviews or ratings.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Share confidential Platform information.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Copy Platform data or customer databases.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 7 â€“ BOOKINGS
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              7.1 Booking Requests
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Customers may submit service requests through the Platform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Submission of a request does not guarantee Provider acceptance.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              7.2 Provider Acceptance
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A booking becomes confirmed only after acceptance by the selected Provider or as otherwise indicated by the Platform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService does not guarantee that every booking request will be accepted.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              7.3 Independent Service Contract
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Once a booking is confirmed, the service contract exists directly between the Customer and the Provider, except where BookYourService expressly agrees otherwise.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService remains a technology platform facilitating the introduction and communication between the parties, consistent with the intermediary role described in your original draft.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              7.4 Changes to Bookings
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Customers and Providers may modify booking details by mutual agreement where permitted through the Platform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService is not responsible for disputes arising from changes agreed directly between the parties.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              7.5 Booking Records
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The Platform may maintain electronic records including:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Booking requests
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Acceptance timestamps
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Messages sent through the Platform
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Payment records
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Commission records
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Login history
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Verification status
            </p>
            <p className="text-muted-foreground leading-relaxed">
              To the extent permitted by law, these electronic records may be used to administer the Platform and support dispute resolution.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 8 â€“ COMMISSION POLICY
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              8.1 Platform Commission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Service Providers agree to pay BookYourService the commission applicable to each qualifying booking.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The applicable commission rate shall be displayed during Provider registration, communicated through the Platform, or otherwise agreed in writing.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              8.2 Commission Trigger
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Unless expressly stated otherwise, commission becomes payable upon the occurrence of the qualifying event defined in the Commission Policy (for example, a confirmed booking or completed service, depending on the model adopted by the Platform). Your final policy should choose one trigger and apply it consistently throughout the document. Your current draft contains a placeholder for this choice.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              8.3 Payment of Commission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Providers shall pay commission within the time specified by the Platform using the approved payment methods.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Failure to pay commission may result in:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Late payment charges where disclosed and permitted by law.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Suspension of new leads or bookings.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Recovery proceedings.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Account termination.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Legal action where appropriate.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              8.4 Anti-Circumvention
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Where Customers and Providers are introduced through BookYourService, they shall not intentionally use the Platform to establish contact and then bypass the Platform for the purpose of avoiding agreed commission obligations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If BookYourService has reasonable evidence of intentional commission evasion, it may investigate the matter, suspend accounts, recover unpaid commission where contractually due, and take other actions permitted under these Terms and applicable law.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Continuing exactly where the previous section ended.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 9 â€“ PAYMENTS
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              9.1 Payment Methods
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Payments may be made through payment gateways, UPI, bank transfer, cards, net banking, wallets, or any other payment method approved by BookYourService.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService may change available payment methods at any time.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              9.2 Customer Payments
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Unless expressly stated otherwise, payments for services are made directly between the Customer and the Service Provider.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Where BookYourService collects payments on behalf of Providers, such collection shall be deemed to be collection as a limited payment facilitator only and shall not create an employer, agency, partnership or joint venture relationship.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              9.3 Platform Fees
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService may charge:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Platform fees
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Convenience fees
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Subscription fees
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Lead purchase fees
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Premium listing fees
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Verification fees
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Advertising fees
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Other service fees disclosed before payment
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All fees are non-refundable unless expressly stated otherwise or required by applicable law.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              9.4 Failed Payments
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              If a payment fails due to insufficient funds, banking issues, payment gateway errors, fraud screening or technical failures, BookYourService may:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	suspend the booking,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	request an alternative payment method,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	suspend the User&rsquo;s account,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	recover unpaid amounts through lawful means.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              9.5 Chargebacks
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              If a User initiates a chargeback or payment reversal without valid legal grounds:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService reserves the right to:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	suspend the account,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	recover reasonable costs incurred,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	contest the chargeback,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	suspend future bookings,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	take legal action where appropriate.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nothing in this clause limits a User&rsquo;s legal rights to dispute unauthorized or fraudulent transactions.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              9.6 Currency
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Unless otherwise stated, all payments shall be made in Indian Rupees (INR).
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 10 â€“ TAXES AND GST
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              10.1 User Responsibility
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Each Service Provider is solely responsible for:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	GST registration where legally required,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	filing tax returns,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	maintaining financial records,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	payment of direct and indirect taxes applicable to their business.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService does not provide tax advice to Providers.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              10.2 GST on Platform Charges
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Where BookYourService is registered under the Goods and Services Tax laws of India, GST shall be charged on applicable Platform fees and commissions at the prevailing statutory rate.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              10.3 Tax Compliance
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Users agree to comply with:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Income-tax laws
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	GST laws
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Professional tax laws
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Labour laws
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Any other applicable Indian tax legislation relevant to their activities.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              10.4 Tax Records
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Users shall maintain proper books, invoices and tax records required by applicable law.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService may request tax-related information where reasonably necessary for compliance with legal obligations.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 11 â€“ REFUND AND CANCELLATION POLICY
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              11.1 Platform Role
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService is not the provider of services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Accordingly, BookYourService does not guarantee:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	service quality,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	workmanship,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	completion,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	timeliness,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	pricing,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	suitability of Providers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This reflects the intermediary role already described in your existing draft.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              11.2 Customer Cancellation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Customers may cancel bookings in accordance with the cancellation rules displayed at the time of booking.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Where no specific cancellation policy exists, cancellation terms shall be determined by agreement between the Customer and the Provider.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              11.3 Provider Cancellation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Providers should avoid unnecessary cancellations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Repeated cancellations may result in:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	reduced visibility,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	temporary suspension,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	permanent removal from the Platform.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              11.4 Refund Eligibility
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Refunds may be considered only where:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	duplicate payment occurred,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	payment was collected in error,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	no Provider was assigned where a Platform fee was charged,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	applicable law requires a refund.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Refunds relating to service quality disputes shall normally be resolved between the Customer and the Provider unless BookYourService expressly agrees otherwise.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              11.5 Refund Processing
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Approved refunds shall normally be processed within the period communicated to the User using the original payment method where practicable.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              11.6 Non-Refundable Charges
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Unless otherwise required by law:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	verification fees,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	subscription fees,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	advertising fees,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	lead purchase fees,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	commissions already earned,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              are non-refundable.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 12 â€“ FRAUD PREVENTION POLICY
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService maintains a zero-tolerance policy towards fraud.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Fraud includes but is not limited to:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	fake identities,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	forged documents,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	payment fraud,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	fake bookings,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	fake reviews,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	commission evasion,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	impersonation,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	account takeover,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	stolen payment instruments,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	identity theft,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	phishing,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	deceptive business practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Where fraud is suspected, BookYourService may:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	suspend accounts,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	reject bookings,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	freeze pending payouts where legally permissible,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	request additional verification,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	report the matter to competent authorities,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	preserve electronic records,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	cooperate with law enforcement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService may retain relevant evidence for investigation and legal compliance in accordance with applicable law and its retention policies.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 13 â€“ INTELLECTUAL PROPERTY
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              All intellectual property rights in the Platform, including:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	software,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	source code,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	databases,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	trademarks,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	logos,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	trade names,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	graphics,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	text,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	user interface,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	designs,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	documentation,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              remain the exclusive property of BookYourService or its licensors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No User acquires ownership of any intellectual property merely by using the Platform.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              Users Shall Not
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Users shall not:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	copy,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	reproduce,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	modify,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	distribute,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	reverse engineer,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	decompile,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	scrape,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	mirror,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	commercially exploit,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	create derivative works from,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              any part of the Platform without prior written permission.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              User Content
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Users retain ownership of content they lawfully submit.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By submitting content, Users grant BookYourService a non-exclusive, worldwide, royalty-free licence to host, display, reproduce and use such content solely for operating, promoting and improving the Platform, subject to applicable law and the Privacy Policy.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 14 â€“ CONFIDENTIALITY
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Users shall keep confidential any non-public information obtained through the Platform, including:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	customer information,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	provider information,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	pricing arrangements,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	business strategies,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	commission structures,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	technical information,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	verification procedures,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Platform operations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Confidential information shall not be disclosed except:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	with prior written consent,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	where required by law,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	to comply with a lawful government order,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	to protect legal rights,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	to professional advisers bound by confidentiality obligations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The confidentiality obligations continue even after termination of a User&rsquo;s account, except where disclosure is required by law or the information has become publicly available through lawful means.
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 15 â€“ LIMITATION OF LIABILITY
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              15.1 Platform Role
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService operates solely as a technology platform that connects Customers and independent Service Providers. Except where expressly stated in writing, BookYourService does not perform, supervise, control, endorse or guarantee any services listed on the Platform.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              15.2 No Warranty of Services
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by applicable law, BookYourService makes no representation or warranty regarding:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	the quality of services;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	professional competence of Providers;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	completion of services;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	suitability of any Provider;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	pricing accuracy;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	availability of Providers;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	safety of services;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	customer satisfaction;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	uninterrupted operation of the Platform.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              15.3 No Liability for Service Disputes
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Any dispute regarding:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	service quality,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	workmanship,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	delays,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	damages,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	warranties,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	pricing,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	refunds,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	negligence,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	misconduct,
            </p>
            <p className="text-muted-foreground leading-relaxed">
              shall primarily be resolved between the Customer and the Service Provider unless BookYourService expressly agrees otherwise.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              15.4 Maximum Liability
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted under applicable law, the total cumulative liability of BookYourService arising out of or relating to the Platform shall not exceed the total amount of Platform fees or commissions actually received by BookYourService from the specific transaction giving rise to the claim during the six (6) months immediately preceding the event.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              15.5 Excluded Damages
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService shall not be liable for any indirect, incidental, consequential, exemplary, punitive or special damages, including but not limited to:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	loss of profits;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	loss of business;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	loss of goodwill;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	loss of customers;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	loss of revenue;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	business interruption;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	data loss;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	reputational damage;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	opportunity costs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This limitation applies regardless of the legal theory under which a claim is brought, to the extent permitted by applicable law.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              15.6 Third-Party Services
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService shall not be responsible for any products or services provided by third parties, including payment gateways, internet service providers, telecommunications providers, cloud hosting services, mapping services or other external platforms integrated with the Platform.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              15.7 Security Incidents
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              While BookYourService implements reasonable technical and organisational security measures, no electronic system can be guaranteed to be completely secure. Users acknowledge the inherent risks of internet communications and electronic transactions.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              15.8 Consumer Rights
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Nothing in these Terms excludes or limits any liability that cannot legally be excluded or restricted under applicable Indian law, including rights available to consumers under mandatory legislation.
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 16 â€“ INDEMNIFICATION
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              16.1 User Indemnity
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Each User, including every Customer and Service Provider, agrees to defend, indemnify and hold harmless BookYourService, its owners, directors, officers, employees, consultants, affiliates, successors, assigns and representatives from and against any claims, demands, actions, proceedings, liabilities, losses, damages, penalties, fines, judgments, settlements, costs and expenses (including reasonable legal fees) arising out of or relating to:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Violation of these Terms and Conditions;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Breach of any applicable law or regulation;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Negligent, fraudulent or unlawful acts or omissions;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Infringement of any intellectual property or proprietary rights;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Misrepresentation of qualifications, licences or identity;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Injury, death or property damage caused during the performance of services;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Failure to obtain required licences, permits or registrations;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Tax liabilities or statutory non-compliance;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Disputes between Customers and Service Providers;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Misuse of the Platform;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Submission of false, misleading or fraudulent information;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Unauthorized access to or misuse of another person&rsquo;s account;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Breach of confidentiality or privacy obligations.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              16.2 Service Provider Indemnity
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Each Service Provider further agrees to indemnify BookYourService against any claim arising from:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Defective or poor-quality services;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Professional negligence;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Failure to complete agreed services;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Employee or subcontractor misconduct;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Personal injury or property damage;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Product defects;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Consumer complaints;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Warranty claims;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Violations of labour, environmental, health or safety laws;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Any legal action initiated by a Customer relating to services provided by the Service Provider.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              16.3 Customer Indemnity
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Customers agree to indemnify BookYourService for claims arising from:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	False or malicious complaints;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Abuse or harassment of Service Providers;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Fraudulent bookings;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Illegal service requests;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Non-payment where payment obligations exist;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Misuse of Platform facilities or communication channels.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              16.4 Legal Defence
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService reserves the right, at its own discretion, to assume the exclusive defence and control of any matter subject to indemnification. Users agree to cooperate fully with BookYourService in defending such claims, including providing relevant documents, records and information when reasonably requested.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              16.5 Survival
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The obligations contained in this Chapter shall survive the suspension, termination or closure of a User&rsquo;s account and shall remain enforceable to the fullest extent permitted by applicable law.
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 17 â€“ DISPUTE RESOLUTION AND ARBITRATION
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              17.1 Good Faith Resolution
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Before initiating any legal proceedings, the parties agree to make reasonable efforts to resolve any dispute, claim or controversy through good-faith negotiations.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A User shall first submit a written complaint to BookYourService, clearly describing the nature of the dispute together with any supporting documents.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              17.2 Internal Review
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Upon receiving a complaint, BookYourService may:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	acknowledge receipt of the complaint;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	request additional information or documents;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	communicate with the concerned Customer or Service Provider;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	review Platform records relevant to the dispute;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	propose a fair resolution where appropriate.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nothing in this clause obligates BookYourService to decide disputes between Customers and Service Providers where it acts only as an intermediary.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              17.3 Customerâ€“Provider Disputes
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService primarily operates as a technology platform connecting Customers and independent Service Providers.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Accordingly, disputes relating to:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	service quality;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	workmanship;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	pricing;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	warranties;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	delays;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	damages;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	refunds;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	negligence;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	contractual obligations;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              shall ordinarily be resolved directly between the Customer and the Service Provider unless BookYourService expressly agrees to assist or applicable law requires otherwise.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              17.4 Arbitration
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              If a dispute involving BookYourService cannot be resolved through negotiation, it shall, to the extent permitted by applicable law, be finally resolved by arbitration in accordance with the provisions of the Arbitration and Conciliation Act, 1996, as amended from time to time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The arbitration shall:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	be conducted by a sole arbitrator appointed in accordance with applicable law or by mutual agreement of the parties;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	take place in Bengaluru, Karnataka, India, unless otherwise agreed;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	be conducted in the English language;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	remain confidential except where disclosure is required by law.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The arbitral award shall be final and binding on the parties, subject to rights available under applicable law.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              17.5 Interim Relief
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Nothing in this Chapter prevents BookYourService from seeking interim, emergency or injunctive relief before any court of competent jurisdiction where necessary to protect:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	intellectual property;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	confidential information;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	business interests;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	customer data;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Platform security;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	unpaid contractual obligations.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              17.6 Limitation Period
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Any claim against BookYourService shall be brought within the period prescribed under applicable law. Failure to initiate proceedings within the applicable limitation period may result in the claim becoming time-barred.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              17.7 Legal Costs
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Each party shall ordinarily bear its own legal costs, unless otherwise agreed in writing, awarded by an arbitrator or court, or required under applicable law.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              17.8 Consumer Rights
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Nothing contained in this Chapter limits or excludes any statutory rights or remedies available to consumers under applicable Indian law, including the right to approach an appropriate consumer dispute resolution forum where such rights cannot legally be waived.
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 18 â€“ GOVERNING LAW AND JURISDICTION
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              18.1 Governing Law
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions, together with all policies published by BookYourService, shall be governed by and construed in accordance with the laws of the Republic of India, without regard to any conflict of law principles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Users agree to comply with all applicable central, state and local laws, regulations, rules, notifications and governmental directions while accessing or using the Platform.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              18.2 Jurisdiction
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Subject to the arbitration provisions contained in Chapter 17, the courts located in Bengaluru, Karnataka, India shall have exclusive jurisdiction over any dispute, claim or proceeding arising out of or relating to these Terms, the Platform or the relationship between the User and BookYourService, to the extent such exclusive jurisdiction is permitted under applicable law.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              18.3 Compliance with Applicable Laws
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every User agrees to comply with all applicable laws, including but not limited to:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Consumer protection laws;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Information technology laws;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Data protection and privacy laws;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Goods and Services Tax (GST) laws;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Income-tax laws;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Labour and employment laws;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Professional licensing requirements;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Anti-corruption and anti-bribery laws;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Environmental, health and safety regulations;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Any other applicable statutory or regulatory requirements.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              18.4 Cross-Border Use
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Users accessing the Platform from outside India are solely responsible for ensuring that their access and use comply with the laws of their respective jurisdictions. BookYourService makes no representation that the Platform or its services are appropriate or legally available outside India.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              18.5 Regulatory Cooperation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService may cooperate with courts, law enforcement agencies, regulatory authorities and government departments where required by applicable law, legal process or lawful governmental request. Such cooperation may include the disclosure of records, user information or transaction details to the extent legally permitted or required.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              18.6 Severability of Jurisdiction Provisions
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              If any provision relating to jurisdiction or governing law is found to be invalid, illegal or unenforceable by a court of competent jurisdiction, the remaining provisions of these Terms shall continue in full force and effect to the maximum extent permitted by law.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              18.7 No Waiver of Statutory Rights
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Nothing contained in these Terms shall be interpreted as excluding, restricting or waiving any statutory rights or remedies that cannot legally be excluded under applicable Indian law.
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 19 â€“ FORCE MAJEURE
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              19.1 Force Majeure Events
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService shall not be liable for any delay, interruption or failure to perform its obligations where such delay or failure results from events beyond its reasonable control, including but not limited to:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Natural disasters;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Floods, earthquakes or storms;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Fire or explosions;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	War, terrorism or civil unrest;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Epidemics or pandemics;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Government actions or restrictions;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Internet or telecommunications failures;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Cyberattacks or widespread system failures;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Power outages;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Labour strikes or lockouts;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Shortages of essential resources; or
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Any other event beyond the reasonable control of BookYourService.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              19.2 Suspension of Obligations
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              The affected obligations shall be suspended only for the duration of the Force Majeure Event. BookYourService will use commercially reasonable efforts to restore services as soon as practicable.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              19.3 No Liability
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService shall not be liable for losses or damages arising solely from a Force Majeure Event to the extent permitted by applicable law.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 20 â€“ SUSPENSION AND TERMINATION
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              20.1 Suspension
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService may suspend or restrict access to the Platform where it reasonably believes that a User has:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Violated these Terms;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Submitted false or misleading information;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Engaged in fraud or illegal activity;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Failed to pay Platform fees or commissions;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Compromised Platform security;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Misused the Platform; or
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Created legal, financial or reputational risks for BookYourService.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              20.2 Termination
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService may permanently terminate a User&rsquo;s account where repeated or serious violations occur, subject to applicable law.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              20.3 User Termination
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Users may close their accounts at any time through the Platform or by contacting BookYourService. Account closure does not release any outstanding payment obligations, commissions or liabilities incurred before termination.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              20.4 Effect of Termination
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Upon suspension or termination:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	access to the Platform may cease immediately;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	bookings already accepted may continue where appropriate;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	outstanding payments remain payable;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	rights relating to intellectual property, confidentiality, limitation of liability, indemnification and dispute resolution shall survive termination.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 21 â€“ MISCELLANEOUS PROVISIONS
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              21.1 Entire Agreement
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              These Terms, together with the Privacy Policy and other policies published by BookYourService, constitute the entire agreement between the User and BookYourService regarding use of the Platform.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              21.2 Amendments
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService may amend these Terms from time to time. Updated Terms will become effective upon publication or on the effective date stated in the updated version. Continued use of the Platform after such updates constitutes acceptance of the revised Terms.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              21.3 Severability
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              21.4 No Waiver
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Failure by BookYourService to enforce any provision shall not constitute a waiver of that provision or any other rights.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              21.5 Assignment
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Users may not assign or transfer their rights or obligations without prior written consent from BookYourService. BookYourService may assign its rights or obligations as permitted by applicable law.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              21.6 Relationship of Parties
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Nothing contained in these Terms creates any partnership, agency, employment, franchise, joint venture or fiduciary relationship between BookYourService and any User unless expressly agreed in writing.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 22 â€“ ELECTRONIC COMMUNICATIONS
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              22.1 Electronic Notices
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Users consent to receive communications electronically, including emails, SMS, in-app notifications, WhatsApp messages (where applicable) and other electronic communications.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              22.2 Legal Validity
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Electronic communications shall satisfy any legal requirement that such communications be in writing, to the extent permitted under applicable law.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              22.3 User Responsibility
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Users are responsible for maintaining accurate contact information and ensuring they can receive communications from BookYourService.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 23 â€“ CHANGES TO THE PLATFORM
            </h2>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              23.1 Platform Improvements
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              BookYourService may modify, improve, suspend or discontinue any feature, functionality or service offered through the Platform at any time.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              23.2 Maintenance
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Temporary interruptions may occur for maintenance, upgrades, security improvements or technical reasons.
            </p>
            <h3 className="text-base font-semibold text-foreground mt-4 pt-2">
              23.3 No Guarantee of Continuous Availability
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              While BookYourService aims to maintain reliable service, uninterrupted or error-free operation of the Platform cannot be guaranteed.
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 24 â€“ CONTACT INFORMATION
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Questions, complaints or legal notices relating to these Terms may be sent to BookYourService using the contact details published on the official Platform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Until official contact details are published, this section may remain as a placeholder:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Company Name: BookYourService
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Email:bookyourservicebys@gmail.com
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Website: www.bookyourservice.in
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Registered Office: [6th block rajajinagar Bangalore 560010]
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Customer Support Hours: [24/7]
            </p>
          </section>
          <hr className="border-border my-6" />
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground pt-4 border-t border-border first:border-0 first:pt-0">
              CHAPTER 25 â€“ ACCEPTANCE OF TERMS
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By registering an account, accessing or using the Platform, each User acknowledges that they have:
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Read these Terms and Conditions;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Understood their contents;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Agreed to be legally bound by them;
            </p>
            <p className="text-muted-foreground leading-relaxed">
              â€¢	Agreed to comply with all applicable laws and Platform policies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If a User does not agree to these Terms, they must immediately discontinue use of the Platform.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions become effective from the Effective Date specified at the beginning of this document and shall remain in force until amended or replaced by BookYourService.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
