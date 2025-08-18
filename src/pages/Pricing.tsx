import React from "react";
import RegularLayout from "@/components/layout/RegularLayout";

const pricingTiers = [
	{
		name: "Starter",
		price: "$0",
		description: "For individuals and hobbyists getting started.",
		features: [
			"Basic API access",
			"Community support",
			"Up to 100 requests/month",
		],
		highlight: false,
	},
	{
		name: "Pro",
		price: "$29/mo",
		description: "For professionals and small teams.",
		features: [
			"All Starter features",
			"Priority email support",
			"Up to 10,000 requests/month",
			"Advanced analytics",
		],
		highlight: true,
	},
	{
		name: "Enterprise",
		price: "Contact Us",
		description: "For organizations with custom needs.",
		features: [
			"All Pro features",
			"Dedicated account manager",
			"Unlimited requests",
			"Custom integrations",
		],
		highlight: false,
	},
];

const Pricing = () => (
	<RegularLayout>
		<div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
			{/* Hero Section */}
			<section className="relative flex flex-col items-center justify-center py-20 px-4 mb-16">
				<div className="absolute inset-0 w-full h-full bg-background/80 pointer-events-none" />
				<div className="relative z-10 max-w-2xl text-center">
					<h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand to-foreground drop-shadow-lg animate-fade-in-down">
						Pricing
					</h1>
					<p className="text-xl md:text-2xl mb-8 font-medium animate-fade-in-up text-muted-foreground">
						Choose the plan that fits your needs. Simple, transparent pricing.
					</p>
				</div>
				<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
				<div className="absolute -bottom-16 right-10 w-72 h-72 bg-muted/30 rounded-full blur-2xl pointer-events-none" />
			</section>
			{/* Pricing Cards */}
			<section className="max-w-5xl mx-auto px-4 mb-24 animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-8">
				{pricingTiers.map((tier) => (
					<div
						key={tier.name}
						className={`flex flex-col bg-background border border-border rounded-2xl shadow-lg p-8 transition-transform duration-300 hover:scale-105 ${
							tier.highlight ? "ring-2 ring-brand" : ""
						}`}
					>
						<h2 className="text-2xl font-bold mb-2 text-brand text-center">
							{tier.name}
						</h2>
						<div className="text-4xl font-extrabold mb-2 text-center">
							{tier.price}
						</div>
						<p className="text-base text-muted-foreground mb-6 text-center">
							{tier.description}
						</p>
						<ul className="flex-1 list-disc ml-6 space-y-2 text-base mb-6">
							{tier.features.map((feature) => (
								<li key={feature}>{feature}</li>
							))}
						</ul>
						{tier.price === "Contact Us" ? (
							<a href="/contact" className="w-full">
								<button
									className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 bg-brand text-white hover:bg-brand/90`}
								>
									Contact Sales
								</button>
							</a>
						) : (
							<button
								className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${
									tier.highlight
										? "bg-brand text-white hover:bg-brand/90"
										: "bg-muted text-foreground hover:bg-muted/80"
								}`}
							>
								Get Started
							</button>
						)}
					</div>
				))}
			</section>
			<style>{`
        .animate-fade-in {
          animation: fadeIn 1s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
		</div>
	</RegularLayout>
);

export default Pricing;
