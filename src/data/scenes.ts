export interface Scene {
  image: string;
  segmentStart: number;
  segmentEnd: number;
}

export const storyScenes: Record<string, Scene[]> = {
  'krishna-and-fruit-seller': [
    { image: 'scene-0-title.png', segmentStart: 0, segmentEnd: 0 },
    { image: 'scene-1.png', segmentStart: 1, segmentEnd: 1 },
    { image: 'scene-2.png', segmentStart: 2, segmentEnd: 2 },
    { image: 'scene-3.png', segmentStart: 3, segmentEnd: 3 },
    { image: 'scene-4.png', segmentStart: 4, segmentEnd: 4 },
    { image: 'scene-5.png', segmentStart: 5, segmentEnd: 5 },
    { image: 'scene-6.png', segmentStart: 6, segmentEnd: 6 },
    { image: 'scene-7.png', segmentStart: 7, segmentEnd: 7 },
    { image: 'scene-8.png', segmentStart: 8, segmentEnd: 8 },
    { image: 'scene-9.png', segmentStart: 9, segmentEnd: 9 },
    { image: 'scene-10.png', segmentStart: 10, segmentEnd: 11 },
  ],
};
