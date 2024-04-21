export function getSelectedModel(): string {
    if (typeof window !== 'undefined') {
      const storedModel = localStorage.getItem('selectedModel');
      return storedModel || 'aia';
    } else {
      // Default model
      return 'aia';
    }
  }