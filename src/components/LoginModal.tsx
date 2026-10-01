import { useState, useEffect } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-[460px] rounded-lg overflow-hidden shadow-2xl"
        style={{ backgroundColor: "#1a1f6e" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <h2 className="text-white text-2xl font-bold">
            Sign Into Online Banking
          </h2>
          <button
            onClick={onClose}
            className="text-white text-2xl font-light hover:text-gray-300 transition-colors leading-none"
            aria-label="Close"
          >
            &#x2715;
          </button>
        </div>

        {/* Form */}
        <div className="px-6 pb-4">
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <div className="flex-1">
              <label className="block text-white text-sm mb-1">Username</label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-300 text-gray-700 text-sm outline-none focus:ring-2 focus:ring-purple-400 bg-white"
              />
            </div>
            <div className="flex-1">
              <label className="block text-white text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-full border border-gray-300 text-gray-700 text-sm outline-none focus:ring-2 focus:ring-purple-400 bg-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <button className="bg-purple-700 hover:bg-purple-900 text-white font-bold uppercase text-sm px-10 py-3 rounded-full transition-colors tracking-wider">
              LOGIN
            </button>
            <label className="flex items-center gap-2 text-white text-sm cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 accent-purple-600"
              />
              Remember Me
            </label>
          </div>

          {/* Links */}
          <div className="text-center mb-4 space-y-1">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              <a href="/enroll" className="text-white text-xs hover:underline">
                Enroll in Online Banking
              </a>
              <a href="/demo" className="text-white text-xs hover:underline">
                View Demo
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              <a
                href="/forgot-username"
                className="text-white text-xs hover:underline"
              >
                Forgot / Unlock Username?
              </a>
              <a
                href="/forgot-password"
                className="text-white text-xs hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          {/* App Store Badges */}
          <div className="flex justify-center gap-3 mb-5">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10 object-contain"
              />
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 object-contain"
              />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-500 mx-6" />

        {/* Promo Card */}
        <div className="m-4 bg-white rounded-lg overflow-hidden">
          <div className="px-6 pt-5 pb-3 text-center">
            <p className="text-purple-800 font-bold text-lg mb-3">
              A New Path Forward
            </p>
            <img
              src="https://c.animaapp.com/mp6ve6ukPxqINY/assets/logo.png"
              alt="UNIFY is now Community America Credit Union"
              className="mx-auto h-14 object-contain mb-3"
            />
            <a
              href="/community-america"
              className="inline-block bg-purple-700 hover:bg-purple-900 text-white font-bold uppercase text-sm px-8 py-3 rounded-full tracking-wider transition-colors"
            >
              LEARN MORE
            </a>
          </div>
          <img
            src="https://c.animaapp.com/mp6ve6ukPxqINY/assets/hero-1.jpg"
            alt="A New Path Forward"
            className="w-full h-48 object-cover object-top"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
      </div>
    </div>
  );
};
