export interface HomeResult {
  landing: {
    landingHeader: string;
    landingSubheader: string;
    landingImage: { url: string };
  };
  techPlatform: {
    techPlatformHeader: string;
    techPlatformImage: { url: string };
    techPlatformSubheader: string;
  };
  useCase: {
    aquafeedDescription: string;
    aquafeedHeader: string;
    aquafeedImage: { url: string };
    dairyProteinsDescription: string;
    dairyProteinsHeader: string;
    dairyProteinsImage: { url: string };
    useCaseHeader: string;
  };
  divider: {
    dividerImage: { url: string };
    dividerText: string;
  };
  team: {
    teamHeader: string;
    teamText: string;
  };
  advisoryBoard: {
    advisoryBoardHeader: string;
    advisoryBoardText: string;
  };
}
