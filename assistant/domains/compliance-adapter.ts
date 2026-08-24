import type { ComplianceStatus } from "./types";

const ENGLAND_COMPLIANCE_FIXTURE: ComplianceStatus = {
  principal_id: "usr_renter_001",
  market_code: "GB",
  requirements: [
    {
      id: "comp_001",
      type: "right_to_rent",
      title: "Right to Rent check",
      description: "Landlords in England must verify that tenants have the legal right to rent in the UK. You will need to provide valid photo ID and proof of immigration status.",
      status: "met",
      evidence_url: "/verification",
    },
    {
      id: "comp_002",
      type: "deposit_protection",
      title: "Tenancy deposit protection",
      description: "Your deposit must be protected in a government-approved tenancy deposit scheme within 30 days of payment. Zoiko Rooms uses the Deposit Protection Service (DPS).",
      status: "met",
    },
    {
      id: "comp_003",
      type: "energy_performance",
      title: "Energy Performance Certificate (EPC)",
      description: "The property must have a valid EPC with a rating of E or above. The host is responsible for providing this.",
      status: "met",
    },
    {
      id: "comp_004",
      type: "gas_safety",
      title: "Gas Safety Certificate",
      description: "A current Gas Safety certificate (CP12) is required for all properties with gas appliances. The host must provide a copy within 28 days of the check.",
      status: "met",
    },
  ],
  overall_status: "compliant",
};

export async function getComplianceStatus(
  principalId: string,
  marketCode: string
): Promise<ComplianceStatus> {
  if (marketCode !== "GB") {
    return {
      principal_id: principalId,
      market_code: marketCode,
      requirements: [],
      overall_status: "not_applicable",
    };
  }

  return { ...ENGLAND_COMPLIANCE_FIXTURE, principal_id: principalId };
}
