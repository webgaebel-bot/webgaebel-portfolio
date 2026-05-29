import type { SVGProps } from 'react';

export default function XLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M19.944 2H17.1L12.1 8.82 7.6 2H2l7.28 10.44L2.4 22h2.86l5.18-7.1L14.9 22h5.6l-7.6-10.86L19.944 2Z" />
    </svg>
  );
}
