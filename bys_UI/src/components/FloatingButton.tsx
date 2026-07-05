import { motion } from "framer-motion";
import { MessageSquarePlus } from "lucide-react";
import { useEnquiry } from "@/context/enquiry-context";

export function FloatingButton() {
  const { open, isOpen } = useEnquiry();
  if (isOpen) return null;
  return (
    <motion.button
      onClick={() => open()}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 220, damping: 20 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="btn-primary fixed bottom-5 right-5 z-40 !px-5 !py-3.5 shadow-[var(--shadow-red)] md:bottom-8 md:right-8"
      aria-label="Request a service"
    >
      <MessageSquarePlus size={18} />
      <span className="hidden sm:inline">Request Service</span>
    </motion.button>
  );
}
