export interface Project {
  slug: string;
  name: string;
  desc: string;
  affiliation?: string;
  approach?: string;
  links: { label: string; href: string }[];
  tags: string[];
  media: {
    type: "image" | "gif" | "video";
    src: string;
    alt?: string;
    poster?: string;
    width?: number;
    height?: number;
    caption?: string;
  }[];
  results?: { value: string; label: string; detail: string }[];
  resultNote?: string;
  poster?: { pdf: string; preview: string };
}

export const projects: Project[] = [
  {
    slug: "leo-spatial-reuse",
    name: "Intra-Cell Spatial Reuse in LEO Downlinks: Beam-Leakage-Aware Satellite Scheduling",
    affiliation: "NYU WIRELESS · CableLabs",
    desc: "Enabling multiple LEO satellites to serve the same hotspot on shared spectrum. Beam-leakage-aware scheduling balances link strength and interference between overlapping beams to improve downlink capacity, with the largest gains for weaker links.",
    approach: "The BL-BnB branch-and-bound scheduler jointly considers received power and receive-array leakage, finding optimal schedules for the reference-point model. Evaluation uses a 24-hour Starlink trace with 720 snapshots, realistic antenna arrays, and atmospheric loss modeling.",
    links: [{ label: "View poster (PDF · 815 KB)", href: "/projects/leo-spatial-reuse/poster.pdf" }],
    tags: ["LEO Downlinks", "Spatial Reuse", "Satellite Scheduling", "Branch-and-Bound", "MATLAB", "Python"],
    media: [{
      type: "image",
      src: "/projects/leo-spatial-reuse/scenario.png",
      alt: "Multiple LEO satellites serve ground terminals in one cell. Solid blue arrows show desired downlinks; dashed red arrows show cochannel interference from other satellites.",
      width: 1414,
      height: 1276,
      caption: "Shared cell, shared spectrum: satellite selection must account for interference as well as signal strength.",
    }],
    results: [
      { value: "+27.2%", label: "Mean per-beam capacity", detail: "362.9 → 461.6 Mbps · 8 beams" },
      { value: "2.31×", label: "Mean per-snapshot minimum rate", detail: "173.8 → 401.3 Mbps · 8 beams" },
      { value: "267×", label: "Faster than exhaustive search", detail: "529.48 → 1.98 ms · select 8 of 28" },
    ],
    resultNote: "Simulation results reported in the poster. Capacity gains are relative to nearest-satellite selection; runtime compares BL-BnB with exhaustive search for the stated candidate pool.",
    poster: {
      pdf: "/projects/leo-spatial-reuse/poster.pdf",
      preview: "/projects/leo-spatial-reuse/poster-preview.jpg",
    },
  },
  {
    slug: "ntn-adjacent-channel-coexistence",
    name: "NTNCoex: Adjacent-Channel Coexistence for Satellite and Terrestrial Networks",
    affiliation: "CableLabs · NTN Study Internship · May–Aug. 2026",
    desc: "Reproduced the NTN–TN coexistence results in 3GPP TR 38.863 and extended the simulation framework to multi-satellite systems with aggregate interference. The study combines multi-satellite LEO-to-LEO and LEO-to-GEO downlink interference with six NTN–TN coexistence scenarios covering downlink, uplink, and cross-link interference at 2 GHz.",
    approach: "Integrated satellite geometry, seven-beam antenna models, urban/rural terrestrial deployments, 3GPP propagation models, and ITU-R P.618 atmospheric losses. Modeled transmitter leakage and receiver selectivity through adjacent-channel interference ratio (ACIR), then used geometry and Monte Carlo sweeps to quantify interference from multiple satellites and its impact on SINR, mean throughput, and fifth-percentile throughput. Evaluated ACIR requirements against a 5% throughput-loss criterion.",
    links: [],
    tags: ["NTN–NTN", "NTN–TN", "Adjacent-Channel Interference", "3GPP TR 38.863", "Monte Carlo", "MATLAB", "Python"],
    media: [],
    results: [
      { value: "LEO / GEO", label: "Multi-satellite coexistence", detail: "Aggregate interference across LEO-to-LEO and LEO-to-GEO downlinks" },
      { value: "6 scenarios", label: "Terrestrial–satellite coexistence", detail: "DL, UL, and cross-link interference paths" },
      { value: "5% loss", label: "Evaluation criterion", detail: "Mean and fifth-percentile throughput" },
    ],
    resultNote: "ACIR requirements are evaluated for each satellite geometry, antenna configuration, deployment, and loading condition.",
  },
  {
    slug: "nulling-upper-mid-band",
    name: "Nulling for Terrestrial-Satellite Downlink Co-Existence in the Upper Mid-Band",
    desc: "Simulation and analysis of null-forming / interference suppression for LEO/NTN scenarios.",
    links: [{ label: "Code", href: "https://github.com/Shizhen-Jia/NTN-Nulling" }],
    tags: ["Interference Nulling", "Detection", "Channel Estimation", "NTN", "FR3", "Upper Mid-Band", "TN-NTN Co-Existence"],
    media: [],
  },
  {
    slug: "distributed-uplink-anti-jamming",
    name: "Distributed Uplink Anti-Jamming in LEO Mega-Constellations via Game-Theoretic Beamforming",
    desc: "Simulation and analysis of null-forming / interference suppression for LEO/NTN scenarios.",
    links: [{ label: "Code", href: "https://github.com/Shizhen-Jia/NTN-Anti-Jamming" }],
    tags: ["LEO Satellites", "Anti-Jamming", "Non-Terrestrial Networks", "NTN", "Game Theory"],
    media: [],
  },
  {
    slug: "ota-phase-measurements-calibration",
    name: "OTA phase measurements and array calibration",
    desc: "From link-level methods to system-level evaluation with realistic geometry and overhead modeling.",
    links: [],
    tags: ["Phase Measurement", "Multipath", "FR3 Multi-band"],
    media: [],
  },
];
