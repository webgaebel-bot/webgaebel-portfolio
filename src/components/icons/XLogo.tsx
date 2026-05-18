import type { SVGProps } from 'react';

export default function XLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 4l16 16" />
      <path d="M20 4L9.5 14.5" />
      <path d="M14.5 9.5L20 20" />
      <path d="M4 20l6.5-6.5" />
    </svg>
  );
}
