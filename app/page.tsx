import { fetchFromApi } from "@/lib/api";
import { Campaign, AggregatedInsights } from "@/lib/types";
import { EmptyState } from "@/components/EmptyState";
import { CampaignTable } from "@/components/CampaignTable";
import { Metric } from "@/components/Metric";

async function getCampaigns(): Promise<Campaign[]> {
  const data = await fetchFromApi<{ campaigns: Campaign[] }>("/campaigns");
  return data.campaigns;
}

async function getInsights(): Promise<AggregatedInsights> {
  const data = await fetchFromApi<{ insights: AggregatedInsights }>(
    "/campaigns/insights"
  );
  return data.insights;
}

export default async function DashboardPage() {
  const [campaigns, insights] = await Promise.all([
    getCampaigns(),
    getInsights(),
  ]);

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Dashboard</h2>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Metric label="Total Campaigns" value={insights.total_campaigns} />
        <Metric label="Active" value={insights.active_campaigns} />
        <Metric label="Paused" value={insights.paused_campaigns} />
        <Metric label="Completed" value={insights.completed_campaigns} />
      </div>

      {/* Campaigns */}
      {campaigns.length === 0 ? (
        <EmptyState message="No campaigns available." />
      ) : (
        <CampaignTable campaigns={campaigns} />
      )}
    </section>
  );
}
