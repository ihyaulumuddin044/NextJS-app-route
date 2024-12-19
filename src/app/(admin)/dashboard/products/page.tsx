"use client";
export default function AdminProductPage() {
  const revalidate = async() => {
    await fetch("/api/revalidate?tag=product", { method: "POST" });
  };
  return (
    <div>
      <button className="btn btn-primary text-white bg-blue-700" onClick={revalidate}>revalidate</button>
    </div>
  );
}
