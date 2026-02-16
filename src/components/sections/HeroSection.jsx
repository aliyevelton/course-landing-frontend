import { useRef, useState } from 'react';
import { Button } from '../ui/Button';

function getYoutubeId(url) {
  if (!url) return null;
  const embedMatch = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch) return embedMatch[1];
  const watchMatch = url.match(/[?&]v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) return watchMatch[1];
  return null;
}

function HeroVideo({ videoUrl }) {
  const iframeRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const videoId = getYoutubeId(videoUrl);
  if (!videoId) return null;

  const embedParams = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    controls: '0',
    rel: '0',
    modestbranding: '1',
    iv_load_policy: '3',
    disablekb: '1',
    enablejsapi: '1',
  });
  const embedUrl = `https://www.youtube.com/embed/${videoId}?${embedParams}`;

  const handleUnmute = () => {
    const iframe = iframeRef.current;
    if (iframe?.contentWindow) {
      iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'unMute', args: [] }), 'https://www.youtube.com');
      setMuted(false);
    }
  };

  return (
    <div className="relative w-full aspect-video max-w-xl mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/20">
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title="Course introduction"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
      {muted && (
        <button
          type="button"
          onClick={handleUnmute}
          className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/70 text-white text-sm font-medium hover:bg-black/90 transition-colors flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </svg>
          Unmute
        </button>
      )}
    </div>
  );
}

const SupportIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CohortsIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const InterviewIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
  </svg>
);

const InfIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const BadgeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);


const FEATURES = [
  { icon: InfIcon, label: 'Lifetime access' },
  { icon: SupportIcon, label: '24/7 Support' },
  { icon: CohortsIcon, label: 'Weekly Cohorts' },
  { icon: InterviewIcon, label: 'Mock interviews' },
];

export function HeroSection({ payload }) {
  if (!payload) return null;
  const { headline, subheadline, primaryCtaText, primaryCtaUrl, videoUrl } = payload;
  const hasVideo = !!videoUrl;

  return (
    <section className="relative pt-8 pb-12 md:pt-8 md:pb-12 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.4),transparent)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      <div className={`relative container mx-auto px-4 ${hasVideo ? 'max-w-6xl' : 'max-w-4xl'}`}>
        <div className="text-center mb-10 md:mb-14 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <BadgeIcon />
            <span className="text-sm font-medium text-emerald-200">Python • Data Structures &amp; Algorithms</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {headline}
          </h1>
        </div>
        <div className={`grid gap-10 lg:gap-14 items-center ${hasVideo ? 'lg:grid-cols-2' : ''} ${!hasVideo ? 'max-w-2xl mx-auto' : ''}`}>
          <div className={`animate-fade-in-up ${hasVideo ? 'order-2 lg:order-1 lg:ml-auto lg:max-w-md lg:text-left lg:pl-8' : 'text-center'}`}>
            {subheadline && <p className={`text-xl text-slate-300 mb-5 ${hasVideo ? 'lg:text-left' : ''}`}>{subheadline}</p>}
            {primaryCtaText && (
              <div className="flex flex-col items-center gap-3">
                <a href={primaryCtaUrl || '#pricing'}>
                  <Button variant="primary" className="text-lg px-10 py-4 rounded-2xl">
                    {primaryCtaText}
                  </Button>
                </a>
                <a href="#curriculum" className="text-white text-sm font-medium uppercase underline underline-offset-4 hover:text-emerald-200 transition-colors">
                  Or view the curriculum
                </a>
              </div>
            )}
          </div>
          {hasVideo && (
            <div className="animate-fade-in-up order-1 lg:order-2">
              <HeroVideo videoUrl={videoUrl} />
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-6 md:gap-8 justify-center text-slate-400 mt-10 md:mt-14 animate-fade-in-up">
          {FEATURES.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-emerald-400">
                <Icon />
              </span>
              <span className="font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
