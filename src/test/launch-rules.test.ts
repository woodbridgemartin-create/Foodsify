import { describe, expect, it } from "vitest";
import { launchStatus, company } from "@/lib/site-content";
describe("Foodsify launch boundaries", () => {
  it("has no operational referral tracking", () => expect(launchStatus.referralTechnologyLive).toBe(false));
  it("has no operational referral payments", () => expect(launchStatus.referralPaymentsLive).toBe(false));
  it("does not offer registration yet", () => expect(launchStatus.registrationOpen).toBe(false));
  it("does not invent a membership price", () => expect(launchStatus.membershipPrice).toBeNull());
  it("keeps founding pricing under finalisation", () => expect(launchStatus.pricingStatus).toBe("being-finalised"));
  it("does not intend to require customer apps", () => expect(launchStatus.customerAppRequired).toBe(false));
  it("does not intend to require customer accounts", () => expect(launchStatus.customerAccountRequired).toBe(false));
  it("identifies the correct legal company", () => expect(company.legalName).toBe("Leadsopedia Limited"));
  it("uses the supplied company number", () => expect(company.number).toBe("13145058"));
  it("uses the supplied registered office", () => expect(company.registeredOffice).toBe("5 Brayford Square, London, E1 0SG"));
});