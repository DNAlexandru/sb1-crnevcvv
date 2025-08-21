import React from 'react';
import ScrollAnimation from '../utils/ScrollAnimation';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  const alignment = centered ? 'text-center' : 'text-left';
  const maxWidth = centered ? 'max-w-4xl mx-auto' : 'max-w-4xl';

  return (
    <div className={`mb-16 ${alignment} ${className}`}>
      <ScrollAnimation animation="slide-up">
        <h2 className={`section-title ${maxWidth}`}>
          {title}
        </h2>
      </ScrollAnimation>
      
      {subtitle && (
        <ScrollAnimation animation="slide-up" delay={200}>
          <div className={`section-subtitle ${maxWidth}`}>
            {subtitle}
          </div>
        </ScrollAnimation>
      )}
      
      <ScrollAnimation animation="fade-in" delay={400}>
        <div className={`w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full ${
          centered ? 'mx-auto' : ''
        }`} />
      </ScrollAnimation>
    </div>
  );
};

export default SectionHeading;