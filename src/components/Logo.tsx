
import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`}>
      <svg 
        viewBox="0 0 128 56" 
        width="128" 
        height="56" 
        fill="currentColor"
        className="transition-transform duration-300 hover:scale-105"
      >
        <g>
          <path d="M25.8,10c-1.5-0.9-3.4-0.9-5,0L8.7,17.6c-1.5,0.9-2.5,2.6-2.5,4.4v15.2c0,1.8,1,3.5,2.5,4.4l12.1,7.6c1.5,0.9,3.4,0.9,5,0l12.1-7.6c1.5-0.9,2.5-2.6,2.5-4.4V22c0-1.8-1-3.5-2.5-4.4L25.8,10z M36.4,37.2c0,0.9-0.5,1.7-1.3,2.2l-12.1,7.6c-0.8,0.5-1.7,0.5-2.5,0l-12.1-7.6c-0.8-0.5-1.3-1.3-1.3-2.2V22c0-0.9,0.5-1.7,1.3-2.2l12.1-7.6c0.8-0.5,1.7-0.5,2.5,0l12.1,7.6c0.8,0.5,1.3,1.3,1.3,2.2V37.2z"/>
          <path d="M31.9,26.1c-0.7-0.5-1.7-0.5-2.5,0l-6.1,3.8c-0.8,0.4-1.3,1.3-1.3,2.2v7.6c0,0.9,0.5,1.7,1.3,2.2l6.1,3.8c0.8,0.5,1.7,0.5,2.5,0l6.1-3.8c0.8-0.4,1.3-1.3,1.3-2.2v-7.6c0-0.9-0.5-1.7-1.3-2.2L31.9,26.1z"/>
        </g>
        <text x="46" y="36" fontFamily="Tango Sans, sans-serif" fontSize="24" fontWeight="bold">StudyJob</text>
      </svg>
    </Link>
  );
};

export default Logo;
