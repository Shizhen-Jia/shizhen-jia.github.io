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
    name: "Over-the-Air Phase Measurements and Calibration in the Upper Mid-Band: Multipath Statistics and Spatial Averaging",
    affiliation: "NYU WIRELESS · IMDEA Networks · Pi-Radio",
    desc: "Characterizing how unresolved multipath perturbs narrowband phase measurements, and using spatial averaging for relative over-the-air calibration. The work combines an indoor upper mid-band measurement campaign, phase-error statistics, and sampling design under a fixed observation budget.",
    approach: "Measure paired narrowband and wideband responses from the same records, derive a dominant-path phase-error model, and estimate relative receive-channel phase by circular averaging of normalized channel ratios. Compare pooled random sampling with approximately equally spaced positions to separate spatial coverage from observation count.",
    links: [
      { label: "Read paper (PDF)", href: "/projects/ota-phase-measurements-calibration/paper.pdf" },
      { label: "View poster (PDF)", href: "/projects/ota-phase-measurements-calibration/poster.pdf" },
    ],
    tags: ["OTA Calibration", "Phase Statistics", "Spatial Averaging", "Upper Mid-Band", "RFSoC / Pi-Radio", "MATLAB", "Python"],
    media: [{
      type: "image",
      src: "/projects/ota-phase-measurements-calibration/measurement-setup.webp",
      alt: "Indoor OTA measurement setup with a transmit antenna on a linear rail, two receive antennas, Pi-Radio FR3 hardware, and a ZCU111 RFSoC.",
      width: 1800,
      height: 703,
      caption: "Radial transmitter motion preserves a nearly constant LOS angle while changing the multipath contributions.",
    }],
    results: [
      { value: "26 × 5", label: "Indoor runs × carriers", detail: "130 measurement–frequency configurations · 8.75–14.9 GHz" },
      { value: "29.5%", label: "Lower median calibration RMSE", detail: "3.36° → 2.37° · pooled random → systematic sampling" },
      { value: "128 / 130", label: "Configurations improved", detail: "Same estimator and 50-observation budget" },
    ],
    resultNote: "Sampling results use a 598 mm span and 5% bandwidth, with errors measured against the paired full-bandwidth reference. The 29.5% reduction compares the two median RMSE values; the median of paired configuration-wise percentage reductions is 17.5%.",
    poster: {
      pdf: "/projects/ota-phase-measurements-calibration/poster.pdf",
      preview: "/projects/ota-phase-measurements-calibration/poster-preview.webp",
    },
  },
];
