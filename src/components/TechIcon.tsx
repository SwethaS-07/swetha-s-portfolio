import {
  siAngular,
  siApachemaven,
  siCloudinary,
  siCss,
  siEclipseide,
  siGit,
  siGithub,
  siHibernate,
  siHtml5,
  siIntellijidea,
  siJavascript,
  siJsonwebtokens,
  siMysql,
  siOpencv,
  siOpenjdk,
  siPostman,
  siPython,
  siSpringboot,
  siTypescript,
  type SimpleIcon,
} from "simple-icons";
import {
  Binary,
  BrainCircuit,
  Boxes,
  Database,
  FileCode2,
  KeyRound,
  Lock,
  Network,
  Puzzle,
  ScanEye,
  Sigma,
  Sparkles,
  Table,
  Terminal,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

const brands: Record<string, SimpleIcon> = {
  java: siOpenjdk,
  python: siPython,
  javascript: siJavascript,
  typescript: siTypescript,
  "spring boot": siSpringboot,
  hibernate: siHibernate,
  "jwt authentication": siJsonwebtokens,
  jwt: siJsonwebtokens,
  html5: siHtml5,
  css3: siCss,
  angular: siAngular,
  mysql: siMysql,
  git: siGit,
  github: siGithub,
  postman: siPostman,
  maven: siApachemaven,
  "intellij idea": siIntellijidea,
  eclipse: siEclipseide,
  cloudinary: siCloudinary,
  "opencv basics": siOpencv,
};

const fallbacks: Record<string, LucideIcon> = {
  sql: Table,
  "rest apis": Network,
  jpa: Database,
  "role-based access control": Lock,
  svm: Sigma,
  "neural networks": BrainCircuit,
  "gesture recognition": ScanEye,
  "pattern recognition": Sparkles,
  "data preprocessing": Waypoints,
  "database design": Database,
  "crud operations": Boxes,
  "pyautogui / scripting": Terminal,
  "data structures & algorithms": Binary,
  "object-oriented programming": Boxes,
  "problem solving": Puzzle,
  "vs code": FileCode2,
};

/** Brand-accurate colours that stay legible on a dark surface. */
const colorOverrides: Record<string, string> = {
  java: "#E76F00",
  github: "#E6EDF3",
  angular: "#DD0031",
  "intellij idea": "#FE315D",
  "jwt authentication": "#D63AFF",
  jwt: "#D63AFF",
};

export function TechIcon({ name, className = "h-3.5 w-3.5" }: { name: string; className?: string }) {
  const key = name.toLowerCase();
  const brand = brands[key];

  if (brand) {
    return (
      <svg
        role="img"
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={className}
        fill={colorOverrides[key] ?? `#${brand.hex}`}
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const Fallback = fallbacks[key] ?? KeyRound;
  return <Fallback className={`${className} text-cyan`} aria-hidden="true" />;
}
