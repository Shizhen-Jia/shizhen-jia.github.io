export interface Publication {
  title: string;
  authors: string[];
  venue?: string;
  status?: string;
  year: string;
  paperUrl: string;
  codeUrl?: string;
  keywords: string[];
}

export const publications: Publication[] = [
  {
    title: "Intra-Cell Spatial Reuse in LEO Downlinks: Beam-Leakage-Aware Satellite Scheduling",
    authors: ["Shizhen Jia", "Hao Guo", "Ruoyu Sun", "Hans Geerdes", "Mark Poletti", "Songwei Dong", "Lauryn Smith", "Sundeep Rangan"],
    status: "Manuscript",
    year: "2026",
    paperUrl: encodeURI("/papers/Intra-Cell Spatial Reuse in LEO Downlinks - Beam-Leakage-Aware Satellite Scheduling.pdf"),
    keywords: ["LEO Satellites", "Spatial Reuse", "Satellite Scheduling", "Interference Management", "Branch-and-Bound"],
  },
  {
    title: "Noncoherent Detection and Interference Nulling for Terrestrial-Satellite Downlink Coexistence in the Upper Mid-Band",
    authors: ["Shizhen Jia", "C. Nicolas Barati", "Marco Mezzavilla", "Sundeep Rangan"],
    venue: "IEEE SPAWC 2026",
    year: "2026",
    paperUrl: "https://arxiv.org/abs/2607.21838",
    codeUrl: "https://github.com/Shizhen-Jia/NTN-NULLING-NONCOH",
    keywords: ["Noncoherent Detection", "Interference Nulling", "NTN", "Upper Mid-Band"],
  },
  {
    title: "Distributed Uplink Anti-Jamming in LEO Mega-Constellations via Game-Theoretic Beamforming",
    authors: ["Shizhen Jia", "Mingjun Ying", "Marco Mezzavilla", "Theodore S. Rappaport", "Sundeep Rangan"],
    venue: "IEEE ICC 2026",
    year: "2026",
    paperUrl: "https://ieeexplore.ieee.org/document/11586786/",
    codeUrl: "https://github.com/SJ00425/NTN-Anti-Jamming",
    keywords: ["LEO Satellites", "Anti-Jamming", "NTN", "Game Theory"],
  },
  {
    title: "Joint Detection, Channel Estimation and Interference Nulling for Terrestrial-Satellite Downlink Co-Existence in the Upper Mid-Band",
    authors: ["Shizhen Jia", "Mingjun Ying", "Marco Mezzavilla", "Doru Calin", "Theodore S. Rappaport", "Sundeep Rangan"],
    venue: "IEEE GLOBECOM 2025",
    year: "2025",
    paperUrl: "https://ieeexplore.ieee.org/document/11432307/",
    codeUrl: "https://github.com/SJ00425/NTN-Nulling",
    keywords: ["Interference Nulling", "Detection", "Channel Estimation", "NTN", "FR3", "Upper Mid-Band"],
  },
];
