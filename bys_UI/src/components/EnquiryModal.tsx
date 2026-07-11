import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useEnquiry } from "@/context/enquiry-context";
import { categories } from "@/data/categories";
import { submitEnquiry } from "@/lib/api";

type Status = "idle" | "submitting" | "success" | "error";

export function EnquiryModal() {
  const { isOpen, close, category, service } = useEnquiry();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cat, setCat] = useState(category);
  const [svc, setSvc] = useState(service);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Sync pre-filled values whenever the modal is opened with a new context
  useEffect(() => {
    setCat(category);
  }, [category]);
  useEffect(() => {
    setSvc(service);
  }, [service]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  const reset = () => {
    setName("");
    setPhone("");
    setSvc("");
    setMessage("");
    setStatus("idle");
    setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setStatus("submitting");
    setErrorMsg("");

    try {
      await submitEnquiry({
        name: name.trim(),
        phone: phone.trim(),
        category: cat || "General",
        service: svc.trim(),
        message: message.trim(),
      });
      setStatus("success");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(msg);
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-title"
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", damping: 24, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-t-3xl bg-surface sm:rounded-3xl"
          >
            <button
              onClick={() => {
                close();
                setTimeout(reset, 200);
              }}
              className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-muted"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {status === "success" ? (
              <div className="flex flex-col items-center px-6 py-12 text-center">
                <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 size={30} />
                </div>
                <h3 id="enquiry-title" className="text-xl font-semibold text-foreground">
                  Thank you!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Your enquiry has been received. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    close();
                    setTimeout(reset, 200);
                  }}
                  className="btn-primary mt-6"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-6 py-7 sm:px-8">
                <h3
                  id="enquiry-title"
                  className="text-xl font-semibold tracking-tight text-foreground"
                >
                  Request a Service
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Share a few details and our team will call you back.
                </p>

                <div className="mt-6 space-y-4">
                  <Field label="Full Name" required>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Your name"
                      className="input"
                    />
                  </Field>
                  <Field label="Phone Number" required>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      type="tel"
                      inputMode="tel"
                      placeholder="+91 90000 00000"
                      className="input"
                    />
                  </Field>
                  <Field label="Category">
                    <select
                      value={cat}
                      onChange={(e) => {
                        setCat(e.target.value);
                        setSvc("");
                      }}
                      className="input"
                    >
                      <option value="">Select a category</option>
                      {categories.map((c) => (
                        <option key={c.slug} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </Field>

                  {/* Service dropdown — auto-populated based on selected category */}
                  {cat && (
                    <Field label="Service">
                      <select
                        value={svc}
                        onChange={(e) => setSvc(e.target.value)}
                        className="input"
                      >
                        <option value="">Select a service (optional)</option>
                        {(categories.find((c) => c.name === cat)?.subservices ?? []).map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </Field>
                  )}

                  <Field label="Message">
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      placeholder="Tell us what you need"
                      className="input resize-none"
                    />
                  </Field>
                </div>

                {status === "error" && (
                  <p className="mt-3 text-sm text-primary" role="alert">
                    {errorMsg || "Something went wrong. Please try again."}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary mt-6 w-full disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {status === "submitting" && <Loader2 size={16} className="animate-spin" />}
                  {status === "submitting" ? "Sending…" : "Request Service"}
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  It's free — no account needed.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </span>
      {children}
    </label>
  );
}
