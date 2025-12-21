import { ApiError, fetchFromApi } from "@/lib/api";
import { Campaign, CampaignInsights } from "@/lib/types";
import { Panel } from "@/components/Panel";
import { KpiCard } from "@/components/KpiCard";
import { StatusBadge } from "@/components/StatusBadge";
import { NotFound } from "@/components/NotFound";
import {
  BarChart3,
  MousePointerClick,
  Target,
  DollarSign,
  Percent,
} from "lucide-react";

interface CampaignPageProps {
  params: { id: string };
}

async function getCampaign(id: string): Promise<Campaign> {
  const data = await fetchFromApi<{ campaign: Campaign }>(`/campaigns/${id}`);
  return data.campaign;
}

async function getCampaignInsights(id: string): Promise<CampaignInsights> {
  const data = await fetchFromApi<{ insights: CampaignInsights }>(
    `/campaigns/${id}/insights`
  );
  return data.insights;
}

export default async function CampaignPage({ params }: CampaignPageProps) {
  let campaign;
  let insights;

  try {
    [campaign, insights] = await Promise.all([
      getCampaign(params.id),
      getCampaignInsights(params.id),
    ]);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return (
        <NotFound
          title="Campaign not found"
          description="The campaign you’re looking for doesn’t exist or was removed."
        />
      );
    }
    throw error;
  }

  return (
    <section className="space-y-8">
      {/* Hero */}
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          {campaign.name}
        </h1>

        <div className="flex items-center gap-4 text-sm text-slate-600">
          <StatusBadge status={campaign.status} />
          <span className="capitalize">
            Platforms: {campaign.platforms.join(", ")}
          </span>
        </div>
      </header>

      {/* Budget KPIs */}
      <Panel title="Budget">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <KpiCard
            label="Total Budget"
            value={campaign.budget}
            format="currency"
            icon={<DollarSign size={18} />}
          />
          <KpiCard
            label="Daily Budget"
            value={campaign.daily_budget}
            format="currency"
            icon={<DollarSign size={18} />}
          />
        </div>
      </Panel>

      {/* Performance */}
      <Panel title="Performance">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <KpiCard
            label="Impressions"
            value={insights.impressions}
            icon={<BarChart3 size={18} />}
          />
          <KpiCard
            label="Clicks"
            value={insights.clicks}
            icon={<MousePointerClick size={18} />}
          />
          <KpiCard
            label="Conversions"
            value={insights.conversions}
            icon={<Target size={18} />}
          />
        </div>
      </Panel>

      {/* Efficiency */}
      <Panel title="Efficiency">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <KpiCard
            label="Spend"
            value={insights.spend}
            format="currency"
            icon={<DollarSign size={18} />}
          />
          <KpiCard
            label="CTR"
            value={insights.ctr}
            format="percentage"
            icon={<Percent size={18} />}
          />
          <KpiCard
            label="CPC"
            value={insights.cpc}
            format="currency"
            icon={<DollarSign size={18} />}
          />
        </div>
      </Panel>
    </section>
  );
}
