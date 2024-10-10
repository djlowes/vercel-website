'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Example investment data - replace with your actual investments
const investments = [
  { name: 'Groq', logo: '/images/groq.png', description: 'NA' },
  { name: 'Branch', logo: '/path-to-logo-b.png', description: 'Enterprise-scale AI solutions for government contracts' },
  { name: 'Zeromark', logo: '/path-to-logo-c.png', description: 'Innovative hardware startup enabling edge AI capabilities' },
  { name: 'Inversion Space', logo: '/path-to-logo-d.png', description: 'AI-powered healthcare diagnostics platform' },
  { name: 'spot.ai', logo: '/path-to-logo-e.png', description: 'Next-generation AI chips for edge computing' },
  { name: 'salt.ai', logo: '/path-to-logo-e.png', description: 'Next-generation AI chips for edge computing' }
  // Add more investments as needed
];

const InvestmentCarousel = () => {
  const [activeIndices, setActiveIndices] = useState([0, 1, 2, 3, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndices(prevIndices => 
        prevIndices.map(index => (index + 1) % investments.length)
      );
    }, 3000); // Change logos every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-around items-center h-60 bg-gray-800 rounded-lg p-4">
      {activeIndices.map((index, i) => (
        <div key={i} className="w-1/5 h-full flex flex-col items-center justify-center p-2">
          <div className="relative w-24 h-24 mb-2">
            <Image
              src={investments[index].logo}
              alt={investments[index].name}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className="text-xs text-center text-gray-300">{investments[index].name}</p>
        </div>
      ))}
    </div>
  );
};

const InvestmentThesis = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-primary mb-8">Thesis</h1>
      
      <div className="space-y-4 text-sm">
        <p>
          I believe that artificial intelligence (AI) is poised to transform multiple facets of everyday life in the near to medium term. This transformation will span across industries, reshaping interactions with technology, enhancing productivity, and driving innovation. The impact of AI will be realized not only at the software layer—the primary interface for user interaction—but also through hardware advancements and integrated solutions that enable AI capabilities.
        </p>

        <p>
          I recognize the critical role of both developer tooling and cross-industry applications in accelerating AI adoption. By investing in AI-enhanced tools, platforms, and integrated systems, we can drive efficiency and unlock new possibilities within the technology sector and beyond.
        </p>

        <p>
          My investment focus encompasses both large-scale opportunities and innovative startups. I target businesses that secure government contracts and engage with major enterprises due to their capacity for widespread AI adoption and substantial market impact. Simultaneously, I allocate resources to disruptive startups with the agility and ingenuity to redefine industries.
        </p>

        <p>
          Efficiency powered by AI is a cornerstone of scalable and sustainable business models. Companies leveraging AI to optimize operations, reduce costs, and swiftly adapt to market changes are positioned to outpace competitors and achieve rapid growth.
        </p>

        <p>
          Fundamentally, I invest in exceptional people. Individuals with grit, determination, curiosity, and a relentless pursuit of excellence drive successful ventures. Founders who employ systems thinking, understand game theory, and navigate complex markets with strategic insight are invaluable.
        </p>

        <p>
          I also prioritize ethical considerations and regulatory compliance in AI investments. Companies committed to responsible AI practices and aligned with evolving regulations are more likely to achieve long-term success and public trust.
        </p>
      </div>

      <h1 className="text-3xl font-bold text-primary mt-12 mb-6">Key Principles</h1>
      <ul className="list-disc pl-6 space-y-2 mb-8 text-sm">
        <li><strong>AI's Transformative Potential</strong>: Capitalizing on AI's ability to revolutionize industries and daily life.</li>
        <li><strong>Comprehensive Technological Approach</strong>: Investing in software, hardware, and integrated AI solutions.</li>
        <li><strong>Empowering Innovation</strong>: Supporting tools and applications that accelerate AI adoption and efficiency.</li>
        <li><strong>Balanced Market Focus</strong>: Targeting large-scale contracts while investing in disruptive startups.</li>
        <li><strong>Efficiency and Scalability</strong>: Prioritizing businesses that leverage AI for operational excellence.</li>
        <li><strong>People and Leadership</strong>: Backing exceptional individuals with strategic vision and execution capabilities.</li>
        <li><strong>Ethical and Sustainable Practices</strong>: Emphasizing responsible AI development and regulatory alignment.</li>
        <li><strong>Fundamental Value Investing</strong>: Evaluating intrinsic company value and competitive advantages.</li>
        <li><strong>Knowledge-Driven Decisions</strong>: Leveraging expertise and continuous learning in AI and related fields.</li>
        <li><strong>Risk Management and Diversification</strong>: Mitigating risks through diversified investments and macroeconomic awareness.</li>
      </ul>

      <h1 className="text-3xl font-bold text-primary mt-12 mb-8">Investments</h1>
      <InvestmentCarousel />
    </div>
  );
};

export default InvestmentThesis;