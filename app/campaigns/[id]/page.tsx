import { ApiError, fetchFromApi } from "@/lib/api";
import { Campaign, CampaignInsights } from "@/lib/types";
import { Metric } from "@/components/Metric";
import { NotFound } from "@/components/NotFound";

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
    <section className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-xl font-semibold">{campaign.name}</h2>
        <p className="text-sm text-gray-600 capitalize">
          Status: {campaign.status}
        </p>
      </header>

      {/* Campaign metadata */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <div className="rounded border bg-white p-4">
          <div className="text-sm text-gray-500">Platforms</div>
          <div className="font-medium capitalize">
            {campaign.platforms.join(", ")}
          </div>
        </div>

        <div className="rounded border bg-white p-4">
          <div className="text-sm text-gray-500">Budget</div>
          <div className="font-medium">{campaign.budget}</div>
        </div>

        <div className="rounded border bg-white p-4">
          <div className="text-sm text-gray-500">Daily Budget</div>
          <div className="font-medium">{campaign.daily_budget}</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <Metric label="Impressions" value={insights.impressions} />
        <Metric label="Clicks" value={insights.clicks} />
        <Metric label="Conversions" value={insights.conversions} />
        <Metric label="Spend" value={insights.spend} format="currency" />
        <Metric label="CTR (%)" value={insights.ctr} format="percentage" />
        <Metric label="CPC" value={insights.cpc} format="currency" />
        <Metric
          label="Conversion Rate (%)"
          value={insights.conversion_rate}
          format="percentage"
        />
      </div>
    </section>
  );
}
