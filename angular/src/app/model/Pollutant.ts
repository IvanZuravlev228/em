export class Pollutant {
  id: number = -1;
  name: string = "";
  minMass: number = 0;
  maxMass: number = 0;
  gdk: number = 0;
  dangerClass: number = 0;
  rfc: number = 0;
  sf: number = 0;
  organs: string = "";
  taxRatesByStationarySources: number = 0; // Ставка податку, гривень за 1 тонну
  taxRatesForDischargesToWaterBodies: number = 0; // Ставка податку, гривень за 1 тонну
  taxRatesForWasteDisposal: number = 0; // Ставка податку, гривень за 1 тонну
  taxRatesForTheGenerationOfRadioactiveWaste: number = 0;
  taxRatesForTemporaryStorageOfRadioactiveWaste: number = 0;
}
