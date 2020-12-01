interface DownloadOnAppStoreProps { 
  href?: string;
}

export default function DownloadOnAppStore({ href }: DownloadOnAppStoreProps) {
  return (
    <a href={href}>
      <img
        src="/img/download-on-app-store.svg"
        alt="download-on-app-store"
        style={{ height: "40pt" }}
        height="40pt"
      />
    </a>
  )
}
