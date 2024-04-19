import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/1b6837c5-b06a-41f3-b626-347579a138ce-j88z62.jpg",
  "https://utfs.io/f/edb589b5-44a6-4c25-b91e-f705856c1060-ydtx7a.jpg",
  "https://utfs.io/f/e60df145-a43d-41e4-9e43-26cbeaa88da3-c6lmgd.webp",
  "https://utfs.io/f/26da2c2e-c1a4-45ad-bb0a-4aa9e822e1c2-hpupjb.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
