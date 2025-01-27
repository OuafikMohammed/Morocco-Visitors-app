import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import SubscriptionOffers from "../components/SubscriptionOffers";
import NewsletterSubscribe from "../components/NewsletterSubscribe";

export default function Home() {
  const scrollToPlans = () => {
    const plansSection = document.getElementById("plans-section");
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Hero scrollToPlans={scrollToPlans} />
      <SubscriptionOffers />
      <NewsletterSubscribe />
    </motion.div>
  );
}