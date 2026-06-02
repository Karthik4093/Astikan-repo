import { useMemo } from "react";

export type PremiumInputs = {
  ageBand: string;
  coverage: number;
  adults: number;
  children: number;
  teleconsultations: number;
  labTests: number;
  opdVisits: number;
  medicineBuckets: number;
  paSumInsured: number;
};

export function usePremiumEstimate(inputs: PremiumInputs) {
  return useMemo(() => {
    const ageFactor = inputs.ageBand === "56-65 years" ? 1.45 : inputs.ageBand === "46-55 years" ? 1.25 : 1;
    const familyFactor = inputs.adults * 1450 + inputs.children * 700;
    const careUsage = inputs.teleconsultations * 120 + inputs.labTests * 450 + inputs.opdVisits * 350 + inputs.medicineBuckets * 250;
    const coverageFactor = inputs.coverage / 100000;
    const accidentFactor = inputs.paSumInsured / 50000;

    return Math.round((5200 + familyFactor + careUsage + coverageFactor * 540 + accidentFactor * 300) * ageFactor);
  }, [inputs]);
}
