import { Campaign } from "@/lib/types";
import Link from "next/link";
import { StatusBadge } from "@/components/StatusBadge";
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
    <tr className="group border-t border-slate-100 hover:bg-slate-50
  dark:border-slate-700 dark:hover:bg-slate-700">
      <td className="px-4 py-3">
        <Link
          href={`/campaigns/${campaign.id}`}
          className="font-medium text-slate-900 hover:underline
  dark:text-slate-100"
        >
          {campaign.name}
        </Link>
      </td>

      <td className="px-4 py-3 text-sm text-slate-400 capitalize">
        {campaign.platforms.join(", ")}
      </td>

      <td className="px-4 py-3 text-right text-sm font-medium text-slate-400">
        {campaign.daily_budget}
      </td>

      <td className="px-4 py-3">
        <StatusBadge status={campaign.status} />
      </td>
    </tr>
  );
});

export function CampaignTable({ campaigns }: CampaignTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white
  dark:bg-slate-800 dark:border-slate-700">
      <table className="w-full border-collapse text-sm">
        <caption className="sr-only">
          List of advertising campaigns
        </caption>

        <thead className="bg-slate-50 dark:bg-slate-700">
          <tr className="group border-t border-slate-100 hover:bg-slate-50
  dark:border-slate-700 dark:hover:bg-slate-700">
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide
  text-slate-500 dark:text-slate-300">
              Name
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide
  text-slate-500 dark:text-slate-300">
              Platform
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide
  text-slate-500 dark:text-slate-300">
              Daily Budget
            </th>
            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide
  text-slate-500 dark:text-slate-300">
              Status
            </th>
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
