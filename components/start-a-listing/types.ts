export type ProviderType = "landlord" | "agent" | "live-in" | "sublet";

export type ListingFormData = {
  providerType: ProviderType | null;
  fullName: string;
  email: string;
  address: string;
  city: string;
  roomType: string;
  occupancy: string;
  availableFrom: string;
  photoChecklist: Record<string, boolean>;
  ownershipEvidenceType: string;
  monthlyRent: string;
  deposit: string;
  bills: string;
  minStay: string;
};

export const EMPTY_FORM_DATA: ListingFormData = {
  providerType: null,
  fullName: "",
  email: "",
  address: "",
  city: "",
  roomType: "Private room",
  occupancy: "",
  availableFrom: "",
  photoChecklist: {},
  ownershipEvidenceType: "",
  monthlyRent: "",
  deposit: "",
  bills: "",
  minStay: "",
};

export type StepErrors = Partial<Record<keyof ListingFormData, string>>;

export const STEPS = [
  { key: 1, label: "Progress overview" },
  { key: 2, label: "Account & provider type" },
  { key: 3, label: "Property & room" },
  { key: 4, label: "Room Passport media" },
  { key: 5, label: "Authority & compliance" },
  { key: 6, label: "Terms & pricing" },
  { key: 7, label: "Preview & submit" },
] as const;

export const TOTAL_STEPS = STEPS.length;

export const PROVIDER_TYPE_OPTIONS: { value: ProviderType; label: string }[] = [
  { value: "landlord", label: "Landlord / Owner" },
  { value: "agent", label: "Authorized Agent" },
  { value: "live-in", label: "Live-in Provider" },
  { value: "sublet", label: "Authorized Sublet" },
];

export function validateStep(step: number, data: ListingFormData): StepErrors {
  const errors: StepErrors = {};

  if (step === 2) {
    if (!data.providerType) errors.providerType = "Choose the provider type that matches your role.";
    if (!data.fullName.trim()) errors.fullName = "Full name is required.";
    if (!data.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      errors.email = "Enter a valid email address.";
    }
  }

  if (step === 3) {
    if (!data.address.trim()) errors.address = "Street address is required.";
    if (!data.city.trim()) errors.city = "City is required.";
    if (!data.occupancy.trim()) errors.occupancy = "Household occupancy is required.";
    if (!data.availableFrom.trim()) errors.availableFrom = "Available-from date is required.";
  }

  if (step === 5) {
    if (!data.ownershipEvidenceType.trim()) {
      errors.ownershipEvidenceType = "Ownership evidence type is required.";
    }
  }

  if (step === 6) {
    if (!data.monthlyRent.trim()) {
      errors.monthlyRent = "Monthly rent is required.";
    } else if (!(Number(data.monthlyRent) > 0)) {
      errors.monthlyRent = "Enter a rent amount greater than 0.";
    }
    if (!data.deposit.trim()) {
      errors.deposit = "Deposit is required.";
    } else if (!(Number(data.deposit) >= 0)) {
      errors.deposit = "Deposit can't be negative.";
    }
    if (!data.bills.trim()) errors.bills = "Bills is required.";
    if (!data.minStay.trim()) {
      errors.minStay = "Minimum stay is required.";
    } else if (!(Number(data.minStay) >= 1)) {
      errors.minStay = "Minimum stay must be at least 1 month.";
    }
  }

  return errors;
}
