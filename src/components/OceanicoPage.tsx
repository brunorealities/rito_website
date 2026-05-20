import { useEffect } from 'react';

export function OceanicoPage() {
  useEffect(() => {
    // Set page title for clarity when visiting this route
    document.title = 'Rito — Oceânico';
  }, []);

  return (
    <div className="min-h-screen bg-warm-white" id="oceanico-root">
      {/* Page is intentionally left blank for future redirects */}
    </div>
  );
}

export default OceanicoPage;
