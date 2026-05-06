import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

export default function ToastNotification({ toast }) {
  return (
    <AnimatePresence>
      {toast.show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed bottom-10 right-10 z-[100]"
          role="status"
        >
          <div
            className={`flex items-center gap-4 px-8 py-5 rounded-[2rem] shadow-2xl backdrop-blur-2xl border border-[color:var(--color-border)] ${
              toast.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
            }`}
          >
            {toast.type === 'success' ? <CheckCircle size={24} /> : <XCircle size={24} />}
            <p className="font-bold tracking-tight">{toast.message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
