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

      {/* Summary */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Metric label="Total Campaigns" value={insights.total_campaigns} />
        <Metric label="Active" value={insights.active_campaigns} />
        <Metric label="Paused" value={insights.paused_campaigns} />
        <Metric label="Completed" value={insights.completed_campaigns} />
      </div>

      {/* Performance */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Metric label="Impressions" value={insights.total_impressions} />
        <Metric label="Clicks" value={insights.total_clicks} />
        <Metric label="Conversions" value={insights.total_conversions} />
        <Metric
          label="Total Spend"
          value={insights.total_spend}
          format="currency"
        />
      </div>

      {/* Efficiency */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <Metric
          label="Avg CTR (%)"
          value={insights.avg_ctr}
          format="percentage"
        />
        <Metric label="Avg CPC" value={insights.avg_cpc} format="currency" />
        <Metric
          label="Avg Conversion Rate (%)"
          value={insights.avg_conversion_rate}
        />
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
