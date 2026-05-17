import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(path: string): string {
  if (!path) return '';
  if (path.startsWith('http') || path.startsWith('https') || path.startsWith('data:')) {
    return path;
  }
  
  let basePath = '';
  if (typeof window !== 'undefined') {
    if (window.location.hostname.endsWith('github.io')) {
      basePath = '/Mithun-Cards-Web';
    }
  } else {
    // Build time / SSR
    basePath = process.env.__NEXT_ROUTER_BASEPATH || process.env.NEXT_PUBLIC_BASE_PATH || '';
  }
  
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
