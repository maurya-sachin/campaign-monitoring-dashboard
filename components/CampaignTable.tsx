import { Campaign } from "@/lib/types";
import Link from "next/link";
import { memo } from "react";

interface CampaignTableProps {
  campaigns: Campaign[];
}

const CampaignRow = memo(function CampaignRow({
  campaign,
}: {
  campaign: Campaign;
}) {
  return (
    <tr className="border-t hover:bg-gray-50">
      <td className="px-4 py-2">
        <Link
          href={`/campaigns/${campaign.id}`}
          className="text-blue-600 hover:underline"
        >
          {campaign.name}
        </Link>
      </td>

      <td className="px-4 py-2 text-gray-600 capitalize">
        {campaign.platforms.join(", ")}
      </td>

      <td className="px-4 py-2 text-gray-600">{campaign.daily_budget}</td>

      <td className="px-4 py-2 text-gray-600 capitalize">{campaign.status}</td>
    </tr>
  );
});

export function CampaignTable({ campaigns }: CampaignTableProps) {
  return (
    <div className="overflow-x-auto rounded border bg-white">
      <table className="w-full border-collapse text-sm">
        <caption className="sr-only">
          List of advertising campaigns with platform, budget, and status
        </caption>
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 font-medium">Name</th>
            <th className="px-4 py-2 font-medium">Platform</th>
            <th className="px-4 py-2 font-medium">Daily Budget</th>
            <th className="px-4 py-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <CampaignRow key={campaign.id} campaign={campaign} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
