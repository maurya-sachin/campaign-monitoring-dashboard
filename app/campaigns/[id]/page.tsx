import { fetchFromApi } from "@/lib/api";
import { Campaign, CampaignInsights } from "@/lib/types";
import { Metric } from "@/components/Metric";

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
  const [campaign, insights] = await Promise.all([
    getCampaign(params.id),
    getCampaignInsights(params.id),
  ]);

  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-xl font-semibold">{campaign.name}</h2>
        <p className="text-sm text-gray-600">Status: {campaign.status}</p>
      </header>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        <Metric label="Impressions" value={insights.impressions} />
        <Metric label="Clicks" value={insights.clicks} />
        <Metric label="Spend" value={insights.spend} />
        <Metric label="CPC" value={insights.cpc} />
        <Metric label="CPM" value={insights.cpm} />
        <Metric label="Conversion Rate" value={insights.conversion_rate} />
      </div>
    </section>
  );
}
