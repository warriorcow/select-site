export enum VkPlayerEvent {
  inited = 'inited',
  paused = 'paused',
}

export interface VkPlayer {
  play(): void
  seek(num: number): void
  pause(): void
  on(event: VkPlayerEvent, callback: () => void): void;
}

declare global {
  interface Window {
    VK: {
      VideoPlayer(dom: HTMLElement): VkPlayer
    }
  }
}