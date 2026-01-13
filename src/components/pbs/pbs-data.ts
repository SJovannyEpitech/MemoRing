import { Node, Edge } from '@xyflow/react';

export interface PBSNodeData extends Record<string, unknown> {
  label: string;
  category: string;
  isHighlighted?: boolean;
}

export const PBS_CATEGORIES = {
  HARDWARE: 'Hardware (Bague)',
  FIRMWARE: 'Firmware',
  APP: 'Application mobile',
  BACKEND: 'Backend & IA',
  SECURITY: 'Sécurité & confidentialité',
};

const CATEGORY_COLORS: Record<string, string> = {
  [PBS_CATEGORIES.HARDWARE]: '#8480F1', // brand
  [PBS_CATEGORIES.FIRMWARE]: '#C8C1F5', // brand-light
  [PBS_CATEGORIES.APP]: '#ABDCE1',      // accent-cyan
  [PBS_CATEGORIES.BACKEND]: '#CAE9DA',   // accent-mint
  [PBS_CATEGORIES.SECURITY]: '#1E1B4B', // text-dark
};

export const initialNodes: Node<PBSNodeData>[] = [
  // Root
  {
    id: 'root',
    type: 'input',
    data: { label: 'MemoRing', category: 'Root' },
    position: { x: 500, y: 0 },
    style: { background: '#000', color: '#fff', borderRadius: '1rem', border: '2px solid #555' },
  },

  // High-level Categories
  {
    id: 'hardware',
    data: { label: PBS_CATEGORIES.HARDWARE, category: PBS_CATEGORIES.HARDWARE },
    position: { x: 0, y: 150 },
    style: { background: CATEGORY_COLORS[PBS_CATEGORIES.HARDWARE], color: '#fff', borderRadius: '1rem' },
  },
  {
    id: 'firmware',
    data: { label: PBS_CATEGORIES.FIRMWARE, category: PBS_CATEGORIES.FIRMWARE },
    position: { x: 250, y: 150 },
    style: { background: CATEGORY_COLORS[PBS_CATEGORIES.FIRMWARE], color: '#fff', borderRadius: '1rem' },
  },
  {
    id: 'app',
    data: { label: PBS_CATEGORIES.APP, category: PBS_CATEGORIES.APP },
    position: { x: 500, y: 150 },
    style: { background: CATEGORY_COLORS[PBS_CATEGORIES.APP], color: '#fff', borderRadius: '1rem' },
  },
  {
    id: 'backend',
    data: { label: PBS_CATEGORIES.BACKEND, category: PBS_CATEGORIES.BACKEND },
    position: { x: 750, y: 150 },
    style: { background: CATEGORY_COLORS[PBS_CATEGORIES.BACKEND], color: '#fff', borderRadius: '1rem' },
  },
  {
    id: 'security',
    data: { label: PBS_CATEGORIES.SECURITY, category: PBS_CATEGORIES.SECURITY },
    position: { x: 1000, y: 150 },
    style: { background: CATEGORY_COLORS[PBS_CATEGORIES.SECURITY], color: '#fff', borderRadius: '1rem' },
  },

  // Hardware Children
  { id: 'h1', data: { label: 'Boîtier (forme, confort, materiaux)', category: PBS_CATEGORIES.HARDWARE }, position: { x: -100, y: 300 } },
  { id: 'h2', data: { label: 'Micro', category: PBS_CATEGORIES.HARDWARE }, position: { x: -100, y: 360 } },
  { id: 'h3', data: { label: 'Capteur tactile', category: PBS_CATEGORIES.HARDWARE }, position: { x: -100, y: 420 } },
  { id: 'h4', data: { label: 'Vibreur', category: PBS_CATEGORIES.HARDWARE }, position: { x: -100, y: 480 } },
  { id: 'h5', data: { label: 'Microcontroleur / SoC', category: PBS_CATEGORIES.HARDWARE }, position: { x: -100, y: 540 } },
  { id: 'h6', data: { label: 'Batterie + recharge', category: PBS_CATEGORIES.HARDWARE }, position: { x: -100, y: 600 } },
  { id: 'h7', data: { label: 'Design bague', category: PBS_CATEGORIES.HARDWARE }, position: { x: -100, y: 660 } },

  // Firmware Children
  { id: 'f1', data: { label: 'Gestion micro et taps', category: PBS_CATEGORIES.FIRMWARE }, position: { x: 150, y: 300 } },
  { id: 'f2', data: { label: 'Vibrations', category: PBS_CATEGORIES.FIRMWARE }, position: { x: 150, y: 360 } },
  { id: 'f3', data: { label: 'Communication BLE', category: PBS_CATEGORIES.FIRMWARE }, position: { x: 150, y: 420 } },
  { id: 'f4', data: { label: 'Economie d’energie', category: PBS_CATEGORIES.FIRMWARE }, position: { x: 150, y: 480 } },

  // App Children
  { id: 'a1', data: { label: 'Design & UX', category: PBS_CATEGORIES.APP }, position: { x: 400, y: 300 } },
  { id: 'a2', data: { label: 'UX/UI app', category: PBS_CATEGORIES.APP }, position: { x: 400, y: 360 } },
  { id: 'a3', data: { label: 'Pairage & configuration', category: PBS_CATEGORIES.APP }, position: { x: 400, y: 420 } },
  { id: 'a4', data: { label: 'Enregistrements', category: PBS_CATEGORIES.APP }, position: { x: 400, y: 480 } },
  { id: 'a5', data: { label: 'Timeline', category: PBS_CATEGORIES.APP }, position: { x: 400, y: 540 } },
  { id: 'a6', data: { label: 'Rappels & notifications', category: PBS_CATEGORIES.APP }, position: { x: 400, y: 600 } },

  // Backend/IA Children
  { id: 'b1', data: { label: 'Transcription', category: PBS_CATEGORIES.BACKEND }, position: { x: 650, y: 300 } },
  { id: 'b2', data: { label: 'Resumes automatiques', category: PBS_CATEGORIES.BACKEND }, position: { x: 650, y: 360 } },
  { id: 'b3', data: { label: 'Extraction des taches/evenements', category: PBS_CATEGORIES.BACKEND }, position: { x: 650, y: 420 } },
  { id: 'b4', data: { label: 'Analyse emotionnelle', category: PBS_CATEGORIES.BACKEND }, position: { x: 650, y: 480 } },
  { id: 'b5', data: { label: 'Rapports', category: PBS_CATEGORIES.BACKEND }, position: { x: 650, y: 540 } },

  // Security Children
  { id: 's1', data: { label: 'Sécurité & confidentialité', category: PBS_CATEGORIES.SECURITY }, position: { x: 900, y: 300 } },
  { id: 's2', data: { label: 'Chiffrement', category: PBS_CATEGORIES.SECURITY }, position: { x: 900, y: 360 } },
  { id: 's3', data: { label: 'Authentification', category: PBS_CATEGORIES.SECURITY }, position: { x: 900, y: 420 } },
  { id: 's4', data: { label: 'Consentement utilisateur', category: PBS_CATEGORIES.SECURITY }, position: { x: 900, y: 480 } },
  { id: 's5', data: { label: 'RGPD', category: PBS_CATEGORIES.SECURITY }, position: { x: 900, y: 540 } },
];

export const initialEdges: Edge[] = [
  // Root to Categories
  { id: 'root-hardware', source: 'root', target: 'hardware' },
  { id: 'root-firmware', source: 'root', target: 'firmware' },
  { id: 'root-app', source: 'root', target: 'app' },
  { id: 'root-backend', source: 'root', target: 'backend' },
  { id: 'root-security', source: 'root', target: 'security' },

  // Hardware connections
  { id: 'e-h1', source: 'hardware', target: 'h1' },
  { id: 'e-h2', source: 'hardware', target: 'h2' },
  { id: 'e-h3', source: 'hardware', target: 'h3' },
  { id: 'e-h4', source: 'hardware', target: 'h4' },
  { id: 'e-h5', source: 'hardware', target: 'h5' },
  { id: 'e-h6', source: 'hardware', target: 'h6' },
  { id: 'e-h7', source: 'hardware', target: 'h7' },

  // Firmware connections
  { id: 'e-f1', source: 'firmware', target: 'f1' },
  { id: 'e-f2', source: 'firmware', target: 'f2' },
  { id: 'e-f3', source: 'firmware', target: 'f3' },
  { id: 'e-f4', source: 'firmware', target: 'f4' },

  // App connections
  { id: 'e-a1', source: 'app', target: 'a1' },
  { id: 'e-a2', source: 'app', target: 'a2' },
  { id: 'e-a3', source: 'app', target: 'a3' },
  { id: 'e-a4', source: 'app', target: 'a4' },
  { id: 'e-a5', source: 'app', target: 'a5' },
  { id: 'e-a6', source: 'app', target: 'a6' },

  // Backend connections
  { id: 'e-b1', source: 'backend', target: 'b1' },
  { id: 'e-b2', source: 'backend', target: 'b2' },
  { id: 'e-b3', source: 'backend', target: 'b3' },
  { id: 'e-b4', source: 'backend', target: 'b4' },
  { id: 'e-b5', source: 'backend', target: 'b5' },

  // Security connections
  { id: 'e-s1', source: 'security', target: 's1' },
  { id: 'e-s2', source: 'security', target: 's2' },
  { id: 'e-s3', source: 'security', target: 's3' },
  { id: 'e-s4', source: 'security', target: 's4' },
  { id: 'e-s5', source: 'security', target: 's5' },
];
