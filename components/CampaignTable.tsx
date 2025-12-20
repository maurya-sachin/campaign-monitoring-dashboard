import { Campaign } from "@/lib/types";

interface CampaignTableProps {
  campaigns: Campaign[];
}

export function CampaignTable({ campaigns }: CampaignTableProps) {
  return (
    <div className="overflow-x-auto rounded border bg-white">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2 font-medium">Name</th>
            <th className="px-4 py-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{campaign.name}</td>
              <td className="px-4 py-2 text-gray-600">{campaign.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
