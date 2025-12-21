import { fetchFromApi } from "@/lib/api";
import { Campaign, AggregatedInsights } from "@/lib/types";
import { CampaignTable } from "@/components/CampaignTable";
import { EmptyState } from "@/components/EmptyState";
import { Panel } from "@/components/Panel";
import { KpiCard } from "@/components/KpiCard";
import {
  BarChart3,
  DollarSign,
  MousePointerClick,
  Target,
  Activity,
  PauseCircle,
  CheckCircle2,
} from "lucide-react";

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
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>

      <Panel title="Overview">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            label="Total Campaigns"
            value={insights.total_campaigns}
            icon={<Target size={18} />}
          />
          <KpiCard
            label="Active"
            value={insights.active_campaigns}
            icon={<Activity size={18} />}
          />
          <KpiCard
            label="Paused"
            value={insights.paused_campaigns}
            icon={<PauseCircle size={18} />}
          />
          <KpiCard
            label="Completed"
            value={insights.completed_campaigns}
            icon={<CheckCircle2 size={18} />}
          />
        </div>
      </Panel>

      <Panel title="Performance">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <KpiCard
            label="Impressions"
            value={insights.total_impressions}
            icon={<BarChart3 size={18} />}
          />
          <KpiCard
            label="Clicks"
            value={insights.total_clicks}
            icon={<MousePointerClick size={18} />}
          />
          <KpiCard
            label="Conversions"
            value={insights.total_conversions}
            icon={<Target size={18} />}
          />
          <KpiCard
            label="Total Spend"
            value={insights.total_spend}
            format="currency"
            icon={<DollarSign size={18} />}
          />
        </div>
      </Panel>

      <Panel title="Campaigns">
        {campaigns.length === 0 ? (
          <EmptyState message="No campaigns available." />
        ) : (
          <CampaignTable campaigns={campaigns} />
        )}
      </Panel>
    </section>
  );
}
