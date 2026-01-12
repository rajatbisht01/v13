import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Loader2, Phone, Mail, Sparkles, ExternalLink, Building2, MapPin, ArrowRight, BookOpen } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
  hasServiceLinks?: boolean;
  services?: string[];
}

const SYSTEM_PROMPT = `You are a business consultant representing Vi-3 Technologies Private Limited, a premier enterprise IT solutions provider based in Chennai, India.

COMPANY IDENTITY:
- Founded: December 2025 
- Founders: 
  * Gajendrakumar GK: 30+ years IT experience (Former Senior Director at Cloud Kinetics, Director at HCL Technologies)
  * Baskar Maruthai: 28+ years global experience (PwC Czech Republic, HCL Technologies across USA, Switzerland, Czech Republic, Singapore)
- Location: Chennai, Tamil Nadu, India
- Contact: +91-7010351330 | contact@vi3technologies.com
- Website: vi3technologies.com

COMPREHENSIVE SERVICE PORTFOLIO (19 Services across 6 Categories):

**CORE SERVICES:**
1. AI & Data Science - Enterprise AI Stacks, Agentic AI, Multi-Agent Systems, MLOps, LLM Integration, Predictive Analytics
2. Cybersecurity & Resilience - Zero Trust Architecture, SOC 24/7, CNAPP, MDR, Quantum-Safe Encryption, Vulnerability Assessment
3. DevSecOps Engineering - Kubernetes, Docker, CI/CD pipelines with security integration
4. 24×7 Managed Services - Proactive monitoring, SLA-driven support, Automated patching, Help Desk
5. Cloud & Infrastructure - AWS, Azure, GCP (Migration, Optimization, Hybrid Solutions, On-Prem modernization)
6. Quantum Computing - Readiness consulting, Quantum-Safe cryptography, Hybrid quantum-classical workflows

**AI & AUTOMATION:**
7. AI Governance - Responsible AI frameworks, compliance, ethics
8. Agentic AI & AI Agents - Autonomous systems with planning and decision-making
9. AI Workflow Automation - Intelligent process automation, end-to-end orchestration
10. Data Science - AutoML, real-time analytics, privacy-preserving solutions

**BUSINESS SOLUTIONS:**
11. Digital Transformation - AI-driven business transformation, cloud adoption
12. Web 3.0 Solutions - Blockchain, smart contracts, decentralized applications

**OPERATIONS:**
13. AIOps - AI-powered IT operations, anomaly detection, self-healing
14. IT Infrastructure - Enterprise infrastructure management, hybrid orchestration
15. Architecture & Engineering - Cloud-native, event-driven, security-first design

**SECURITY & QUALITY:**
16. Application Security - DevSecOps, RASP, continuous security testing
17. Quality Assurance & Audit - Automated testing, compliance auditing

**MANAGEMENT:**
18. Staff Management - IT workforce solutions, AI-driven talent acquisition
19. Project Management - AI analytics, automated workflows, agile delivery

INDUSTRIES SERVED:
Banking & Finance, Healthcare, Manufacturing, Telecommunications, Automotive (IT systems), Public Sector, Retail, Insurance, Energy, Oil & Gas, Life Sciences, Aerospace & Defense, Real Estate, Professional Services, and more.

KEY PARTNERS:
AWS, Microsoft Azure, Google Cloud, Redington, IBM, Nutanix, AccuKnox, CoreStack, Flexera, Databricks, ServiceNow, Workday, NetApp, Zoho, CrowdStrike

COMPANY VALUES:
• Security-First DNA: Security is foundational, not an add-on
• Intelligent Scalability: AI-powered systems that grow with your business
• Unwavering Support: 24/7 reliability and proactive optimization
• Hybrid Agility: Balance of On-Premises control with Cloud scale

OPERATIONAL MODEL (4 Phases):
1. Audit & Discover - Deep dive into existing infrastructure
2. Architecture - Designing secure, scalable blueprints
3. Engineering - Hands-on deployment and integration
4. Sustain (24/7) - Round-the-clock monitoring and optimization

RESPONSE GUIDELINES:
1. BE INFORMATIVE: Provide detailed information about Vi-3's services, experience, and capabilities
2. TONE: Professional, confident, consultative - speak as a senior enterprise advisor
3. STRUCTURE: Lead with direct value, then provide 2-5 bullet points using "•"
4. BREVITY: 4-6 sentences for simple queries, 8-12 for complex topics requiring detail
5. CONTACT INFO: Include contact details naturally when relevant
6. SERVICE MENTIONS: When discussing specific services, mention them by name so they can be linked
7. EXAMPLES: Use concrete examples from relevant industries when helpful
8. CALL-TO-ACTION: End with helpful next steps or questions

FORMATTING:
- Use "•" for bullet points
- Keep paragraphs to 1-2 sentences
- When mentioning specific services, use their exact names from the list above

OUT-OF-SCOPE TOPICS:
For questions completely unrelated to business or technology (recipes, sports, entertainment, personal advice):
Politely redirect: "I'm focused on helping with enterprise technology needs. Let me share what Vi-3 Technologies can do for your organization..." then briefly list relevant services.

REMEMBER: You represent a B2B enterprise IT company with 58+ years of combined founder experience serving global enterprises. Be helpful, informative, and professional.`;

const SERVICES_MAP: Record<string, string> = {
  "AI & Data Science": "ai-data-science",
  "Cybersecurity": "cybersecurity",
  "DevSecOps": "devsecops",
  "Managed Services": "managed-services",
  "Cloud": "cloud-infrastructure",
  "Quantum Computing": "quantum-computing",
  "AI Governance": "ai-governance",
  "Agentic AI": "agentic-ai",
  "AI Workflow Automation": "workflow-automation",
  "Data Science": "data-science",
  "Digital Transformation": "digital-transformation",
  "Web 3.0": "web3",
  "AIOps": "aiops",
  "IT Infrastructure": "it-infrastructure",
  "Architecture": "architecture",
  "Application Security": "application-security",
  "Quality Assurance": "quality-assurance",
  "Staff Management": "staff-management",
  "Project Management": "project-management"
};

// const SUGGESTED_QUESTIONS = [
//   "Tell me about Vi-3 Technologies",
//   "What AI solutions do you offer?",
//   "How does your cybersecurity work?",
//   "Can you help with cloud migration?",
//   "What industries do you serve?",
//   "Tell me about your founders"
// ];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Vi-3 Welcomes you, How can i assist you?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleCall = () => {
    window.location.href = "tel:+917010351330";
  };

  const handleEmail = () => {
    window.location.href = "mailto:contact@vi3technologies.com?subject=Enterprise%20IT%20Inquiry%20from%20Vi-3%20Website&body=Hello%20Vi-3%20Technologies%20Team,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20your%20enterprise%20IT%20solutions.%0D%0A%0D%0A";
  };

  const handleWebsite = () => {
    window.open("http://vi3technologies.com", "_blank");
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
    setShowSuggestions(false);
    setTimeout(() => sendMessage(question), 100);
  };

  const handleServiceClick = (serviceSlug: string) => {
    window.open(`/services#${serviceSlug}`, "_blank");
  };

  const extractServiceLinks = (content: string): string[] => {
    const foundServices: string[] = [];
    Object.entries(SERVICES_MAP).forEach(([serviceName, slug]) => {
      if (content.toLowerCase().includes(serviceName.toLowerCase())) {
        foundServices.push(slug);
      }
    });
    return [...new Set(foundServices)]; // Remove duplicates
  };

  const cleanResponse = (content: string): string => {
    let cleaned = content.trim();
    
    cleaned = cleaned.replace(/\*\*([^*]+)\*\*/g, '$1');
    cleaned = cleaned.replace(/\*([^*]+)\*/g, '$1');
    cleaned = cleaned.replace(/^[\-\*]\s+/gm, '• ');
    cleaned = cleaned.replace(/^\d+\.\s+/gm, '• ');
    cleaned = cleaned.replace(/\n{3,}/g, '\n\n');
    
    const aiPhrases = [
      /I'm (just )?an AI/gi,
      /As an AI/gi,
      /I don't have personal/gi,
      /I apologize for (any )?confusion/gi,
      /my knowledge cutoff/gi,
      /I'm a language model/gi,
      /I'm a chatbot/gi,
      /As a chatbot/gi
    ];
    
    aiPhrases.forEach(phrase => {
      cleaned = cleaned.replace(phrase, '');
    });
    
    cleaned = cleaned.replace(/\n{3,}/g, '\n\n').trim();
    
    return cleaned;
  };

  const sendMessage = async (suggestedInput?: string) => {
    const messageText = suggestedInput || input.trim();
    if (!messageText || isLoading) return;

    const userMessage: Message = { 
      role: "user", 
      content: messageText,
      timestamp: new Date()
    };
    const conversationHistory = [...messages, userMessage];
    setMessages(conversationHistory);
    setInput("");
    setIsLoading(true);
    setShowSuggestions(false);

    let assistantContent = "";

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              {
                role: "system",
                content: SYSTEM_PROMPT
              },
              ...conversationHistory.slice(-8).map(msg => ({
                role: msg.role,
                content: msg.content
              }))
            ],
            temperature: 0.4,
            max_tokens: 600,
            top_p: 0.9,
            stream: true,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      if (!response.body) {
        throw new Error("No response body");
      }

      setMessages((prev) => [...prev, { 
        role: "assistant", 
        content: "",
        timestamp: new Date()
      }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine || trimmedLine.startsWith(":")) continue;

          if (trimmedLine.startsWith("data: ")) {
            const jsonStr = trimmedLine.slice(6);
            if (jsonStr === "[DONE]") break;

            try {
              const parsed = JSON.parse(jsonStr);
              const content = parsed.choices?.[0]?.delta?.content;

              if (content) {
                assistantContent += content;
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = {
                    role: "assistant",
                    content: assistantContent,
                    timestamp: new Date()
                  };
                  return updated;
                });
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }

      if (assistantContent) {
        const cleanedContent = cleanResponse(assistantContent);
        const serviceLinks = extractServiceLinks(cleanedContent);
        
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: cleanedContent,
            timestamp: new Date(),
            hasServiceLinks: serviceLinks.length > 0,
            services: serviceLinks
          };
          return updated;
        });
      }

      if (!assistantContent) {
        setMessages((prev) => prev.slice(0, -1));
        throw new Error("No response received");
      }
    } catch (error) {
      console.error("Chat error:", error);
      
      if (!assistantContent) {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          {
            role: "assistant",
            content: "I apologize for the technical difficulty. Please contact us directly:\n\n📧 contact@vi3technologies.com\n📞 +91-7010351330\n\nOur team will respond promptly to your inquiry.",
            timestamp: new Date()
          }
        ]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (content: string) => {
    return content.split('\n').map((line, i) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('•')) {
        return (
          <div key={i} className="flex gap-2.5 my-02 leading-relaxed">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5 font-bold">•</span>
            <span className="flex-1 leading-relaxed">{trimmedLine.substring(1).trim()}</span>
          </div>
        );
      }
      
      if (trimmedLine.includes('📧') || trimmedLine.includes('📞') || trimmedLine.includes('🌐')) {
        return (
          <div key={i} className="font-semibold text-blue-700 dark:text-blue-300 my-2 text-sm">
            {trimmedLine}
          </div>
        );
      }
      
      if (trimmedLine) {
        return <div key={i} className="my-1.5 leading-relaxed">{trimmedLine}</div>;
      }
      
      return <div key={i} className="h-2" />;
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6" />
              <motion.span 
                className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-50 w-[460px] max-w-[calc(100vw-3rem)] h-[760px] max-h-[88vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Professional Header */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white p-5 flex items-start justify-between">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/20">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg leading-tight">Vi-3 Technologies</h3>
                  <p className="text-xs text-blue-100 mt-1 leading-relaxed">
                    Enterprise IT Solutions Provider
                  </p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <motion.span 
                      className="w-2 h-2 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs text-emerald-300 font-medium">Available 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Actions */}
            <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-3 border-b border-slate-200 dark:border-slate-700 flex gap-2">
              <button
                onClick={handleCall}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-white dark:bg-slate-800 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all shadow-sm hover:shadow border border-slate-200 dark:border-slate-600"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </button>
              <button
                onClick={handleEmail}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 bg-white dark:bg-slate-800 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-400 transition-all shadow-sm hover:shadow border border-slate-200 dark:border-slate-600"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </button>
              <button
                onClick={handleWebsite}
                className="flex items-center justify-center gap-2 px-3 py-2.5 bg-white dark:bg-slate-800 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-slate-700 hover:text-purple-700 dark:hover:text-purple-400 transition-all shadow-sm hover:shadow border border-slate-200 dark:border-slate-600"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center shadow-md ${
                      message.role === "user"
                        ? "bg-gradient-to-br from-slate-700 to-slate-800 text-white"
                        : "bg-gradient-to-br from-blue-600 to-blue-700 text-white ring-2 ring-blue-200 dark:ring-blue-900"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-5 h-5" />
                    ) : (
                      <Building2 className="w-5 h-5" />
                    )}
                  </div>
                  <div className="flex-1 max-w-[85%]">
                    <div
                      className={`rounded-2xl px-4 py-3 shadow-md ${
                        message.role === "user"
                          ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-md"
                          : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-md border border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      <div className="text-[15px] leading-relaxed">
                        {formatMessage(message.content)}
                      </div>
                    </div>
                    {message.timestamp && (
                      <div className={`text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-1 ${
                        message.role === "user" ? "text-right" : "text-left"
                      }`}>
                        {formatTime(message.timestamp)}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center shadow-md ring-2 ring-blue-200 dark:ring-blue-900">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-bl-md px-4 py-3 border border-slate-200 dark:border-slate-700 shadow-md">
                    <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                  </div>
                </div>
              )}

              {/* Suggested Questions */}
              {/* {showSuggestions && messages.length === 1 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2 pt-2"
                >
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold px-1 uppercase tracking-wide flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Suggested Topics
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {SUGGESTED_QUESTIONS.map((question, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.08 }}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="w-full text-left px-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-700 dark:text-slate-300 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:shadow-md transition-all duration-200 font-medium"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )} */}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about our enterprise IT solutions..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isLoading}
                  className="rounded-xl px-6 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-300 disabled:to-slate-400 dark:disabled:from-slate-700 dark:disabled:to-slate-800 shadow-md hover:shadow-lg transition-all text-white font-semibold disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-3 text-xs text-slate-400 dark:text-slate-500">
                <span className="font-medium">Vi-3 Technologies © 2025</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  Chennai, India
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;