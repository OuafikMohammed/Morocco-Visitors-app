import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function SubscriptionOffers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const clientOffers = [
    {
      title: "Basic Plan",
      price: "$15/month",
      features: [
        "Access to all places to visit",
        "Access to all hotels ",
        "Access to all car rental agencies",
        "Mobile web app access",
      ],
    },
    {
      title: "Premium Plan",
      price: "$25/month",
      features: [
        "All Basic Plan features",
        "Personalized travel recommendations",
        "Priority booking for hotels and cars with payment integration",
        "Direct messaging with service providers",
      ],
    },
  ];

  const providerOffers = [
    {
      title: "Standard Listing",
      price: "$199/month",
      features: [
        "Basic business profile",
        "Limited visibility in search results",
        "Customer reviews and ratings",
        "Basic analytics",
        "Email notifications for new leads",
      ],
    },
    {
      title: "Premium Listing",
      price: "$399/month",
      features: [
        "Enhanced business profile dependig on the category",
        "Top visibility in search results",
        "Featured in promotional materials",
        "Advanced analytics and insights",
        "Direct messaging with potential customers",
      ],
    },
  ];

  return (
    <section ref={ref} id="plans-section" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          Choose Your Plan
        </motion.h2>

        <h3 className="text-2xl font-bold text-gray-900 mb-6">For Travelers</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {clientOffers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>{offer.title}</CardTitle>
                  <CardDescription>{offer.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Subscribe Now</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-6">For Service Providers</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {providerOffers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>{offer.title}</CardTitle>
                  <CardDescription>{offer.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {offer.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Listed</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}