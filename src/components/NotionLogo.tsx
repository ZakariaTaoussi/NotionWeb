import Image from "next/image";

type NotionLogoProps = {
  compact?: boolean;
};

export function NotionLogo({ compact = false }: NotionLogoProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl border border-[#D4DDE2] bg-white/82 px-3 py-2 text-sm font-semibold text-[#111827] shadow-[0_12px_34px_rgba(92,126,143,0.12)] backdrop-blur-xl">
      <span className="relative grid size-7 place-items-center overflow-hidden rounded-lg border border-[#111827] bg-white">
        <Image
          src="/templates/notion.png"
          alt="Notion logo"
          fill
          sizes="28px"
          className="object-contain p-0.5"
        />
      </span>
      {compact ? null : <span>Built for Notion</span>}
    </span>
  );
}
