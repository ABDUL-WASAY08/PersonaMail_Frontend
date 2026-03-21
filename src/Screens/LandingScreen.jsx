import React, { useState, useEffect, useRef } from "react";
import {
  Mail,
  Sparkles,
  Shield,
  BarChart3,
  Users,
  Zap,
  Instagram,
  MessageSquare,
  PenTool,
  Target,
  Lock,
  CreditCard,
  Webhook,
  ArrowRight,
  Check,
  Star,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import Header from "../Components/Header";
import Userstore from "../Store/useUserStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LandingScreen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const aboutRef = useRef(null);
  const { isAuthenticated } = Userstore();
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const features = {
    core: [
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Omni-Auth System",
        description:
          "Seamless login with Email, Google, or Instagram. Your choice, your convenience.",
      },
      {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Centralized Dashboard",
        description:
          "Track Instagram engagement & email metrics in one beautiful interface.",
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "GraphQL Real-time",
        description:
          "Instant updates for comments, opens, and clicks - no page reload needed.",
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Profile & Settings",
        description:
          "Save brand details, logo, and tone preferences for consistent communication.",
      },
    ],
    email: [
      {
        icon: <PenTool className="w-6 h-6" />,
        title: "Dynamic Email Builder",
        description:
          "Drag-and-drop or simple text editor for professional emails in minutes.",
      },
      {
        icon: <Mail className="w-6 h-6" />,
        title: "Automated Sequences",
        description:
          "Smart drip campaigns: Welcome emails, discounts, follow-ups - all automated.",
      },
      {
        icon: <Target className="w-6 h-6" />,
        title: "Smart Segmentation",
        description:
          "Divide audience into 'Active Buyers', 'New Followers', and more.",
      },
      {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Email Tracking",
        description:
          "Real-time open rates, click-through rates, and engagement analytics.",
      },
    ],
    ai: [
      {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Instagram Style Cloner",
        description:
          "AI learns your writing style from past posts. Your voice, amplified.",
      },
      {
        icon: <MessageSquare className="w-6 h-6" />,
        title: "Comment-to-Email Trigger",
        description:
          "Auto-send detailed emails when someone comments 'Interested'.",
      },
      {
        icon: <Instagram className="w-6 h-6" />,
        title: "Content Repurposing",
        description:
          "One-click transformation of Instagram captions into newsletters.",
      },
      {
        icon: <PenTool className="w-6 h-6" />,
        title: "AI Subject Line Generator",
        description:
          "High-converting subject lines that boost open rates by up to 40%.",
      },
    ],
    business: [
      {
        icon: <CreditCard className="w-6 h-6" />,
        title: "Stripe Subscription",
        description:
          "Free tier: 3 AI generations, 100 emails. Pro: Unlimited everything.",
      },
      {
        icon: <Lock className="w-6 h-6" />,
        title: "Secure Token Storage",
        description:
          "Encrypted Instagram & Stripe tokens in MongoDB. Bank-grade security.",
      },
      {
        icon: <Webhook className="w-6 h-6" />,
        title: "Webhook Integration",
        description:
          "Auto-block access & notify on failed payments. No revenue loss.",
      },
    ],
  };

  const stats = [
    { value: "10x", label: "Faster email creation" },
    { value: "40%", label: "Higher open rates" },
    { value: "5k+", label: "Active creators" },
    { value: "99.9%", label: "Uptime SLA" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Social Media Manager",
      content:
        "PersonaMail transformed how we engage with our Instagram audience. The AI style cloner is pure magic!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108777-466fd053c2d1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Michael Chen",
      role: "Digital Creator",
      content:
        "The comment-to-email feature alone is worth the subscription. Automated engagement on steroids!",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Priya Patel",
      role: "E-commerce Owner",
      content:
        "From Instagram to email in one click. My conversion rates have never been better.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for testing the waters",
      features: [
        "3 AI generations/month",
        "100 emails/month",
        "Basic analytics",
        "Email support",
      ],
      buttonText: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For serious creators",
      features: [
        "Unlimited AI generations",
        "Unlimited emails",
        "Advanced analytics",
        "Custom RAG models",
        "Priority support",
        "Webhook access",
      ],
      buttonText: "Get Started",
      popular: true,
    },
  ];
  const handleTrailSubmit = () => {
    if (!isAuthenticated) {
      toast.error("Please login first to connect Instagram");
      navigate("/Authorization");
      return;
    }

    toast.success("Setup your Instagram...");
    navigate("/InstaSetUp");
  };
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header
        scrolled={scrolled}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        featuresRef={featuresRef}
        pricingRef={pricingRef}
        aboutRef={aboutRef}
      />

      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">
                  AI-Powered Email Marketing
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
                Scale your Instagram audience with{" "}
                <span className="font-semibold text-blue-600">
                  AI-powered Emails
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                Transform Instagram engagement into email revenue. Our AI learns
                your style, automates responses, and grows your business while
                you sleep.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4"
                onClick={handleTrailSubmit}
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl text-lg font-medium transition border border-gray-200 flex items-center justify-center gap-2">
                  Watch Demo
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="ml-2 text-sm text-gray-500">
                    Dashboard · PersonaMail AI
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-gray-900">
                      Email Campaign Performance
                    </h3>
                    <span className="text-sm text-blue-600">Live</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="text-sm text-gray-600 mb-1">
                        Open Rate
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        68%
                      </div>
                      <div className="text-xs text-green-600">↑ 12%</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <div className="text-sm text-gray-600 mb-1">
                        Click Rate
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        42%
                      </div>
                      <div className="text-xs text-green-600">↑ 8%</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Instagram className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          New follower engaged
                        </div>
                        <div className="text-xs text-gray-500">
                          Auto-sent welcome email
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">2m ago</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mail className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          Email opened
                        </div>
                        <div className="text-xs text-gray-500">
                          Spring Sale Campaign
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">5m ago</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 text-yellow-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          Comment detected
                        </div>
                        <div className="text-xs text-gray-500">
                          'Interested' - auto-reply sent
                        </div>
                      </div>
                      <span className="text-xs text-gray-400">12m ago</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium">AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" ref={featuresRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Everything you need to{" "}
              <span className="font-semibold text-blue-600">
                scale your audience
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features that combine Instagram engagement with
              AI-powered email marketing
            </p>
          </div>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Core Platform
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.core.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Email Hero Features
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.email.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 text-purple-600">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                AI & Social Integration
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.ai.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 text-green-600">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8 ">
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Monetization & Security
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {features.business.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-4 text-yellow-600">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="py-20 bg-white pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              From Instagram to email in{" "}
              <span className="font-semibold text-blue-600">
                3 simple steps
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Our AI does the heavy lifting while you focus on creating great
              content
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect Instagram",
                description:
                  "Link your Instagram account securely. We analyze your posting style and audience.",
                icon: <Instagram className="w-8 h-8" />,
              },
              {
                step: "02",
                title: "AI Learns Your Voice",
                description:
                  "Our RAG model studies your past posts to clone your unique writing style.",
                icon: <Sparkles className="w-8 h-8" />,
              },
              {
                step: "03",
                title: "Automate & Scale",
                description:
                  "Watch as comments turn into emails, and followers turn into customers.",
                icon: <Zap className="w-8 h-8" />,
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                {idx < 2 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent transform -translate-x-16"></div>
                )}
                <div className="bg-gray-50 p-8 rounded-2xl text-center relative">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                    {item.icon}
                  </div>
                  <div className="text-sm font-semibold text-blue-600 mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Loved by{" "}
              <span className="font-semibold text-blue-600">
                creators worldwide
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of creators who've transformed their Instagram
              engagement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pointer-events-none">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing most important  here is work*/}
      <section id="pricing" ref={pricingRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Simple, transparent{" "}
              <span className="font-semibold text-blue-600">pricing</span>
            </h2>
            <p className="text-xl text-gray-600">
              Start free, upgrade when you need more power
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-2xl border ${
                  plan.popular
                    ? "border-blue-200 bg-gradient-to-b from-blue-50 to-white shadow-xl"
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500">{plan.period}</span>
                  )}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-medium transition ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section:one button  */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-white mb-4 pointer-events-none">
            Ready to scale your{" "}
            <span className="font-semibold text-blue-400 ">
              Instagram audience?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 pointer-events-none">
            Join thousands of creators who've turned followers into customers
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition shadow-xl shadow-blue-500/25 inline-flex items-center gap-2 group">
            Start Your Free Trial
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
          <p className="text-gray-400 mt-4 text-sm pointer-events-none">
            No credit card required · 14-day free trial
          </p>
        </div>
      </section>
      <footer className="bg-white border-t border-gray-100 py-12 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900">
                  PersonaMail
                </span>
              </div>
              <p className="text-gray-500 text-sm">
                AI-powered email marketing for Instagram creators.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection(featuresRef)}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(pricingRef)}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    About
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-gray-900">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <style jsx="true">{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default LandingScreen;
