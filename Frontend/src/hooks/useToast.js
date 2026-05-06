import { useState, useCallback } from 'react';

export function useToast() {
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });

  const showToast = useCallback((type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast({ show: false, type, message: '' }), 4000);
  }, []);

  return { toast, showToast };
}
