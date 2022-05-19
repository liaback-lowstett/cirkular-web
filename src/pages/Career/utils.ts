export interface CareerResult {
  header: string;
  body: string;
  culture: {
    cultureStatement2: Culture;
    cultureStatement3: Culture;
    cultureStatement4: Culture;
    cultureStatement5: Culture;
    cultureStatement6: Culture;
  };
}

interface Culture {
  description: string;
  header: string;
}
