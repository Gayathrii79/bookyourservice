import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type EnquiryContextValue = {
  isOpen: boolean;
  /** Pre-filled category name (e.g. "Electrical") */
  category: string;
  /** Pre-filled service name (e.g. "Electrician"). Empty string when opening from category level. */
  service: string;
  open: (category?: string, service?: string) => void;
  close: () => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");

  const open = useCallback((cat?: string, svc?: string) => {
    setCategory(cat ?? "");
    setService(svc ?? "");
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <EnquiryContext.Provider value={{ isOpen, category, service, open, close }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiry must be used within EnquiryProvider");
  return ctx;
}
