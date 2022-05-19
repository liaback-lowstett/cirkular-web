export interface TechPlatformResult {
  header: string;
  body: string;
  identify: Platform;
  design: Platform;
  create: Platform;
  scale: Platform;
}

interface Platform {
  header: string;
  description: string;
}
