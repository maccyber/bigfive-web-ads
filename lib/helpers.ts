import b5, { type Question, type Info } from '@alheimsins/b5-johnson-120-ipip-neo-pi-r';

interface Language {
  value: string;
  text: string;
}

export const languages: Language[] = b5.getInfo()
  .languages
  .map(({ id, text }: { id: string; text: string }) => ({ value: id, text }))
  .sort((a: Language, b: Language) => a.text.localeCompare(b.text));

export const getItems: () => Question[] = b5.getItems;

export const getInfo: () => Info = b5.getInfo;

export const secToMin = (seconds: number): string => {
  const minutes: number = Math.floor(seconds / 60);
  const remainingSeconds: number = seconds % 60;
  
  const formattedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds: string = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
  
  return `${formattedMinutes}:${formattedSeconds}`;
};

export const sleep: (ms: number) => Promise<void> = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const validMongoId: (id: string) => boolean = (id: string) => /^[0-9a-fA-F]{24}$/.test(id);

export const base64url: (str: string) => string = (str: string) => escape(Buffer.from(str, 'utf8').toString('base64'));

export const formatId: (id: string) => string = (id: string) => {
  return /^((http|https):\/\/)/.test(id) ? id.replace((process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://bigfive-test.com') + '/result/', '').replace(' ', '').toLowerCase() : id ? id.replace(' ', '') : id;
};

export const elapsedTimeInSeconds: (startTime: number) => number = (startTime: number) => Math.round((Date.now() - startTime) / 1000);
