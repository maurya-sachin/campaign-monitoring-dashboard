import { fetchFromApi } from "@/lib/api";
import { Campaign } from "@/lib/types";

async function getCampaigns(): Promise<Campaign[]> {
  const data = await fetchFromApi<{ campaigns: Campaign[] }>("/campaigns");
  return data.campaigns;
}

export default async function DashboardPage() {
  const campaigns = await getCampaigns();

  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold">Dashboard</h2>

      <ul className="space-y-2">
        {campaigns.map((campaign) => (
          <li key={campaign.id} className="rounded border bg-white p-3 text-sm">
            <div className="font-medium">{campaign.name}</div>
            <div className="text-gray-500">{campaign.status}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
