import { fetchFromApi } from "@/lib/api";
import { Campaign } from "@/lib/types";
import { EmptyState } from "@/components/EmptyState";
import { CampaignTable } from "@/components/CampaignTable";

async function getCampaigns(): Promise<Campaign[]> {
  const data = await fetchFromApi<{ campaigns: Campaign[] }>("/campaigns");
  return data.campaigns;
}

export default async function DashboardPage() {
  const campaigns = await getCampaigns();

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">Dashboard</h2>

      {campaigns.length === 0 ? (
        <EmptyState message="No campaigns available." />
      ) : (
        <CampaignTable campaigns={campaigns} />
      )}
    </section>
  );
}
