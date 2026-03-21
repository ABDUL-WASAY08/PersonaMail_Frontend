import React, { useState } from 'react';
import { 
  Instagram, 
  Lock, 
  Shield, 
  Database, 
  Sparkles,
  MessageSquare,
  Image,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
  Eye,
  Server,
  ChevronRight
} from 'lucide-react';

const SocialIntegration = () => {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false);
      // Handle actual Instagram connection logic here
      console.log('Connected to Instagram');
    }, 2000);
  };

  const benefits = [
    {
      icon: <Image className="w-5 h-5" />,
      title: "Sync last 50 posts",
      description: "Instant access to your recent content"
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Analyze writing style",
      description: "AI learns your unique voice and tone"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Automated Email triggers",
      description: "Turn comments into email campaigns"
    }
  ];

  const securityFeatures = [
    {
      icon: <Lock className="w-4 h-4" />,
      text: "No password storage"
    },
    {
      icon: <Shield className="w-4 h-4" />,
      text: "OAuth 2.0 encryption"
    },
    {
      icon: <Eye className="w-4 h-4" />,
      text: "Read-only access"
    },
    {
      icon: <Server className="w-4 h-4" />,
      text: "Secure token storage"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">AI-Powered Integration</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
            Connect your{' '}
            <span className="font-semibold text-blue-600">
              Social Accounts
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Unlock AI-powered email marketing by connecting your Instagram account.
            Our system learns your style and automates engagement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Main Connect Card */}
          <div className="relative">
            {/* Simple Card without heavy effects */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              {/* Instagram Header */}
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#833AB4] to-[#F56040] rounded-xl flex items-center justify-center shadow-sm">
                    <Instagram className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      Connect your Instagram Business Account
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Unlock AI-powered email marketing features
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits List */}
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 transition">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-medium mb-1">{benefit.title}</h3>
                        <p className="text-gray-500 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Connect Button */}
                <button
                  onClick={handleConnect}
                  disabled={isConnecting}
                  className="w-full mt-6 group"
                >
                  <div className={`bg-blue-600 hover:bg-blue-700 rounded-xl px-6 py-4 flex items-center justify-center gap-3 transition-all duration-200 shadow-sm hover:shadow-md ${isConnecting ? 'opacity-75 cursor-not-allowed' : ''}`}>
                    {isConnecting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span className="text-white font-medium">Connecting...</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-5 h-5 text-white" />
                        <span className="text-white font-medium">Connect via Meta</span>
                        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </button>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-2 pt-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-500">Secure OAuth 2.0 authentication</span>
                </div>
              </div>
            </div>
          </div>

          {/* Safety & Privacy Section */}
          <div className="space-y-6">
            {/* Safety Card */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Safety & Privacy First
                  </h3>
                  <p className="text-gray-500">
                    Your security is our priority. We use industry-standard encryption to keep your data safe.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {securityFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-gray-50 rounded-lg p-3">
                    <div className="text-blue-600">{feature.icon}</div>
                    <span className="text-sm text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">We don't store passwords.</span> All authentication is handled securely through Meta's OAuth protocol. We only receive the permissions you grant.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What happens next */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                What happens after connection?
              </h3>
              <div className="space-y-3">
                {[
                  "We analyze your last 50 posts to learn your writing style",
                  "Our AI builds a personalized voice model for your emails",
                  "You'll get access to the AI Email Builder",
                  "Start automating responses to Instagram comments"
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-blue-600 font-medium">{idx + 1}</span>
                    </div>
                    <span className="text-gray-600 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">10,000+</div>
                  <div className="text-xs text-gray-500">Active connections</div>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">Enterprise-grade</div>
                  <div className="text-xs text-gray-500">Encryption</div>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <div className="text-gray-900 font-semibold">Instant</div>
                  <div className="text-xs text-gray-500">Setup</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 text-center hover:border-gray-200 transition">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Image className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-gray-900 font-medium mb-2">Content Analysis</h4>
            <p className="text-gray-500 text-sm">AI analyzes your top-performing posts</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 text-center hover:border-gray-200 transition">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
              <MessageSquare className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="text-gray-900 font-medium mb-2">Smart Triggers</h4>
            <p className="text-gray-500 text-sm">Auto-respond to comments & messages</p>
          </div>
          
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-6 text-center hover:border-gray-200 transition">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-gray-900 font-medium mb-2">Performance Analytics</h4>
            <p className="text-gray-500 text-sm">Track email & social engagement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialIntegration;