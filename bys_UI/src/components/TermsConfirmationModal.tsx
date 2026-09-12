import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface TermsConfirmationModalProps {
  onClose: () => void;
  onAccept: () => void;
}

export function TermsConfirmationModal({ onClose, onAccept }: TermsConfirmationModalProps) {
  const [agreed, setAgreed] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="terms-confirmation-title"
      >
        <motion.div
          className="relative w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-elevate"
          initial={{ scale: 0.95, opacity: 0, y: 10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 10 }}
          transition={{ type: "spring", damping: 25, stiffness: 260 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <h3 id="terms-confirmation-title" className="text-lg font-semibold tracking-tight text-foreground">
            Terms &amp; Conditions
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Please review and accept our terms before submitting your service request.
          </p>

          <div className="my-5 rounded-xl border border-border/80 bg-muted/40 p-4">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                id="terms-agree-checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary accent-primary cursor-pointer"
              />
              <span className="text-sm leading-snug text-foreground">
                I have read and agree to the{" "}
                <a
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium underline underline-offset-2 hover:text-primary-hover"
                  onClick={(e) => e.stopPropagation()}
                >
                  Terms &amp; Conditions
                </a>
                .
              </span>
            </label>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary text-sm py-2 px-4"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                if (agreed) {
                  onAccept();
                }
              }}
              disabled={!agreed}
              className="btn-primary text-sm py-2 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              OK / Continue
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default TermsConfirmationModal;
