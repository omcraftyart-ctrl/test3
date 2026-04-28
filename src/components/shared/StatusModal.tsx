import { AnimatePresence, motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { StyledText } from '../../data/weddingContent';

export type StatusModalState = {
  show: boolean;
  type: 'success' | 'error';
  title: string;
  message: string;
};

type StatusModalProps = {
  modal: StatusModalState;
  onClose: () => void;
  closeLabel: StyledText;
};

export function StatusModal({ modal, onClose, closeLabel }: StatusModalProps) {
  return (
    <AnimatePresence>
      {modal.show && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 relative overflow-hidden p-8 text-center"
          >
            <div
              className={cn(
                'w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6',
                modal.type === 'success' ? 'bg-primary-accent/10' : 'bg-red-100',
              )}
            >
              {modal.type === 'success' ? (
                <Check className="w-10 h-10 text-primary-accent" />
              ) : (
                <X className="w-10 h-10 text-red-500" />
              )}
            </div>
            <h3 className="text-4xl font-headings text-primary-accent mb-4">{modal.title}</h3>
            <p className="text-text-secondary text-lg italic mb-8">{modal.message}</p>
            <button
              onClick={onClose}
              className="bg-primary-accent text-white px-10 py-3 rounded-full font-body tracking-wider font-semibold w-full"
              style={closeLabel.style}
            >
              {closeLabel.value}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
