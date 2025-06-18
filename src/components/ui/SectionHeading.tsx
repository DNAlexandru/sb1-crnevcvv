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
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <ScrollAnimation animation="slide-up">
        <h2 className="section-title">{title}</h2>
        {subtitle && (
          <p className={`text-xl text-gray-600 mt-4 ${centered ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
        )}
      </ScrollAnimation>
    </div>
  );
};

export default SectionHeading;