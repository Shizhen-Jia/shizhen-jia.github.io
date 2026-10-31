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
    name: "NTNCoex: NTN–NTN & NTN–TN Adjacent-Channel Coexistence",
    affiliation: "CableLabs · NTN Study Internship · May–Aug. 2026",
    desc: "System-level adjacent-channel coexistence evaluation at 2 GHz, covering both NTN–NTN (LEO-to-LEO and LEO-to-GEO downlinks) and six NTN–TN downlink, uplink, and cross-link scenarios. Reproduced the NTN–TN results in 3GPP TR 38.863 and extended the framework to multi-satellite systems, quantifying aggregate interference, throughput loss, and required adjacent-channel isolation.",
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
    name: "TN-NTN Coexistance: Coherent Beacons, Blind Spatial Sensing & Interference Nulling",
    affiliation: "NYU WIRELESS · Politecnico di Milano · Old Dominion University",
    desc: "Protecting satellite downlink receivers while cellular base stations reuse upper mid-band spectrum. This project connects beacon-aided channel estimation and blind uplink sensing to spatial nulling, residual-interference analysis, and site-specific network evaluation.",
    approach: "Develop a covariance-eigenvector GLRT and MUSIC-based sensing, reconstruct spatial directions at the downlink carrier, and optimize fixed-power beams to balance TN signal gain against NTN interference. Analyze how channel-estimation error, finite snapshots, and intermittent uplink activity limit protection.",
    links: [
      { label: "Coherent study (PDF)", href: "/projects/nulling/coherent-paper.pdf" },
      { label: "Noncoherent study (PDF)", href: "/projects/nulling/noncoherent-paper.pdf" },
      { label: "Latest poster (PDF)", href: "/projects/nulling/poster.pdf" },
    ],
    tags: ["TN–NTN Coexistence", "Interference Nulling", "Coherent / Noncoherent Sensing", "GLRT / MUSIC", "FR3", "Python", "Sionna RT"],
    media: [{
      type: "image",
      src: "/projects/nulling/system-model.webp",
      alt: "A cellular base station senses an NTN terminal's uplink, then suppresses downlink leakage toward that terminal while serving a terrestrial user.",
      width: 1314,
      height: 460,
      caption: "Listen at the NTN uplink carrier; design the cellular beam at the shared downlink carrier.",
    }],
    results: [
      { value: "65.3 → 85.2%", label: "NTN samples with INR ≤ −3 dB", detail: "No nulling → noncoherent nulling · λ = 10¹¹" },
      { value: "1.05 dB", label: "TN median SINR cost", detail: "22.82 → 21.77 dB at the same operating point" },
      { value: "±20%", label: "UL–DL carrier-offset sweep", detail: "6.4–9.6 GHz sensing · 8 GHz downlink" },
    ],
    resultNote: "The first two results use co-frequency sensing and downlink at 8 GHz. This analytic-covariance study uses 20 paired deployments, 918 linked NTN samples, 240 TN samples, and 8 × 8 BS arrays; finite-snapshot estimation error is evaluated separately.",
    poster: {
      pdf: "/projects/nulling/poster.pdf",
      preview: "/projects/nulling/poster-preview.webp",
    },
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
