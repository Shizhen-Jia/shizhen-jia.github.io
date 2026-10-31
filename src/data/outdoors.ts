export interface OutdoorPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const outdoorAlbums: { id: string; title: string; photos: OutdoorPhoto[] }[] = [
  {
    id: "snow",
    title: "Snow",
    photos: [
      { src: "/img/life/ski1.webp", alt: "Skiing on a snowy mountain beneath a clear sky", width: 1200, height: 900 },
      { src: "/img/life/ski2.webp", alt: "A day on the ski slopes, photo 2", width: 1200, height: 965 },
      { src: "/img/life/ski3.webp", alt: "A day on the ski slopes, photo 3", width: 1200, height: 980 },
    ],
  },
  {
    id: "14er",
    title: "14er",
    photos: [
      { src: "/img/life/14er/mountain-07.webp", alt: "Panoramic view of rugged mountain peaks beneath a blue sky", width: 1600, height: 1067 },
      { src: "/img/life/14er/mountain-01.webp", alt: "A rocky mountain ridge beneath a clear blue sky", width: 1200, height: 1600 },
      { src: "/img/life/14er/mountain-02.webp", alt: "Warm light across a rocky mountain ridge", width: 1600, height: 1200 },
      { src: "/img/life/14er/mountain-03.webp", alt: "A starry sky above a mountain campsite", width: 1067, height: 1600 },
      { src: "/img/life/14er/mountain-04.webp", alt: "Golden mountain slopes beneath wispy clouds", width: 1067, height: 1600 },
      { src: "/img/life/14er/mountain-05.webp", alt: "A sunlit ridgeline with layers of mountains in the distance", width: 1067, height: 1600 },
      { src: "/img/life/14er/mountain-06.webp", alt: "A winding creek through a deep mountain valley", width: 1067, height: 1600 },
      { src: "/img/life/14er/mountain-08.webp", alt: "Snow patches and alpine lakes surrounded by mountain ridges", width: 1600, height: 1200 },
    ],
  },
  {
    id: "backpacking",
    title: "Backpacking",
    photos: [
      { src: "/img/life/backpacking/camp-05.webp", alt: "A tent beside sand dunes in golden light", width: 1600, height: 1067 },
      { src: "/img/life/backpacking/camp-01.webp", alt: "A backpack, sleeping pad, and trekking poles on a sand dune", width: 1200, height: 1600 },
      { src: "/img/life/backpacking/camp-02.webp", alt: "Footprints leading across sand dunes toward distant mountains", width: 1200, height: 1600 },
      { src: "/img/life/backpacking/camp-03.webp", alt: "Rolling sand dunes with mountains on the horizon at dusk", width: 1600, height: 1067 },
      { src: "/img/life/backpacking/camp-04.webp", alt: "An illuminated tent beneath a starry night sky", width: 1600, height: 1067 },
      { src: "/img/life/backpacking/camp-06.webp", alt: "Pink clouds above a mountain range beyond the dunes", width: 1600, height: 1200 },
      { src: "/img/life/backpacking/camp-07.webp", alt: "A hiker silhouetted on a dune beneath a colorful sky", width: 1600, height: 1200 },
    ],
  },
];
