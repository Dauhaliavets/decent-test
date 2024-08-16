interface Country {
  name: {
    common: string;
  };
  ccn3: string;
  region: string;
  capital: string[];
  languages: {
    [key: string]: string;
  };
  flag: string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
}

export type { Country };
